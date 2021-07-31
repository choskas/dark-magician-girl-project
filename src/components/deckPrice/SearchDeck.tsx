import axios from "axios";
import { useDrop } from "react-dnd";
import { useEffect, useState, ChangeEvent } from "react";
import { useSession } from "next-auth/client";
import {
  AllCardsWrapper,
  ButtonsWrapper,
  DeckWrapper,
  MyDeckPriceWrapper,
  MyDeckWrapper,
  Price,
  SaveDeckInputs,
  SearchAndMyDeckWrapper,
  SearchBothInputWrapper,
  SearchDeckWrapper,
  SearchInputWrapper,
  SmallText,
  Subtitle,
  SwitchDiv,
  Title,
} from "../../styles/deckPrice/deckPrice";
import { ButtonContainer, StartButton } from "../../styles/index/MainPage";
import Card from "./Card";
import InputText from "../common/InputText";
import FullScreenLoader from "../common/FullScreenLoader";
import Switch from "../../components/common/Switch";
import { useRouter } from "next/router";
import {
  DesktopSeparator,
  DesktopVerticalSeparator,
  Separator,
} from "../../styles/common/Separtor";
import { useDispatch, useSelector } from "react-redux";
import { addToMyDeck, createDeck } from "../../redux/modules/deck";
import BottomDrawer from "../common/BottomDrawer";
import { toast } from "react-toastify";

const ItemTypes = {
  CARD: "card",
};

