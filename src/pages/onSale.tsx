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
  const [searchCardValue, setSearchCardValue] = useState("");
  const [searchDeckValue, setSearchDeckValue] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [showMoreCards, setShowMoreCards] = useState(10);
  const [showMoreDecks, setShowMoreDecks] = useState(10);
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
    const newUniqueDecks = getAllDecks.map((item) =>
      item.decksBases.map((decks) => {
        return { userId: item.userId, decksBases: decks };
      })
    );
    const mergedDecks = [].concat.apply([], newUniqueDecks);
    setAllDecks(mergedDecks);
    const getAllUniqueCards = allStoreDecksAndCards.map((item) => {
      return {
        userId: item.userId,
        uniqueCards: item.uniqueCards,
      };
    });
    const newUniqueCards = getAllUniqueCards.map((item) =>
      item.uniqueCards.map((card) => {
        return { userId: item.userId, card };
      })
    );
    const mergedCards = [].concat.apply([], newUniqueCards);
    setAllUniqueCards(mergedCards);
  };
  const searchCard = (value: string) => {
    const getAllUniqueCards = allStoreDecksAndCards.map((item) => {
      return {
        userId: item.userId,
        uniqueCards: item.uniqueCards,
      };
    });
    const newUniqueCards = getAllUniqueCards.map((item) =>
      item.uniqueCards.map((card) => {
        return { userId: item.userId, card };
      })
    );
    const mergedCards = [].concat.apply([], newUniqueCards);
    const uniqueCards = mergedCards;
    if (value.length > 3) {
      const uniqueCardItem = uniqueCards.filter((item) => {
        if (item.card.name.toLowerCase().includes(value.toLowerCase())) {
          return item;
        }
      });
      setAllUniqueCards(uniqueCardItem);
    }
    if (value.length < 3) {
      setAllUniqueCards(uniqueCards);
    }
  };

  const searchDeck = (value: string) => {
    const getAllDecks = allStoreDecksAndCards.map((item) => {
      return {
        userId: item.userId,
        decksBases: item.decksBases,
      };
    });
    const newUniqueDecks = getAllDecks.map((item) =>
      item.decksBases.map((decks) => {
        return { userId: item.userId, decksBases: decks };
      })
    );
    const mergedDecks = [].concat.apply([], newUniqueDecks);
    const deckCards = mergedDecks;
    if (value.length > 3) {
      const deckCardsItem = deckCards.filter((item) => {
        if (
          item.decksBases.deckName.toLowerCase().includes(value.toLowerCase())
        ) {
          return item;
        }
      });
      setAllDecks(deckCardsItem);
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
              showMoreCards={showMoreCards}
              setShowMoreCards={setShowMoreCards}
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
              showMoreDecks={showMoreDecks}
              setShowMoreDecks={setShowMoreDecks}
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
