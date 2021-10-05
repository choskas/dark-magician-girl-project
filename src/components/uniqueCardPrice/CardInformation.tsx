import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToMyUniqueCards } from "../../redux/modules/storeCards";
import { addToMyWantedCards } from "../../redux/modules/wantedCards";
import {
  AlternativeImages,
  AlternativeImagesTitle,
  AlternativeImagesWrapper,
  AlternativeImagesWrapperAndTitleWrapper,
  ButtonDrawerContainer,
  CardArchetype,
  CardAtk,
  CardAtkDefWrapper,
  CardDef,
  CardDescription,
  CardDescriptionWrapper,
  CardIcon,
  CardImage,
  CardImageAndButtonWrapper,
  CardImageWrapper,
  CardInfoWrapper,
  CardName,
  DescritpionAndButtonWrapper,
  DrawerImage,
  DrawerImagesContainer,
  DrawerText,
  InputContainer,
  IWantItButtonWrapper,
  SelectContainer,
  SetCode,
  SetCodePriceWrapper,
  SetName,
  SetPrice,
  SetsContainer,
  SetsTitle,
  SetWrapper,
} from "../../styles/uniqueCardPrice/CardInformation";
import BottomDrawer from "../common/BottomDrawer";
import InputText from "../common/InputText";
import LoginButton from "../common/LoginButton";
import Select from "../common/Select";

interface CardInformationProps {
  cardInfo: any;
  session: any;
  isOpenDrawer: boolean;
  setIsOpenDrawer: Function;
}

