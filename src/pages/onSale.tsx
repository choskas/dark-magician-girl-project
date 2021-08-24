import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TabPanel from "../components/common/TabPanel";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import FirstTabOnSale from "../components/onSale/FirstTabOnSale";
import SecondTabOnSale from "../components/onSale/SecondTabOnSale";
import { getAllStoreAndDecksCards } from "../redux/modules/storeCards";

const OnSale = () => {
  const dispatch = useDispatch();
  const [allDecks, setAllDecks] = useState([]);
  const [allUniqueCards, setAllUniqueCards] = useState([]);
  const [searchCardValue, setSearchCardValue] = useState(null);
  const allStoreDecksAndCards = useSelector(
    (state: any) => state.storeCards.allStoresDecksAndCards
  );
  const getDecksAndCardsOrganization = async () => {
    const getAllDecks = allStoreDecksAndCards.map((item) => {
      return {
        userId: item.userId,
        deckBases: item.decksBases,
      };
    });
    setAllDecks(getAllDecks);
    const getAllUniqueCards = allStoreDecksAndCards.map((item) => {
      return {
        userId: item.userId,
        uniqueCards: item.uniqueCards,
      };
    });
    setAllUniqueCards(getAllUniqueCards);
  };
  const searchCard = (value: string) => {
    const uniqueCards = allStoreDecksAndCards.map((item) => {
        return {
          userId: item.userId,
          uniqueCards: item.uniqueCards,
        };
      })
    if (value.length > 3) {
      const card = uniqueCards.map((item: any) => {
        const uniqueCardItem = item.uniqueCards.filter((card) => {
            if (card.name.toLowerCase().includes(value.toLowerCase())) {
                return item
            }
        } )
        return {
            uniqueCards: uniqueCardItem,
            userId: item.userId
        };
      });
    setAllUniqueCards(card);
    }
    if (value.length < 3) {
      setAllUniqueCards(uniqueCards);
    }
  };
  useEffect(() => {
    dispatch(getAllStoreAndDecksCards());
  }, []);
  useEffect(() => {
    if (allStoreDecksAndCards) {
      getDecksAndCardsOrganization();
    }
  }, [allStoreDecksAndCards]);
  return (
    <>
      <NavBar />
      <TabPanel
        firstTabContent={
          <FirstTabOnSale
            searchCard={searchCard}
            searchCardValue={searchCardValue}
            setSearchCardValue={setSearchCardValue}
            allUniqueCards={allUniqueCards}
          />
        }
        secondTabContent={
          <SecondTabOnSale
            searchCardValue={searchCardValue}
            setSearchCardValue={setSearchCardValue}
            allDecks={allDecks}
          />
        }
        firstTabTitle="Cartas"
        secondTabTitle="Bases"
      />
      <Footer />
    </>
  );
};

export default OnSale;
