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
  const router = useRouter();
  useEffect(() => {
    if (session) {
      // @ts-ignore
      dispatch(getAllUserDecks(session.user.id));
      // @ts-ignore
      if (!session.user.role){
        router.push('/auth')
      }
    } else if (session && myDeck !== []) {
      router.push("/deckPrice");
    }
  }, [session]);
  return (
    <>
      <NavBar />
      <ProfileWrapper>
        <MyDataSection />
        <SearchedCardsSection />
        <MyDecksSection session={session} decks={decks} />
      </ProfileWrapper>
      <Footer />
    </>
  );
};

export default Profile;
