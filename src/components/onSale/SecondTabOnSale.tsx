import { ChangeEvent } from "react";
import { SearchInputWrapper } from "../../styles/deckPrice/deckPrice";
import InputText from "../common/InputText";

interface SecondTabOnSaleProps {
  allDecks: Array<any>;
  searchCardValue: string | null;
  setSearchCardValue: Function;
}

const SecondTabOnSale = ({
  allDecks,
  searchCardValue,
  setSearchCardValue,
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
  </>
);

export default SecondTabOnSale;
