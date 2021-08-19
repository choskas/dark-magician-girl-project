import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const WANTED_CARDS = "yugi/wantedCards/WANTED_CARDS";
const WANTED_CARDS_BY_ID = "yugi/wantedCards/WANTED_CARDS_BY_ID";
const SELECTED_CARD = "yugi/wantedCards/SELECTED_CARD";

const INITIAL_STATE = {
  allWantedCards: [],
  allWantedCardsById: [],
  selectedCard: null,
};

export default function wantedCards(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case WANTED_CARDS:
      return { ...state, allWantedCards: action.payload };
    case WANTED_CARDS_BY_ID:
      return { ...state, allWantedCardsById: action.payload}
    case SELECTED_CARD:
      return { ...state, selectedCard: action.payload}
    default:
      return state;
  }
}

export const addToMyWantedCards =
  (card: any) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedCards/add`,
        card
      );
      toast(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

export const getAllWantedCards = () => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedCards/getAllWantedCards`
    );
    dispatch({
      type: WANTED_CARDS,
      payload: response.data.allCards,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllWantedCardsById = (userId: any) => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedCards/getAllWantedCardsById`, userId
    );
    dispatch({
      type: WANTED_CARDS_BY_ID,
      payload: response.data.cards,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const selectedCardFunc = (card: any) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({
      type: SELECTED_CARD,
      payload: card,
    });
    return card;
  } catch (error) {
    console.log(error);
  }
};

export const hasFoundCard =
  (data: { userId: string; rarityCode: string, foundBy: string, foundByName: string, }) =>
  async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedCards/foundCard`,
        data
      );
      toast(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // deleteWantedCard
  export const deleteWantedCard = (data: any) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedCards/deleteWantedCard`,
        data
      );
      toast(response.data.message)
      return data;
    } catch (error) {
      console.log(error);
    }
  };
