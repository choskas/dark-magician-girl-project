import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputText from "../components/common/InputText";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import AllCardsContainer from "../components/wantedCards/AllCardsContainer";
import { getAllWantedCards, hasFoundCard } from "../redux/modules/wantedCards";
import { AllWantedCardsWrapper, SearchWrapper, WantedCardsDescription } from "../styles/wantedCards";

const WantedCards = () => {
  const dispatch = useDispatch();
  const allCards = useSelector((state: any) => state.wantedCards.allWantedCards);
  const foundCard = async (data: {userId: string, rarityCode: string}) => await dispatch(hasFoundCard(data));
  useEffect(() => {
    dispatch(getAllWantedCards());
  }, []);
  return (
    <>
      <NavBar />
      <WantedCardsDescription>Aquí encontraras todo lo que los usuarios estan buscando, da click en una carta para obtener mas información</WantedCardsDescription>
      <SearchWrapper>
        </SearchWrapper>
        {allCards && 
        <AllWantedCardsWrapper>
            <AllCardsContainer foundCard={foundCard} allCards={allCards} />
        </AllWantedCardsWrapper>
        }
      <Footer />
    </>
  );
};

export default WantedCards;
