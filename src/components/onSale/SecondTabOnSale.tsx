import Link from "next/link";
import { ChangeEvent } from "react";
import { selectedBaseFunc } from "../../redux/modules/wantedCards";
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
import {
  StoreMainInfoCardImage,
  StoreMainInfoImageAndCodeContainer,
  StoreMainInfoModalCardRarity,
  StoreMainInfoModalContainer,
  StoreMainInfoRarityCode,
  StoreMainInfoUniqueCardsContainerModal,
} from "../../styles/storeProfile/storeProfileInfo";
import InputText from "../common/InputText";
import LoginButton from "../common/LoginButton";
import Modal from "../common/Modal";
import ShowMoreButton from "../common/ShowMoreButton";

interface SecondTabOnSaleProps {
  allDecks: Array<any>;
  searchDeckValue: string | null;
  setSearchDeckValue: Function;
  selectedDeck: any;
  setSelectedDeck: Function;
  isVisibleModal: boolean;
  setIsVisibleModal: Function;
  storeId: null | string;
  setStoreId: Function;
  searchDeck: Function;
  dispatch: Function;
  showMoreDecks: number;
  setShowMoreDecks: Function;
  router: {
    push: Function;
  };
}

const SecondTabOnSale = ({
  allDecks,
  searchDeckValue,
  setSearchDeckValue,
  selectedDeck,
  setSelectedDeck,
  isVisibleModal,
  setIsVisibleModal,
  searchDeck,
  router,
  storeId,
  setStoreId,
  showMoreDecks,
  setShowMoreDecks,
  dispatch,
}: SecondTabOnSaleProps) => (
  <>
    <SearchInputWrapper>
      <InputText
        onKeyPress={() => {}}
        onClickListValue={() => {}}
        placeholder="Búsqueda de bases"
        value={searchDeckValue}
        icon="/assets/Search.png"
        onChange={(_e: ChangeEvent<HTMLInputElement>, value: string) => {
          setSearchDeckValue(value);
          searchDeck(value);
        }}
      />
    </SearchInputWrapper>
    <OnSaleWrapper>
      {allDecks.slice(0, showMoreDecks).map((item, key) => (
        <OnSaleCardWrapper key={`${item.decksBases.deckName}-${key}`}>
          <OnSaleCardImage src={item.decksBases.mainCard} />
          <OnSaleTextWrapper>
            <OnSaleCardText>
              <OnSaleCardSubtitle>Base: </OnSaleCardSubtitle>
              {item.decksBases.deckName}
            </OnSaleCardText>
            <OnSaleGoToText
              onClick={() => {
                setSelectedDeck(item.decksBases);
                setIsVisibleModal(true);
                setStoreId(item.userId);
              }}
            >
              Ver cartas incluidas
            </OnSaleGoToText>
          </OnSaleTextWrapper>
        </OnSaleCardWrapper>
      ))}
      {showMoreDecks < allDecks.length && (
        <ShowMoreButton onClick={() => setShowMoreDecks(showMoreDecks + 10)} />
      )}
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
              <StoreMainInfoImageAndCodeContainer>
                <StoreMainInfoCardImage
                  src={item.cardImage}
                  alt={`alt ${item.cardImage}`}
                />
                {item.setCode && (
                  <StoreMainInfoRarityCode>
                    {item.setCode}
                  </StoreMainInfoRarityCode>
                )}
              </StoreMainInfoImageAndCodeContainer>
            ))}
          </StoreMainInfoUniqueCardsContainerModal>
          <StoreMainInfoModalCardRarity>
            Precio: ${selectedDeck.deckPrice}
          </StoreMainInfoModalCardRarity>
          <LoginButton
            onClick={() => {
              router.push(`/storeProfile/${storeId}`);
              dispatch(selectedBaseFunc(selectedDeck.deckName));
            }}
          >
            Ir a tienda
          </LoginButton>
        </StoreMainInfoModalContainer>
      )}
    </Modal>
  </>
);

export default SecondTabOnSale;
