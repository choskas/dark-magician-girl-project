import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import MyDataSection from "../components/profile/MyDataSection";
import MyDecksSection from "../components/profile/MyDecksSection";
import { getAllUserDecks } from "../redux/modules/deck";

const Profile = () => {
  const [session, loading] = useSession();
  const dispatch = useDispatch()
  const decks = useSelector((state: any) => state.deck.allUserDecks)
  const myDeck = useSelector((state: any) => state.deck.myDeck);
  const router = useRouter();
  useEffect(() => {
    if (session){
    dispatch(getAllUserDecks(session.user.email))
    } else if (session && myDeck !== []) {
      alert(1)
      router.push('/deckPrice')
    }
  }, [session])
return (
    <>
    <NavBar />
      <MyDataSection />
      <MyDecksSection session={session} decks={decks} />
    <Footer />
    </>
)};

export default Profile;