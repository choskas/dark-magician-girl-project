import Link from "next/link";
import { ChangeEvent } from "react";
import { SearchInputWrapper } from "../../styles/deckPrice/deckPrice";
import { OnSaleCardImage, OnSaleCardSubtitle, OnSaleCardText, OnSaleCardWrapper, OnSaleGoToText, OnSaleTextWrapper, OnSaleWrapper } from "../../styles/onSale";
import InputText from "../common/InputText";

interface FirstTabOnSaleProps {
  allUniqueCards: Array<any>;
  searchCardValue: string | null;
  setSearchCardValue: Function;
  searchCard: Function;
}

const FirstTabOnSale = ({
  allUniqueCards,
  searchCardValue,
  setSearchCardValue,
  searchCard
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
        {allUniqueCards.map((item) => {
            return item.uniqueCards.map((card) => (
                <OnSaleCardWrapper key={`wrapper-${card.name}${Math.random() * (100 - 1)}`}>
                <OnSaleCardImage src={card.image} />
                <OnSaleTextWrapper>
                <OnSaleCardText>{card.name}</OnSaleCardText>
                <OnSaleCardText><OnSaleCardSubtitle>Rareza:</OnSaleCardSubtitle> {card.rarityCode}</OnSaleCardText>
                <OnSaleCardText><OnSaleCardSubtitle>Precio:</OnSaleCardSubtitle> {card.price}</OnSaleCardText>
                <Link href={`/storeProfile/${item.userId}`}>
                <OnSaleGoToText>Ir a tienda</OnSaleGoToText>
                </Link>
                </OnSaleTextWrapper>
            </OnSaleCardWrapper>
            ))
        })}
    </OnSaleWrapper>
  </>
);

export default FirstTabOnSale;
