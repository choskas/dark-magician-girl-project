import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const STORE_UNIQUE_CARDS = "yugi/store/STORE_UNIQUE_CARDS";
const STORE_DECK_BASES = "yugi/store/STORE_DECK_BASES";
const STORE_DECKS_AND_CARDS = "yugi/store/STORE_DECKS_AND_CARDS";
const STORE_PROFILE_IMAGE_KEY = "yugi/store/STORE_PROFILE_IMAGE_KEY";
const STORE_ALL_STORES = "yugi/store/STORE_ALL_STORES";

const INITIAL_STATE = {
  uniqueCards: [],
  deckBases: [],
  allStoresDecksAndCards: [],
  storeProfileImageKey: '',
};

export default function storeCards(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case STORE_UNIQUE_CARDS:
      return { ...state, uniqueCards: action.payload };
    case STORE_DECK_BASES:
      return { ...state, deckBases: action.payload};
      case STORE_DECKS_AND_CARDS:
        return { ...state, allStoresDecksAndCards: action.payload};
      case STORE_PROFILE_IMAGE_KEY:
        return { ...state, storeProfileImageKey: action.payload};
      case STORE_ALL_STORES:
        return { ...state, allStores: action.payload};
    default:
      return state;
  }
}

export const addToMyUniqueCards =
  (data: any) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/store/addUniqueCard`,
        data
      );
      toast(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

export const getAllUniqueCardsById = (userId: any) => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/store/getAllUniqueCardsById`, userId
    );
    dispatch({
      type: STORE_UNIQUE_CARDS,
      payload: response.data.cards.uniqueCards,
    });
    dispatch({
      type: STORE_DECK_BASES,
      payload: response.data.cards.decksBases,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUniqueCard = (data: any) => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/store/deleteUniqueCard`, data
    );
    toast(response.data.message);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDeckBase = (id) => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/store/deleteDeckBase`, id
    );
    toast(response.data.message)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllStoreAndDecksCards = () => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/store/getAllStoresDecksAndCards`);
    dispatch({
      type: STORE_DECKS_AND_CARDS,
      payload: response.data.stores,
    })
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postCardsFastCharge = (data: any) => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/store/fastAddUniqueCard`, data);
    toast(response.data.message);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export const postStoreImage = (data: any) => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploadProfileImage`, data, {headers: {'Content-Type': 'multipart/form-data'}});
    toast(response.data.message);
    dispatch({
      type: STORE_PROFILE_IMAGE_KEY,
      payload: response.data.imageKey,
    })
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export const postProfileImage = (data: any) => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploadProfileImageDuelist`, data, {headers: {'Content-Type': 'multipart/form-data'}});
    toast(response.data.message);
    dispatch({
      type: STORE_PROFILE_IMAGE_KEY,
      payload: response.data.imageKey,
    })
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export const getAllStores = () => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/store/getAllStores`);
    dispatch({
      type: STORE_ALL_STORES,
      payload: response.data.stores,
    })
    return response.data;
  } catch (error) {
    console.log(error)
  }
}
