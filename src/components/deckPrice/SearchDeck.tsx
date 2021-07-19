import axios from "axios";
import { useDrop } from "react-dnd";
import { useEffect, useState, ChangeEvent } from "react";
import {
  AllCardsWrapper,
  DeckWrapper,
  MyDeckWrapper,
  SearchAndMyDeckWrapper,
  SearchBothInputWrapper,
  SearchDeckWrapper,
  SearchInputWrapper,
} from "../../styles/deckPrice/deckPrice";
import { CardFrameVertical } from "../../styles/index/MainPage";
import Card from "./Card";
import InputText from "../common/InputText";
import FullScreenLoader from "../common/FullScreenLoader";

const ItemTypes = {
  CARD: "card",
};

const SearchDeck = () => {
  const [allCards, setAllCards] = useState([]);
  const [foundCards, setFoundCards] = useState([]);
  const [myDeck, setMyDeck] = useState([]);
  const [isClickedDelete, setIsClickedDelete] = useState(false);
  const getAllCards = async () => {
    try {
      const response = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
      );
      setAllCards(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchCard = (value: string) => {
    if (value.length > 3) {
      const card = allCards.filter((item: any) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      setFoundCards(card);
    }
    if (value.length < 3) {
      setFoundCards([]);
    }
  };

  const searchCardByCode = (value: string) => {
    if (value.length > 3) {
      let card: any;
      card = allCards.find((el) => {
        if (el.card_sets !== undefined) {
          return el.card_sets.find(
            (item) => item.set_code === value.toUpperCase()
          );
        }
      });

      if (card !== undefined) {
        const cardInfo = card.card_sets.find(
          (el: any) => el.set_code === value.toUpperCase()
        );
        setFoundCards([
          {
            id: card.id,
            name: card.name,
            level: card.level,
            race: card.race,
            archetype: card.archetype,
            attribute: card.attribute,
            atk: card.atk,
            def: card.def,
            type: card.type,
            card_images: card.card_images,
            set_code: cardInfo.set_code,
            set_name: cardInfo.set_name,
            set_price: cardInfo.set_price,
            set_rarity: cardInfo.set_rarity,
            set_rarity_code: cardInfo.set_rarity_code,
          },
        ]);
      }
    }
    if (value.length < 3) {
      setFoundCards([]);
    }
  };

  const [{ isActive }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item: any) => {
      setMyDeck((myDeck) => [...myDeck, item]);
    },
    collect: (monitor) => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  }));

  useEffect(() => {
    getAllCards();
  }, []);
  return (
    <SearchDeckWrapper>
      {allCards.length <= 10000 ? (
        <FullScreenLoader />
      ) : (
        <>
          <SearchBothInputWrapper>
            <SearchInputWrapper>
              <InputText
                placeholder="Búsqueda"
                onChange={(
                  _e: ChangeEvent<HTMLInputElement>,
                  value: string
                ) => {
                  searchCard(value);
                }}
              />
            </SearchInputWrapper>
            <SearchInputWrapper>
              <InputText
                placeholder="Búsqueda por código"
                onChange={(
                  _e: ChangeEvent<HTMLInputElement>,
                  value: string
                ) => {
                  searchCardByCode(value);
                }}
              />
            </SearchInputWrapper>
          </SearchBothInputWrapper>
          <SearchAndMyDeckWrapper>
            <AllCardsWrapper>
              {foundCards &&
                foundCards.map((item: any) => (
                  <Card
                    item={item}
                    onTouchCard={() => {
                        setMyDeck((myDeck) => [...myDeck, item])
                    }}
                    isEditable={false}
                    foundCards={foundCards}
                    name={item.name}
                    image={item.card_images[0].image_url_small}
                  />
                ))}
            </AllCardsWrapper>
            <CardFrameVertical />
            <MyDeckWrapper ref={drop}>
              My Deck
              <DeckWrapper>
                {myDeck &&
                  myDeck.map((item: any, index) => (
                    <Card
                      index={index}
                      onTouchCard={() => {}}
                      item={item}
                      isClickedDelete={isClickedDelete}
                      setIsClickedDelete={setIsClickedDelete}
                      isEditable={true}
                      foundCards={foundCards}
                      name={item.name}
                      image={item.image || item.card_images[0].image_url_small}
                      onClickDelete={(index) => {
                        const array = myDeck;
                        array.splice(index, 1);
                        setMyDeck(array);
                      }}
                    />
                  ))}
              </DeckWrapper>
            </MyDeckWrapper>
          </SearchAndMyDeckWrapper>
        </>
      )}
    </SearchDeckWrapper>
  );
};

export default SearchDeck;
