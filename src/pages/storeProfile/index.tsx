import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FullScreenLoader from "../../components/common/FullScreenLoader";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/index/NavBar";
import MyCardsSection from "../../components/storeProfile/MyCardsSection";
import MyDataSectionStore from "../../components/storeProfile/MyDataSectionStore";
import { getAllUniqueCardsById } from "../../redux/modules/storeCards";

const StoreProfileIndex = () => {
  const dispatch = useDispatch();
  const [session, loading] = useSession();
  const storeUniqueCards = useSelector(
    (state: any) => state.storeCards.uniqueCards
  );
  const storeDeckBases = useSelector(
    (state: any) => state.storeCards.deckBases
  );
  const getCards = () => {
    if (!loading) {
      // @ts-ignore
      dispatch(getAllUniqueCardsById({ userId: session.user.id }));
    }
  }
  useEffect(() => {
     getCards();
  }, [loading]);
  return (
    <>
      {session ? (
        <>
          <NavBar />
          <MyDataSectionStore
            cards={storeUniqueCards}
            decks={storeDeckBases}
            session={session}
          />
          <MyCardsSection cards={storeUniqueCards} />
          <Footer />
        </>
      ) : (
        <FullScreenLoader />
      )}
    </>
  );
};

export default StoreProfileIndex;
