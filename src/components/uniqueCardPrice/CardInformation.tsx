import { useState } from "react";
import {
  AlternativeImages,
  AlternativeImagesTitle,
  AlternativeImagesWrapper,
  AlternativeImagesWrapperAndTitleWrapper,
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
  IWantItButtonWrapper,
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

interface CardInformationProps {
  cardInfo: any;
}

const CardInformation = ({ cardInfo }: CardInformationProps) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
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
      <LoginButton onClick={() => setIsOpenDrawer(!isOpenDrawer)}>¡La quiero!</LoginButton>
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
      <BottomDrawer isOpen={isOpenDrawer}> </BottomDrawer>
    </CardInfoWrapper>
  );
};

export default CardInformation;
