import axios from "axios";
import {
  GET_NEWS,
  ERROR_MESSAGE,
  GET_POPULAR,
  GET_TOP,
  GET_HOT,
} from "./contanst";

export const GetNews = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.reddit.com/r/pics/hot.json");
    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: e,
    });
  }
};

export const GetPopular = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.reddit.com/r/pics/hot.json");
    dispatch({
      type: GET_POPULAR,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: e,
    });
  }
};

export const GetTop = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.reddit.com/r/pics/hot.json");
    dispatch({
      type: GET_TOP,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: e,
    });
  }
};

export const GetHot = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.reddit.com/r/pics/hot.json");
    dispatch({
      type: GET_HOT,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: e,
    });
  }
};