const CardInformation = ({ cardInfo, session, isOpenDrawer, setIsOpenDrawer }: CardInformationProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardPrice, setCardPrice] = useState(null);
  const [cardImages, setCardImages] = useState([]);
  useEffect(() => {
    if (cardInfo) {
      const newArr = cardInfo.card_images.map((item) => {
        return {
          image: item.image_url,
          isActive: false,
        };
      });
      setCardImages(newArr);
    }
  }, [cardInfo]);
  return (
    <CardInfoWrapper>
      <CardImageAndButtonWrapper cardInfo={cardInfo}>
        <CardImageWrapper cardInfo={cardInfo}>
          <CardImage
            src={
              cardInfo
                ? cardInfo.card_images[0].image_url
                : "/assets/darkMagicianGirlTheDragonKnight.png"
            }
          />
        </CardImageWrapper>
        {cardInfo && (
          <IWantItButtonWrapper>
            <LoginButton onClick={() => {
              if (!session){
                router.push('/login')
                return
              }
              setIsOpenDrawer(!isOpenDrawer)
            }}>
              {session && session.user.role === "store" ? "!La tengo!" : "¡La quiero!"}
            </LoginButton>
          </IWantItButtonWrapper>
        )}
      </CardImageAndButtonWrapper>

      {cardInfo && (
        <>
          <DescritpionAndButtonWrapper>
            <CardDescriptionWrapper>
              <CardName>{cardInfo.name}</CardName>
              <CardAtkDefWrapper>
                <CardAtk>
                  <CardIcon src="/assets/swords.png" />
                  {cardInfo.atk}
                </CardAtk>
                <CardDef>
                  <CardIcon src="/assets/shield.png" />
                  {cardInfo.def}
                </CardDef>
              </CardAtkDefWrapper>
              <CardArchetype>Arquetipo: {cardInfo.archetype}</CardArchetype>
              <CardDescription>
                Description: <br /> {cardInfo.desc}
              </CardDescription>
            </CardDescriptionWrapper>
            <SetsContainer>
              <SetsTitle>Sets y precios</SetsTitle>
              <SetWrapper>
                {cardInfo.card_sets && cardInfo.card_sets.map((item, key) => (
                  <>
                    <SetName key={key}>{item.set_name}</SetName>
                    <SetCodePriceWrapper>
                      <SetCode title={item.set_rarity}>{item.set_code} {item.set_rarity_code}</SetCode>
                      <SetPrice>${item.set_price} USD</SetPrice>
                    </SetCodePriceWrapper>
                  </>
                ))}
              </SetWrapper>
            </SetsContainer>
            <AlternativeImagesWrapperAndTitleWrapper>
              <AlternativeImagesTitle>
                Ilustraciones alternativas
              </AlternativeImagesTitle>
              <AlternativeImagesWrapper>
                {cardInfo.card_images.slice(1).map((item, key) => (
                  <AlternativeImages key={key} src={item.image_url} />
                ))}
              </AlternativeImagesWrapper>
            </AlternativeImagesWrapperAndTitleWrapper>
          </DescritpionAndButtonWrapper>
        </>
      )}
      {cardInfo && (
        <BottomDrawer isOpen={isOpenDrawer}>
          <DrawerText> Selecciona el tipo de carta que {session && session.user.role === 'store' ? 'tienes' : 'quieres' } </DrawerText>
          <SelectContainer>
            <Select
              setValue={setSelectedRarity}
              placeholder="Rareza"
              onChange={(item, value) => {
                setSelectedRarity(value);
              }}
              value={selectedRarity}
              options={cardInfo.card_sets ? cardInfo.card_sets.map((item) => {
                return {
                  name: `${item.set_code} ${item.set_rarity}`,
                  value: `${item.set_code} ${item.set_rarity}`,
                };
              }): []}
            />
          </SelectContainer>
          <DrawerText> ¿Sabes cuál es su imagen correcta? </DrawerText>
          <DrawerImagesContainer>
            {cardImages &&
              cardImages.map((item) => (
                <DrawerImage
                  isActive={item.isActive}
                  onClick={(e) => {
                    const src = e.currentTarget.src;
                    const newArr = cardImages.map((item) => {
                      if (src === item.image) {
                        item.isActive = true;
                      } else {
                        item.isActive = false;
                      }
                      return item;
                    });
                    setSelectedImage(src);
                    setCardImages(newArr);
                  }}
                  src={item.image}
                  alt={`alt ${item.image}`}
                />
              ))}
          </DrawerImagesContainer>
          {session && session.user.role === "store" && (
            <InputContainer>
              <InputText
                placeholder="Precio"
                onChange={(item, value) => {
                  setCardPrice(value);
                }}
                value={cardPrice}
              />
            </InputContainer>
          )}
          <ButtonDrawerContainer>
            <LoginButton
              onClick={async () => {
                let passed = false;
                let image = selectedImage;
                if (!image) {
                  image = cardImages[0].image;
                }
                if (selectedRarity && session && session.user.role === "client") {
                  await dispatch(
                    addToMyWantedCards({
                      name: session.user.name,
                      email: session.user.email,
                      card: {
                        name: cardInfo.name,
                        image: image,
                        rarityCode: selectedRarity,
                        isFound: false,
                      },
                      userId: session.user.id,
                    })
                  );
                  passed = true;
                  }
                  if (selectedRarity && cardPrice && session.user.role === "store") {
                    await dispatch(
                      addToMyUniqueCards({
                        userId: session.user.id,
                        email: session.user.email,
                        card: {
                          name: cardInfo.name,
                          rarityCode: selectedRarity,
                          image,
                          price: cardPrice,
                        },
                      })
                    );
                    passed = true;
                  }
                  if (passed) {
                  const newArr = cardInfo.card_images.map((item) => {
                    return {
                      image: item.image_url,
                      isActive: false,
                    };
                  });
                  setCardImages(newArr);
                  setSelectedImage(null);
                  setSelectedRarity("");
                  setCardPrice("");
                  setIsOpenDrawer(!isOpenDrawer);
                } else {
                  if (session.user.role === 'store') {
                    toast("Debes seleccionar una rareza y un precio");
                  } else {
                    toast("Debes seleccionar una rareza");
                  }
                }
              }}
            >
              {session && session.user.role === "client" ? "!La quiero!" : "¡La tengo!"}
            </LoginButton>
          </ButtonDrawerContainer>
        </BottomDrawer>
      )}
    </CardInfoWrapper>
  );
};

export default CardInformation;
