import Link from "next/link";
import { ChangeEvent } from "react";
import { selectedCardFunc } from "../../redux/modules/wantedCards";
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
import InputText from "../common/InputText";
import ShowMoreButton from "../common/ShowMoreButton";

interface FirstTabOnSaleProps {
  allUniqueCards: Array<any>;
  searchCardValue: string | null;
  setSearchCardValue: Function;
  searchCard: Function;
  dispatch: Function;
  showMoreCards: number;
  setShowMoreCards: Function;
}

const FirstTabOnSale = ({
  allUniqueCards,
  searchCardValue,
  setSearchCardValue,
  searchCard,
  dispatch,
  showMoreCards,
  setShowMoreCards,
}: FirstTabOnSaleProps) => (
  <>
    <SearchInputWrapper>
      <InputText
        onKeyPress={() => {}}
        onClickListValue={() => {}}
        placeholder="Búsqueda individual"
        value={searchCardValue}
        icon="/assets/Search.png"
        onChange={(_e: ChangeEvent<HTMLInputElement>, value: string) => {
          setSearchCardValue(value);
          searchCard(value);
        }}
      />
    </SearchInputWrapper>
    <OnSaleWrapper>
      {allUniqueCards.slice(0, showMoreCards).map((item, key) => (
        <OnSaleCardWrapper key={`wrapper-${item.card.name}${key}`}>
          <OnSaleCardImage src={item.card.image} />
          <OnSaleTextWrapper>
            <OnSaleCardText>{item.card.name}</OnSaleCardText>
            <OnSaleCardText>
              <OnSaleCardSubtitle>Rareza:</OnSaleCardSubtitle>{" "}
              {item.card.rarityCode}
            </OnSaleCardText>
            <OnSaleCardText>
              <OnSaleCardSubtitle>Precio:</OnSaleCardSubtitle> {item.card.price}
            </OnSaleCardText>
            <Link href={`/storeProfile/${item.userId}`}>
              <OnSaleGoToText
                onClick={() => dispatch(selectedCardFunc(item.card))}
              >
                Ir a tienda
              </OnSaleGoToText>
            </Link>
          </OnSaleTextWrapper>
        </OnSaleCardWrapper>
      ))}
      {showMoreCards < allUniqueCards.length && (
        <ShowMoreButton onClick={() => setShowMoreCards(showMoreCards + 10)} />
      )}
    </OnSaleWrapper>
  </>
);

export default FirstTabOnSale;
