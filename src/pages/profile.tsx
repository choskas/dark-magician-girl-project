// @ts-nocheck
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import MyDataSection from "../components/profile/MyDataSection";
import MyDecksSection from "../components/profile/MyDecksSection";
import SearchedCardsSection from "../components/profile/SearchedCardsSection";
import { getAllUserDecks } from "../redux/modules/deck";
import { ProfileWrapper } from "../styles/profile/myDecks";

const Profile = () => {
  const [session, loading] = useSession();
  const dispatch = useDispatch();
  const decks = useSelector((state: any) => state.deck.allUserDecks);
  const myDeck = useSelector((state: any) => state.deck.myDeck);
  const cards = useSelector(
    (state: any) => state.wantedCards.allWantedCardsById
  );
  const router = useRouter();
  useEffect(() => {
    if (!loading && !session) {
      router.push('/')
      return;
    }
    if (session) {
      dispatch(getAllUserDecks(session.user.id));
      if (!session.user.role) {
        router.push("/auth");
      }
    } else if (session && myDeck !== []) {
      router.push("/deckPrice");
    }
  }, [session]);
  return (
    <>
      {session && (
          <>
            <NavBar />
            <ProfileWrapper>
              <MyDataSection session={session} cards={cards} decks={decks} />
              <SearchedCardsSection cards={cards} />
              <MyDecksSection session={session} decks={decks} />
            </ProfileWrapper>
            <Footer />
          </>
        )}
    </>
  );
};

export default Profile;
