import Link from "next/link";
import { ChangeEvent } from "react";
import { ModalContainer } from "../../styles/common/Modal";
import { SearchInputWrapper } from "../../styles/deckPrice/deckPrice";
import {
  OnSaleCardImage,
  OnSaleCardSubtitle,
  OnSaleCardText,
  OnSaleCardWrapper,
  OnSaleGoToText,
  OnSaleTextWrapper,
  OnSaleWrapper,
} from "../../styles/onSale";
import { StoreMainInfoCardImage, StoreMainInfoModalCardRarity, StoreMainInfoModalContainer, StoreMainInfoUniqueCardsContainerModal } from "../../styles/storeProfile/storeProfileInfo";
import InputText from "../common/InputText";
import LoginButton from "../common/LoginButton";
import Modal from "../common/Modal";

interface SecondTabOnSaleProps {
  allDecks: Array<any>;
  searchCardValue: string | null;
  setSearchCardValue: Function;
  selectedDeck: any;
  setSelectedDeck: Function;
  isVisibleModal: boolean;
  setIsVisibleModal: Function;
  storeId: null | string;
  setStoreId: Function;
  router: {
      push: Function
  };
}

const SecondTabOnSale = ({
  allDecks,
  searchCardValue,
  setSearchCardValue,
  selectedDeck,
  setSelectedDeck,
  isVisibleModal,
  setIsVisibleModal,
  router,
  storeId,
  setStoreId,
}: SecondTabOnSaleProps) => (
  <>
    <SearchInputWrapper>
      <InputText
        onKeyPress={() => {}}
        onClickListValue={() => {}}
        placeholder="Búsqueda de bases"
        value={searchCardValue}
        icon="/assets/Search.png"
        onChange={(_e: ChangeEvent<HTMLInputElement>, value: string) => {
          setSearchCardValue(value);
        }}
      />
          </SearchInputWrapper>
          {console.log(selectedDeck)}
      <OnSaleWrapper>
        {allDecks.map((item) => {
          return item.deckBases.map((deck) => (
            <OnSaleCardWrapper>
              <OnSaleCardImage src={deck.mainCard} />
              <OnSaleTextWrapper>
                <OnSaleCardText>
                  <OnSaleCardSubtitle>Base: </OnSaleCardSubtitle>
                  {deck.deckName}
                </OnSaleCardText>
                <OnSaleGoToText
                  onClick={() => {
                    setSelectedDeck(deck);
                    setIsVisibleModal(true);
                    setStoreId(item.userId)
                  }}
                >
                  Ver cartas incluidas
                </OnSaleGoToText>
              </OnSaleTextWrapper>
            </OnSaleCardWrapper>
          ));
        })}
              </OnSaleWrapper>
        <Modal
          onClose={() => {
            setIsVisibleModal(false);
            setSelectedDeck(null);
          }}
          isVisible={isVisibleModal}
        >
            {selectedDeck && (
                <StoreMainInfoModalContainer>
                <StoreMainInfoUniqueCardsContainerModal>
                  {selectedDeck.deck.map((item) => (
                    <StoreMainInfoCardImage
                      src={item.cardImage}
                      alt={`alt ${item.cardImage}`}
                    />
                  ))}
                </StoreMainInfoUniqueCardsContainerModal>
                <StoreMainInfoModalCardRarity>
                  Precio: ${selectedDeck.deckPrice}
                </StoreMainInfoModalCardRarity>
                <LoginButton
                  onClick={() => router.push(`/storeProfile/${storeId}`)
                    
                  }
                >
                  Ir a tienda
                </LoginButton>
              </StoreMainInfoModalContainer>
            )}
                    
            </Modal>
  </>
);

export default SecondTabOnSale;
