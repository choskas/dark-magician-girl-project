// @ts-nocheck
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
import { addToMyDeck, createDeck, createDeckBase } from "../../redux/modules/deck";
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
  const [cardByCodeInfo, setCardByCodeInfo] = useState<any>([]);
  const [isClickedDelete, setIsClickedDelete] = useState(false);
  const [searchByCode, setSearchByCode] = useState(false);
  const [totalDeckPrice, setTotalDeckPrice] = useState([]);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [searchCardValue, setSearchCardValue] = useState("");
  const [deckName, setDeckName] = useState("");
  const [deckType, setDeckType] = useState("");
  const [deckPrice, setDeckPrice] = useState(null);
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
      });
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
        setCardByCodeInfo(cardInfo);
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
            desc: card.desc,
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
      setMyDeck((myDeck) => [
        ...myDeck,
        {
          id: item.id,
          name: item.name,
          level: item.level,
          race: item.race,
          archetype: item.archetype,
          attribute: item.attribute,
          atk: item.atk,
          def: item.def,
          type: item.type,
          desc: item.desc,
          cardPrices: item.card_prices,
          card_images: item.card_images,
          setCode: item && item.set_code,
          setName: item && item.set_name,
          setPrice: item.set_price
            ? item.set_price
            : item.card_prices[0].tcgplayer_price,
          setRarity: item && item.set_rarity,
        },
      ]);
    },
    collect: (monitor) => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  }));

  const myDeckPrice = () => {
    const priceArray = [];
    myDeck.map((item: any) => {
      if (item.setPrice) {
        priceArray.push(parseFloat(item.setPrice));
      } else {
        priceArray.push(parseFloat(item.cardPrices[0].tcgplayer_price));
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
  }, [searchCardValue]);

  return (
    <SearchDeckWrapper>
      {allCards.length <= 10000 ? (
        <FullScreenLoader />
      ) : (
        <>
          <Title>
            {session && session.user.role === "store"
              ? "Crea tu base"
              : "Busqueda de cartas"}
          </Title>
          {session && session.user.role === "store" && (
            <Subtitle>
              Crea tus bases, puedes basarte en nuestro precio aproximado para
              darle un precio.
            </Subtitle>
          )}
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
                  onKeyPress={() => {}}
                  onClickListValue={() => {}}
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
                  onKeyPress={() => {}}
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
                      setMyDeck((myDeck) => [
                        ...myDeck,
                        {
                          id: item.id,
                          name: item.name,
                          level: item.level,
                          race: item.race,
                          archetype: item.archetype,
                          attribute: item.attribute,
                          atk: item.atk,
                          def: item.def,
                          desc: item.desc,
                          type: item.type,
                          cardPrices: item.card_prices,
                          card_images: item.card_images,
                          setCode: cardByCodeInfo && cardByCodeInfo.set_code,
                          setName: cardByCodeInfo && cardByCodeInfo.set_name,
                          setPrice: cardByCodeInfo.set_price
                            ? cardByCodeInfo.set_price
                            : item.card_prices[0].tcgplayer_price,
                          setRarity:
                            cardByCodeInfo && cardByCodeInfo.set_rarity,
                        },
                      ]);
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
                <Subtitle>
                  {session && session.user.role === "store" ? "Mi base" : "Mi Deck"}
                </Subtitle>
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
                      if (!session && session) {
                        router.push("/login");
                        dispatch(addToMyDeck({ myDeck }));
                      } else {
                        setIsOpenDrawer(!isOpenDrawer);
                      }
                    }}
                  >
                    {session && session.user.role === "store"
                      ? "Guardar base"
                      : "Guardar deck"}
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
            onKeyPress={() => {}}
            placeholder={
              session && session.user.role === 'store' ? "Nombre de la base" : "Nombre del deck"
            }
            value={deckName}
            onChange={(_e: ChangeEvent<HTMLInputElement>, value: string) => {
              setDeckName(value);
            }}
          />
          {session && session.user.role === 'store' ? (
            <InputText
              onKeyPress={() => {}}
              placeholder="Precio del deck"
              value={deckPrice}
              onChange={(_e: ChangeEvent<HTMLInputElement>, value: string) => {
                setDeckPrice(value);
              }}
            />
          ) : (
            <InputText
              onKeyPress={() => {}}
              placeholder="Tipo de deck"
              value={deckType}
              onChange={(_e: ChangeEvent<HTMLInputElement>, value: string) => {
                setDeckType(value);
              }}
            />
          )}
        </SaveDeckInputs>
        <SmallText>* Ambos campos son obligatorios</SmallText>
        <ButtonsWrapper>
          <StartButton
            onClick={async () => {
              if (session.user.role === 'store') {
                if (deckPrice && deckName) {
                await dispatch(createDeckBase({
                  userId: session.user.id,
                  email: session.user.email,
                  deckName, 
                  deckPrice, 
                  deck: myDeck.map((item) => {
                    return {
                      id: item.id,
                      name: item.name,
                      type: item.type,
                      desc: item.desc,
                      atk: item.atk,
                      def: item.def,
                      level: item.level,
                      race: item.race,
                      attribute: item.attribute,
                      archetype: item.archetype,
                      cardImageSmall: item.card_images[0].image_url_small,
                      cardImage: item.card_images[0].image_url,
                      setCode: item.setCode && item.setCode,
                      setName: item.setName && item.setName,
                      setPrice: item.setPrice && item.setPrice,
                      setRarity: item.setRarity && item.setRarity,
                    };
                  }), 
                  mainCard: myDeck[0].card_images[0].image_url,
                }))
                return true;
              } else {
                toast.error('Ambos campos son obligatorios')
                return false;
              }
              } 
              if (deckName && deckType && myDeck) {
                await dispatch(
                  createDeck({
                    deckName,
                    deckType,
                    deck: myDeck.map((item) => {
                      return {
                        id: item.id,
                        name: item.name,
                        type: item.type,
                        desc: item.desc,
                        atk: item.atk,
                        def: item.def,
                        level: item.level,
                        race: item.race,
                        attribute: item.attribute,
                        archetype: item.archetype,
                        cardImageSmall: item.card_images[0].image_url_small,
                        cardImage: item.card_images[0].image_url,
                        setCode: item.setCode && item.setCode,
                        setName: item.setName && item.setName,
                        setPrice: item.setPrice && item.setPrice,
                        setRarity: item.setRarity && item.setRarity,
                      };
                    }),
                    mainCard: myDeck[0].card_images[0].image_url,
                    // @ts-ignore
                    id: session.user.id,
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
