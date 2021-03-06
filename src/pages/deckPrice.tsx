import NavBar from "../components/index/NavBar"
import Footer from "../components/Footer/Footer";
import SearchDeck from "../components/deckPrice/SearchDeck";
import { CardFrame } from "../styles/index/MainPage";

const DeckPrice = () => (
    <>
    <NavBar />
    <CardFrame />
    <SearchDeck />
    <Footer />
    </>
);

export default DeckPrice;