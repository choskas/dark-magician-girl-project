import axios from "axios";
import { useDrop } from 'react-dnd'
import { useEffect, useState, ChangeEvent } from "react";
import { AllCardsWrapper, MyDeckWrapper, SearchAndMyDeckWrapper, SearchDeckWrapper, SearchInputWrapper } from "../../styles/deckPrice/deckPrice";
import { CardFrameVertical } from "../../styles/index/MainPage";
import Card from "./Card";
import InputText from "../common/InputText";

const ItemTypes = {
    CARD: 'card',
};

const SearchDeck = () => {
    const [allCards, setAllCards] = useState([]);
    const [foundCards, setFoundCards] = useState([]);
    const getAllCards = async () => {
        try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?')
        setAllCards(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const searchCard = (value: string) => {
        if (value.length > 3) {
        const card = allCards.filter((item: any) => { 
            return item.name.toLowerCase().includes(value.toLowerCase());
        })
        setFoundCards(card);
        } 
        if (value.length < 3) {
            setFoundCards([]);
        }
    }

    const [{ isActive }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item) => console.log(item),
        collect: (monitor) => ({
          isActive: monitor.canDrop() && monitor.isOver(),
        }),
      }));

      console.log(foundCards)

    useEffect(() => {
        getAllCards();
    },[])
    return(
        <SearchDeckWrapper>
            <SearchInputWrapper>
                <InputText
                    placeholder="Búsqueda"
                    onChange={(_e: ChangeEvent<HTMLInputElement>, value: string) =>
                    searchCard(value)}
                />
            </SearchInputWrapper>
            <SearchAndMyDeckWrapper>
                <AllCardsWrapper>
                    {foundCards && foundCards.map((item: any) => (
                        <Card name={item.name} image={item.card_images[0].image_url_small} />
                    ))}
                </AllCardsWrapper>
                <CardFrameVertical />
                <MyDeckWrapper ref={drop} >
                    My Deck
                </MyDeckWrapper>
            </SearchAndMyDeckWrapper>
        </SearchDeckWrapper>
    );
};

export default SearchDeck;