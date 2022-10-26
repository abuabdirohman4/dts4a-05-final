import {
  ERROR_FETCHING,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  START_FETCHING,
  SUCCESS_FETCHING,
} from "./constants";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  status: statusList.idle,
  data: [],
  found: 0,
  page: 1,
  keyword: "",
  limit: 5,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return { ...state, status: statusList.process };
    case ERROR_FETCHING:
      return { ...state, status: statusList.error };
    case SUCCESS_FETCHING:
      return {
        ...state,
        status: statusList.success,
        data: action.news,
        found: action.found,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.limit,
      };
    default:
      return state;
  }
}
