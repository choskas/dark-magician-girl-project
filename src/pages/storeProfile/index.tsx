import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FullScreenLoader from "../../components/common/FullScreenLoader";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/index/NavBar";
import MyBasesSection from "../../components/storeProfile/MyBasesSection";
import MyCardsSection from "../../components/storeProfile/MyCardsSection";
import MyDataSectionStore from "../../components/storeProfile/MyDataSectionStore";
import { getAllUniqueCardsById } from "../../redux/modules/storeCards";
import { StoreProfileWrapper } from "../../styles/storeProfile";

const StoreProfileIndex = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [session, loading] = useSession();
  const storeUniqueCards = useSelector(
    (state: any) => state.storeCards.uniqueCards
  );
  const storeDeckBases = useSelector(
    (state: any) => state.storeCards.deckBases
  );
  const getCards = () => {
    if (session) {
      // @ts-ignore
      dispatch(getAllUniqueCardsById({ userId: session.user.id }));
    }
  };
  useEffect(() => {
    getCards();
    if (!loading && !session) {
      router.push('/')
    }
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
            <MyBasesSection session={session} dispatch={dispatch} decks={storeDeckBases}/>
          <Footer />
        </>
      ) : (
        <FullScreenLoader />
      )}
    </>
  );
};

export default StoreProfileIndex;
