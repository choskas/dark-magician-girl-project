import { useEffect, useState } from "react";
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
import LoginButton from "../common/LoginButton";
import Select from "../common/Select";

interface CardInformationProps {
  cardInfo: any;
}

const CardInformation = ({ cardInfo }: CardInformationProps) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [selectedRarity, setSelectedRarity] = useState("");
  const [cardImages, setCardImages] = useState([]);
  useEffect(() => {
    if (cardInfo) {
      const newArr = cardInfo.card_images.map((item) => {
        return {
          image: item.image_url_small,
          isActive: false,
        };
      });
      console.log(newArr, "ola");
      setCardImages(newArr);
    }
  }, [cardInfo]);
  console.log(cardInfo);
  return (
    <CardInfoWrapper>
      <CardImageAndButtonWrapper>
        <CardImageWrapper>
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
            <LoginButton onClick={() => setIsOpenDrawer(!isOpenDrawer)}>
              ¡La quiero!
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
              <SetsTitle>Sets</SetsTitle>
              <SetWrapper>
                {cardInfo.card_sets.map((item, key) => (
                  <>
                    <SetName key={key}>{item.set_name}</SetName>
                    <SetCodePriceWrapper>
                      <SetCode>{item.set_code}</SetCode>
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
          <DrawerText> Selecciona el tipo de carta que quieres </DrawerText>
          <SelectContainer>
            <Select
              placeholder="Rareza"
              onChange={(item, value) => {
                setSelectedRarity(value);
              }}
              value={selectedRarity}
              options={cardInfo.card_sets.map((item) => {
                return {
                  name: `${item.set_code} ${item.set_rarity}`,
                  value: `${item.set_code} ${item.set_rarity}`,
                };
              })}
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
                    console.log(newArr, "olo");
                    setCardImages(newArr);
                  }}
                  src={item.image}
                  alt={`alt ${item.image}`}
                />
              ))}
          </DrawerImagesContainer>
          <ButtonDrawerContainer>
            <LoginButton onClick={() => {
              setIsOpenDrawer(!isOpenDrawer)     
              }}>
              ¡La quiero!
            </LoginButton>
          </ButtonDrawerContainer>
        </BottomDrawer>
      )}
    </CardInfoWrapper>
  );
};

export default CardInformation;
