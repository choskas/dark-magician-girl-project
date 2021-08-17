import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputText from "../components/common/InputText";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import AllCardsContainer from "../components/wantedCards/AllCardsContainer";
import AllWantedBases from "../components/wantedCards/AllWantedBases";
import { foundBase, getAllWantedBases } from "../redux/modules/wantedBases";
import { getAllWantedCards, hasFoundCard } from "../redux/modules/wantedCards";
import {
  AllWantedCardsWrapper,
  SearchWrapper,
  WantedCardsDescription,
  WantedCardsSubtitle,
  WantedCardsTitle,
} from "../styles/wantedCards";

const WantedCards = () => {
  const dispatch = useDispatch();
  const [session, isLoading] = useSession();
  const allCards = useSelector(
    (state: any) => state.wantedCards.allWantedCards
  );
  const allBases = useSelector(
    (state: any) => state.wantedBases.allWantedBases
  );
  const foundCard = async (data: {
    userId: string;
    rarityCode: string;
    foundBy: string;
    foundByName: string;
  }) => await dispatch(hasFoundCard(data));
  const foundBaseFunc = async (data) => {
    await dispatch(foundBase(data));
  };
  useEffect(() => {
    dispatch(getAllWantedCards());
    dispatch(getAllWantedBases());
  }, []);
  return (
    <>
      <NavBar />
      <WantedCardsTitle>¿Qué buscan los usuarios?</WantedCardsTitle>
      {session && (
        <WantedCardsDescription>
          Bienvenido {session.user.name}.
        </WantedCardsDescription>
      )}
      <WantedCardsDescription>
        Aquí encontraras todo lo que los usuarios estan buscando, da click en
        una carta para obtener mas información.
      </WantedCardsDescription>
      <WantedCardsDescription>
        Si tienes la carta da click en "¡La tengo!", ponle precio y le
        informaremos a nuestro usuario.
      </WantedCardsDescription>
      <SearchWrapper></SearchWrapper>
      <WantedCardsDescription>
        Actualmentos los usuarios estan buscando {allCards.length} cartas y{" "}
        {allBases.length} bases.
      </WantedCardsDescription>
      <WantedCardsSubtitle>Cartas</WantedCardsSubtitle>
      {allCards && (
        <AllWantedCardsWrapper>
          <AllCardsContainer
            session={session}
            foundCard={foundCard}
            allCards={allCards}
          />
        </AllWantedCardsWrapper>
      )}
      <WantedCardsSubtitle>Bases</WantedCardsSubtitle>
      {allBases && (
        <AllWantedCardsWrapper>
          <AllWantedBases
            foundBaseFunc={foundBaseFunc}
            session={session}
            allBases={allBases}
          />
        </AllWantedCardsWrapper>
      )}
      <Footer />
    </>
  );
};

export default WantedCards;
