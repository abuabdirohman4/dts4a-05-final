import {
  ERROR_FETCHING,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  START_FETCHING,
  SUCCESS_FETCHING,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";

let debouncedFetchTalents = debounce(getData, 1000);

export const startFetching = () => {
  return {
    type: START_FETCHING,
  };
};

export const errorFetching = () => {
  return {
    type: ERROR_FETCHING,
  };
};

export const successFetching = ({ news, found }) => {
  return {
    type: SUCCESS_FETCHING,
    news,
    found,
  };
};

export const fetchAllData = () => {
  return async (dispatch, getState) => {
    dispatch(startFetching());
    try {
      let params = {
        page: getState().news?.page,
        search: getState().news?.keyword,
      };

      let res = await debouncedFetchTalents(`/all`, params);
      dispatch(
        successFetching({
          news: res.data.data,
          found: res.data.meta.found,
        })
      );
    } catch {
      dispatch(errorFetching());
    }
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};

export const setLimit = (limit) => {
  return {
    type: SET_LIMIT,
    limit,
  };
};
