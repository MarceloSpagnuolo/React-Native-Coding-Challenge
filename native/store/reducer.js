import {
  GET_NEWS,
  ERROR_MESSAGE,
  GET_POPULAR,
  GET_TOP,
  GET_HOT,
} from "./contanst";
import { Alert } from "react-native";
import { News, Popular, Top, Hot } from "../utils/functions";

const initial_state = {
  posts: [],
  active: "",
};

export const subjectsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        posts: News(action.payload.data.children),
        active: "new",
      };
    case GET_POPULAR:
      return {
        ...state,
        posts: Popular(action.payload.data.children),
        active: "popular",
      };
    case GET_TOP:
      return {
        ...state,
        posts: Top(action.payload.data.children),
        active: "top",
      };
    case GET_HOT:
      return {
        ...state,
        posts: Hot(action.payload.data.children),
        active: "hot",
      };
    case ERROR_MESSAGE:
      Alert.alert(action.message);
      return state;
    default:
      return state;
  }
};