const SearchDeck = () => {
  const [allCards, setAllCards] = useState([]);
  const [allCardsName, setAllCardsName] = useState([]);
  const [foundCards, setFoundCards] = useState([]);
  const [myDeck, setMyDeck] = useState([]);
  const [isClickedDelete, setIsClickedDelete] = useState(false);
  const [searchByCode, setSearchByCode] = useState(false);
  const [totalDeckPrice, setTotalDeckPrice] = useState([]);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [searchCardValue, setSearchCardValue] = useState("");
  const [deckName, setDeckName] = useState("");
  const [deckType, setDeckType] = useState("");
  const [session, loading] = useSession();


  const router = useRouter();
  const dispatch = useDispatch();
  const myDeckRedux = useSelector((state: any) => state.deck.myDeck);

  const getAllCards = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/allCards`
      );
      setAllCards(response.data.cards);
      const onlyNames = response.data.cards.map((item) => {
        return item.name;
      })
      setAllCardsName(onlyNames);
    } catch (error) {
      console.log(error);
      router.push("/");
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

  const myDeckPrice = () => {
    const priceArray = [];
    myDeck.map((item: any) => {
      if (item.set_price) {
        priceArray.push(parseFloat(item.set_price));
      } else {
        priceArray.push(parseFloat(item.card_prices[0].tcgplayer_price));
      }
    });
    setTotalDeckPrice(priceArray);
  };

  useEffect(() => {
    myDeckPrice();
  }, [myDeck]);

  useEffect(() => {
    getAllCards();
    if (myDeckRedux !== []) {
      setMyDeck(myDeckRedux);
    }
  }, []);

  useEffect(() => {
    searchCard(searchCardValue);
  },[searchCardValue])

  return (
    <SearchDeckWrapper>
      {allCards.length <= 10000 ? (
        <FullScreenLoader />
      ) : (
        <>
          <Title>Busqueda de cartas</Title>
          <Subtitle>
            Busca tus cartas por nombre o por código, si búscas tus cartas por
            código el precio que se mostrará será el más aproximado a esa carta.
          </Subtitle>
          <SwitchDiv>
            <Switch
              onText="Name"
              offText="Code"
              onImage="/assets/Card.png"
              offImage="/assets/Code.png"
              isActive={searchByCode}
              onClick={() => setSearchByCode(!searchByCode)}
            />
          </SwitchDiv>
          <SearchBothInputWrapper>
            {!searchByCode ? (
              <SearchInputWrapper>
                <InputText
                  autoCompleteValues={allCardsName}
                  placeholder="Búsqueda por nombre"
                  value={searchCardValue}
                  setValue={setSearchCardValue}
                  icon="/assets/Search.png"
                  onChange={(
                    _e: ChangeEvent<HTMLInputElement>,
                    value: string
                  ) => {
                    searchCard(value);
                    setSearchCardValue(value);
                  }}
                />
              </SearchInputWrapper>
            ) : (
              <SearchInputWrapper>
                <InputText
                  placeholder="Búsqueda por código"
                  icon="/assets/Search.png"
                  onChange={(
                    _e: ChangeEvent<HTMLInputElement>,
                    value: string
                  ) => {
                    searchCardByCode(value);
                  }}
                />
              </SearchInputWrapper>
            )}
          </SearchBothInputWrapper>
          <DesktopSeparator />
          <Separator />
          <Subtitle>Resultados de la busqueda: {foundCards.length}</Subtitle>
          <SearchAndMyDeckWrapper>
            <AllCardsWrapper>
              {foundCards &&
                foundCards.map((item: any) => (
                  <Card
                    item={item}
                    onTouchCard={() => {
                      setMyDeck((myDeck) => [...myDeck, item]);
                    }}
                    isEditable={false}
                    foundCards={foundCards}
                    name={item.name}
                    image={item.card_images[0].image_url_small}
                  />
                ))}
            </AllCardsWrapper>
            <Separator />
            <DesktopVerticalSeparator />
            <MyDeckWrapper ref={drop}>
              <MyDeckPriceWrapper>
                <Subtitle>My Deck</Subtitle>
                <Price>
                  ${totalDeckPrice.reduce((a, b) => a + b, 0).toFixed(2)} dls
                </Price>
              </MyDeckPriceWrapper>
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
                        const arrayPrice = totalDeckPrice;
                        arrayPrice.splice(index, 1);
                        setTotalDeckPrice(arrayPrice);
                      }}
                    />
                  ))}
              </DeckWrapper>
              <ButtonContainer>
                {myDeck.length >= 1 && (
                  <StartButton
                    onClick={(e) => {
                      e.preventDefault();
                      if (!session) {
                        router.push("/login");
                        dispatch(addToMyDeck({ myDeck }));
                      } else {
                        setIsOpenDrawer(!isOpenDrawer);
                      }
                    }}
                  >
                    Guardar deck
                  </StartButton>
                )}
              </ButtonContainer>
            </MyDeckWrapper>
          </SearchAndMyDeckWrapper>
        </>
      )}
      <BottomDrawer isOpen={isOpenDrawer}>
        <SmallText>* Tu primera carta será tu carta principal</SmallText>
        <SaveDeckInputs>
          <InputText
            placeholder="Nombre del deck"
            value={deckName}
            onChange={(_e: ChangeEvent<HTMLInputElement>, value: string) => {
              setDeckName(value);
            }}
          />
          <InputText
            placeholder="Tipo de deck"
            value={deckType}
            onChange={(_e: ChangeEvent<HTMLInputElement>, value: string) => {
              setDeckType(value);
            }}
          />
        </SaveDeckInputs>
        <SmallText>* Ambos campos son obligatorios</SmallText>
        <ButtonsWrapper>
          <StartButton
            onClick={async () => {
              if (deckName && deckType && myDeck) {
                await dispatch(
                  createDeck({
                    deckName,
                    deckType,
                    deck: myDeck,
                    mainCard: myDeck[0].card_images[0].image_url,
                    email: session.user.email,
                    deckPrice: totalDeckPrice
                      .reduce((a, b) => a + b, 0)
                      .toFixed(2),
                  })
                );
                setIsOpenDrawer(false);
                router.push("/profile");
              } else {
                toast.error("Llena ambos campos");
              }
            }}
          >
            Guardar
          </StartButton>
          <StartButton onClick={() => setIsOpenDrawer(false)}>
            Cancelar
          </StartButton>
        </ButtonsWrapper>
      </BottomDrawer>
    </SearchDeckWrapper>
  );
};

export default SearchDeck;
