import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const WANTED_BASES = "yugi/wantedBases/WANTED_BASES";
const WANTED_CARDS_BY_ID = "yugi/wantedCards/WANTED_CARDS_BY_ID";
const SELECTED_CARD = "yugi/wantedCards/SELECTED_CARD";

const INITIAL_STATE = {
  allWantedBases: [],
};

export default function wantedBases(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case WANTED_BASES:
      return { ...state, allWantedBases: action.payload };
    default:
      return state;
  }
}

export const getAllWantedBases = () => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedBases/getAllWantedBases`
    );
    dispatch({
      type: WANTED_BASES,
      payload: response.data.wantedBases,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addToWantedBases = (id) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedBases/addToWantedBases`, id
      );
      toast(response.data.message)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const foundBase = (id) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedBases/foundBase`, id
      );
      toast(response.data.message)
      return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
  };

  export const stopBaseSearch = (id) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/wantedBases/stopSearch`, id
      );
      toast(response.data.message)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
