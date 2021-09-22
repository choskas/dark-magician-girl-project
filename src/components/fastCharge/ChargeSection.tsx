import axios from "axios";
import { session, useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postCardsFastCharge } from "../../redux/modules/storeCards";
import { SearchDeckWrapper } from "../../styles/deckPrice/deckPrice";
import {
  AddCardWrapper,
  QuantityRarityWrapper,
  SmallInputWrapper,
  SearchInputWrapper,
  AddCardTitleWrapper,
  AddCardTitle,
  AddCardSeparator,
  AddCardPinkSeparator,
  AddCardButton,
  AddCardButtonWrapper,
  CartCollapseContent,
  AddToStoreButtonContainer,
} from "../../styles/fastCharge";
import CartBottomDrawer from "../common/CartBottomDrawer";
import InputText from "../common/InputText";
import LoginButton from "../common/LoginButton";
import Select from "../common/Select";
import CartCard from "./CartCard";

const ChargeSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [allCardsName, setAllCardsName] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);
  const [cardsArray, setCardsArray] = useState([]);
  const [selectedRarity, setSelectedRarity] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [session, isLoading] = useSession();
  const dispatch = useDispatch();
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

  const cartItemsShow = () => {
    const newCardsArr = cardsArray.filter((item, index) => {
      const newItem = JSON.stringify(item);
      return (
        index ===
        cardsArray.findIndex((obj) => {
          return JSON.stringify(obj) === newItem;
        })
      );
    });
    return newCardsArr.map((item) => (
      <CartCard
        onClickDelete={() => {
            const deleteArray = cardsArray.filter((list) => list.rarityCode !== item.rarityCode)
            setCardsArray(deleteArray)
        }}
        cardName={item.name}
        cardImage={item.image}
        cardRarity={item.rarityCode.split(' ')[1]}
        cardQuantity={item.quantity}
      />
    ));
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <SearchDeckWrapper>
      <AddCardWrapper>
        <AddCardTitleWrapper>
          <AddCardTitle>Carta</AddCardTitle>
          <AddCardSeparator />
        </AddCardTitleWrapper>
        <SearchInputWrapper>
          <InputText
            placeholder="Búsqueda por nombre"
            onClickListValue={(value) => getCardInfo(value)}
            setValue={setSearchValue}
            autoCompleteValues={allCardsName}
            value={searchValue}
            onChange={(e, value) => {
              setSearchValue(value);
            }}
          />
        </SearchInputWrapper>
        <QuantityRarityWrapper>
          <SmallInputWrapper>
            <InputText
              type="number"
              value={selectedQuantity}
              placeholder="Cantidad"
              onChange={(e, value) => setSelectedQuantity(parseInt(value))}
            />
          </SmallInputWrapper>
          <SmallInputWrapper>
            <Select
              placeholder="Rareza"
              onChange={(item, value) => {
                setSelectedRarity(value);
              }}
              value={selectedRarity}
              options={
                cardInfo && cardInfo.card_sets
                  ? cardInfo.card_sets.map((item) => {
                      return {
                        name: `${item.set_code} ${item.set_rarity}`,
                        value: `${item.set_code} ${item.set_rarity}`,
                      };
                    })
                  : []
              }
            />
          </SmallInputWrapper>
        </QuantityRarityWrapper>
        <AddCardButtonWrapper>
          <LoginButton
            onClick={(e: any) => {
              const array = [...cardsArray];
              for (let i = 1; i <= selectedQuantity; i++) {
                array.push({
                  name: cardInfo.name,
                  rarityCode: selectedRarity,
                  image: cardInfo.card_images[0].image_url,
                  quantity: selectedQuantity,
                });
              }
              setCardsArray(array);
              setSearchValue('');
              setSelectedQuantity(1);
              setSelectedRarity('');
              setCardInfo(null);
            }}
          >
            Agregar
          </LoginButton>
        </AddCardButtonWrapper>
      </AddCardWrapper>
      <CartBottomDrawer drawerTitle={`Mi stock (${cardsArray.length})`}>
        <CartCollapseContent>
            {cartItemsShow()}
            {cardsArray.length >= 1 && (
          <AddToStoreButtonContainer>
          <LoginButton onClick={() => {
            const cards = cardsArray.map((item) => {
              return {
                name: item.name,
                rarityCode: item.rarityCode,
                image: item.image
              }
            });
            // @ts-ignore 
            const data = {userId: session.user.id, cards} 
            dispatch(postCardsFastCharge(data));
            setCardsArray([]);
          }}>Agregar a mi tienda</LoginButton>
          </AddToStoreButtonContainer>
            )}
        </CartCollapseContent>
      </CartBottomDrawer>
    </SearchDeckWrapper>
  );
};

export default ChargeSection;
