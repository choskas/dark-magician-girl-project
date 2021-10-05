// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/client";
import FullScreenLoader from "../components/common/FullScreenLoader";
import InputText from "../components/common/InputText";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import CardInformation from "../components/uniqueCardPrice/CardInformation";
import {
  UniqueCardPriceWrapper,
  InputTextWrapper,
  Text,
  TextBold,
} from "../styles/uniqueCardPrice/uniqueCardPrice";

const UniqueCardPrice = () => {
  const [session, loading] = useSession();
  const [searchValue, setSearchValue] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [allCardsName, setAllCardsName] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const getAllCards = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/allCards`
      );
      setAllCards(response.data.cards);
      const onlyNames = response.data.cards.map((item) => {
        return item.name;
      });
      setAllCardsName(onlyNames);
    } catch (error) {
      console.log(error);
    }
  };
  const getCardInfo = (value = searchValue) => {
    const card = allCards.find((item) => item.name === value);
    setCardInfo(card);
  };
  const deleteCardInfo = () => {
    setCardInfo(null);
    setSearchValue("");
  }
  useEffect(() => {
    getAllCards();
  }, []);
  return (
    <>
      {allCards.length <= 10000 ? (
        <FullScreenLoader />
      ) : (
        <>
          <NavBar />
          <UniqueCardPriceWrapper>
            <InputTextWrapper>
              <InputText
                onKeyPress={(e) => e.charCode == 13 && getCardInfo()}
                onClickIcon={() => searchValue ? deleteCardInfo() : getCardInfo()}
                onClickListValue={(value) => getCardInfo(value)}
                setValue={setSearchValue}
                icon={searchValue ? "/icons/xMark.png" : "/assets/Search.png"}
                autoCompleteValues={allCardsName}
                value={searchValue}
                placeholder="Búsqueda"
                onChange={(e, value) => {
                  setSearchValue(value);
                  setIsOpenDrawer(false);
                }}
              />
            </InputTextWrapper>
            <CardInformation isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer} session={session} cardInfo={cardInfo} />
            {!cardInfo && session && (
              <>
                {session.user.role === "client" ? (
                  <>
                    <Text>
                      ¿Buscas una carta super rara? o simplemente quieres saber
                      su precio en sus diferentes formatos.
                      <TextBold>Pues estas en el lugar indicado.</TextBold>
                      Busca la carta por nombre, da click en "!La quiero!",
                      selecciona la rareza deseada, e informaremos a diferentes
                      tiendas al rededor del Mundo, las cuales te informaran su
                      mejor precio.
                    </Text>
                  </>
                ) : (
                  <>
                    <Text>
                      ¿Tienes una carta super rara? o simplemente quieres saber
                      su precio.
                      <TextBold>Pues estas en el lugar indicado.</TextBold>
                      Busca la carta por nombre, da click en "!La tengo!",
                      selecciona la rareza que tienes, y la agregaremos a tu
                      perfil en la seccion "Rarezas".
                    </Text>
                  </>
                )}
              </>
            )}
          </UniqueCardPriceWrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default UniqueCardPrice;
