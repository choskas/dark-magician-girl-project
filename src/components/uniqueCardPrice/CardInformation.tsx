import {
  AlternativeImages,
  AlternativeImagesTitle,
  AlternativeImagesWrapper,
  CardArchetype,
  CardAtk,
  CardAtkDefWrapper,
  CardDef,
  CardDescription,
  CardDescriptionWrapper,
  CardIcon,
  CardImage,
  CardImageWrapper,
  CardInfoWrapper,
  CardName,
  SetCode,
  SetCodePriceWrapper,
  SetName,
  SetPrice,
  SetWrapper,
} from "../../styles/uniqueCardPrice/CardInformation";

interface CardInformationProps {
  cardInfo: any;
}

const CardInformation = ({ cardInfo }: CardInformationProps) => {
  return (
    <CardInfoWrapper>
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
        <>
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
          <AlternativeImagesTitle>
            Ilustraciones alternativas
          </AlternativeImagesTitle>
          <AlternativeImagesWrapper>
            {cardInfo.card_images.slice(1).map((item, key) => (
              <AlternativeImages key={key} src={item.image_url} />
            ))}
          </AlternativeImagesWrapper>
          <AlternativeImagesTitle>Sets</AlternativeImagesTitle>
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
        </>
      )}
    </CardInfoWrapper>
  );
};

export default CardInformation;
