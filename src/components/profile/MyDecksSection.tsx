import { useState } from "react";
import {
  BigTitle,
  Card,
  DeckPrice,
  DeckWrapper,
  ModalImage,
  ModalImageWrapper,
  ModalWrapper,
  NoDecksMessage,
  Title,
  TitleWrapper,
} from "../../styles/profile/myDecks";
import {
  CardArchetype,
  CardAtk,
  CardAtkDefWrapper,
  CardDef,
  CardDescription,
  CardDescriptionWrapper,
  CardIcon,
  CardName,
} from "../../styles/uniqueCardPrice/CardInformation";
import Modal from "../common/Modal";

interface MyDeckSectionProps {
  session: object;
  decks: Array<any>;
}

const MyDecksSection = ({ session, decks }: MyDeckSectionProps) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
  const renderDecks = () => {
    if (decks.length > 0) {
      return decks.map((item) => (
        <>
          <TitleWrapper>
            <Title>{item.deckName}</Title>
            <DeckPrice>${item.deckPrice}</DeckPrice>
          </TitleWrapper>
          <DeckWrapper>
            {item.deck.map((card) => (
              <Card
                onClick={() => {
                  setIsVisibleModal(true);
                  setCardInfo(card);
                }}
                src={card.cardImageSmall}
              />
            ))}
            <Modal
              isVisible={isVisibleModal}
              onClose={() => setIsVisibleModal(false)}
            >
              {cardInfo && (
                <ModalWrapper>
                  <ModalImageWrapper>
                    <ModalImage src={cardInfo.cardImage} />
                  </ModalImageWrapper>
                  <CardDescriptionWrapper color="#fff">
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
                    <CardArchetype>
                      Arquetipo: {cardInfo.archetype}
                    </CardArchetype>
                    <CardDescription>
                      Description: <br /> {cardInfo.desc}
                    </CardDescription>
                  </CardDescriptionWrapper>
                </ModalWrapper>
              )}
            </Modal>
          </DeckWrapper>
        </>
      ));
    } else {
      return <NoDecksMessage>No tienes decks aun.</NoDecksMessage>;
    }
  };
  return (
    <>
      <BigTitle>Mis Decks</BigTitle>
      {renderDecks()}
    </>
  );
};

export default MyDecksSection;
