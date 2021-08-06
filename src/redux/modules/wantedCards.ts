import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const WANTED_CARDS = "yugi/wantedCards/WANTED_CARDS";

const INITIAL_STATE = {
  allWantedCards: [],
};

export default function wantedCards(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case WANTED_CARDS:
      return { ...state, allWantedCards: action.payload };
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
      console.log(error);
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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const hasFoundCard =
  (data: { userId: string; rarityCode: string }) =>
  async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedCards/foundCard`,
        data
      );
      toast(response.data.message);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
