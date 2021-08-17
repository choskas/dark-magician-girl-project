import { useState } from "react";
import { BigTitle, NoDecksMessage } from "../../styles/profile/myDecks";
import { CardsWrapper } from "../../styles/profile/searchedCardsStyles";
import {
  StoreMainInfoCardImage,
  StoreMainInfoModalCardName,
  StoreMainInfoModalCardRarity,
  StoreMainInfoModalContainer,
  StoreMainInfoUniqueCardsContainer,
  StoreMainInfoUniqueCardsContainerModal,
} from "../../styles/storeProfile/storeProfileInfo";
import Modal from "../common/Modal";

const MyBasesSection = ({ decks }) => {
  const [deckBaseInfo, setDeckBaseInfo] = useState(null);
  const [isVisibleModalBases, setIsVisibleModalBases] = useState(false);

  return (
    <>
      <BigTitle>Mis bases</BigTitle>
      {decks.length >= 1 ? (
        <CardsWrapper>
          {decks ? (
            decks.map((item) => (
              <StoreMainInfoCardImage
                onClick={() => {
                  setDeckBaseInfo(item);
                  setIsVisibleModalBases(true);
                }}
                src={item.mainCard}
                alt={`alt ${item.mainCard}`}
              />
            ))
          ) : (
            <NoDecksMessage>No hay bases disponibles.</NoDecksMessage>
          )}
          {deckBaseInfo && (
            <Modal
              isVisible={isVisibleModalBases}
              onClose={() => setIsVisibleModalBases(false)}
            >
              <StoreMainInfoModalContainer>
                <StoreMainInfoUniqueCardsContainerModal>
                  {deckBaseInfo.deck.map((item) => (
                    <StoreMainInfoCardImage
                      src={item.cardImage}
                      alt={`alt ${item.cardImage}`}
                    />
                  ))}
                </StoreMainInfoUniqueCardsContainerModal>
                <StoreMainInfoModalCardName>
                  Base: {deckBaseInfo.deckName}
                </StoreMainInfoModalCardName>
                <StoreMainInfoModalCardRarity>
                  Precio: ${deckBaseInfo.deckPrice}
                </StoreMainInfoModalCardRarity>
              </StoreMainInfoModalContainer>
            </Modal>
          )}
        </CardsWrapper>
      ) : (
        <NoDecksMessage>No tienes bases.</NoDecksMessage>
      )}
    </>
  );
};

export default MyBasesSection;
