import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LittleLoader from "../components/common/LittleLoader";
import TabPanel from "../components/common/TabPanel";
import SearchDeck from "../components/deckPrice/SearchDeck";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import FirstTabOnSale from "../components/onSale/FirstTabOnSale";
import SecondTabOnSale from "../components/onSale/SecondTabOnSale";
import { getAllStoreAndDecksCards } from "../redux/modules/storeCards";

const OnSale = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [allDecks, setAllDecks] = useState([]);
  const [allUniqueCards, setAllUniqueCards] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [searchCardValue, setSearchCardValue] = useState('');
  const [searchDeckValue, setSearchDeckValue] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [storeId, setStoreId] = useState(null);
  const allStoreDecksAndCards = useSelector(
    (state: any) => state.storeCards.allStoresDecksAndCards
  );
  const getDecksAndCardsOrganization = async () => {
    const getAllDecks = allStoreDecksAndCards.map((item) => {
      return {
        userId: item.userId,
        decksBases: item.decksBases,
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
    });
    if (value.length > 3) {
      const card = uniqueCards.map((item: any) => {
        const uniqueCardItem = item.uniqueCards.filter((card) => {
          if (card.name.toLowerCase().includes(value.toLowerCase())) {
            return item;
          }
        });
        return {
          uniqueCards: uniqueCardItem,
          userId: item.userId,
        };
      });
      setAllUniqueCards(card);
    }
    if (value.length < 3) {
      setAllUniqueCards(uniqueCards);
    }
  };

  const searchDeck = (value: string) => {
    const deckCards = allStoreDecksAndCards.map((item) => {
      return {
        userId: item.userId,
        decksBases: item.decksBases,
      };
    });
    if (value.length > 3) {
      const card = deckCards.map((item: any) => {
        const deckCardsItem = item.decksBases.filter((card) => {
          if (card.deckName.toLowerCase().includes(value.toLowerCase())) {
            return item;
          }
        });
        return {
          decksBases: deckCardsItem,
          userId: item.userId,
        };
      });
      setAllDecks(card);
    }
    if (value.length < 3) {
      setAllDecks(deckCards);
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
      {allStoreDecksAndCards ? (
        <TabPanel
          firstTabContent={
            <FirstTabOnSale
              dispatch={dispatch}
              searchCard={searchCard}
              searchCardValue={searchCardValue}
              setSearchCardValue={setSearchCardValue}
              allUniqueCards={allUniqueCards}
            />
          }
          secondTabContent={
            <SecondTabOnSale
              dispatch={dispatch}
              searchDeck={searchDeck}
              searchDeckValue={searchDeckValue}
              setSearchDeckValue={setSearchDeckValue}
              allDecks={allDecks}
              selectedDeck={selectedDeck}
              setSelectedDeck={setSelectedDeck}
              isVisibleModal={isVisibleModal}
              setIsVisibleModal={setIsVisibleModal}
              storeId={storeId}
              setStoreId={setStoreId}
              router={router}
            />
          }
          firstTabTitle="Cartas"
          secondTabTitle="Bases"
        />
      ) : (
        <LittleLoader />
      )}

      <Footer />
    </>
  );
};

export default OnSale;
