import axios from "axios";
import { useEffect, useState } from "react";
import FullScreenLoader from "../components/common/FullScreenLoader";
import InputText from "../components/common/InputText";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import CardInformation from "../components/uniqueCardPrice/CardInformation";
import { UniqueCardPriceWrapper } from "../styles/uniqueCardPrice/uniqueCardPrice";

const UniqueCardPrice = () => {
  const [searchValue, setSearchValue] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [allCardsName, setAllCardsName] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);
  const getAllCards = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/allCards`
      );
      setAllCards(response.data.cards);
      const onlyNames = response.data.cards.map((item) => {
        return item.name;
      });
      setAllCardsName(onlyNames);
    } catch (error) {
      console.log(error);
    }
  };
  const getCardInfo = (value = searchValue) => {
    const card = allCards.find((item) => item.name === value);
    setCardInfo(card);
  };
  useEffect(() => {
    getAllCards();
  }, []);
  return (
    <>
      {allCards.length <= 10000 ? (
        <FullScreenLoader />
      ) : (
        <>
          <NavBar />
          <UniqueCardPriceWrapper>
            <InputText
              onKeyPress={(e) => e.charCode == 13 && getCardInfo()}
              onClickIcon={() => getCardInfo()}
              onClickListValue={(value) => getCardInfo(value)}
              setValue={setSearchValue}
              icon="/assets/Search.png"
              autoCompleteValues={allCardsName}
              value={searchValue}
              placeholder="Busquéda"
              onChange={(e, value) => {
                setSearchValue(value);
              }}
            />
            <CardInformation cardInfo={cardInfo} />
          </UniqueCardPriceWrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default UniqueCardPrice;
