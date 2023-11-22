import { ACTIONS } from './reducerActions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true };
    case ACTIONS.GET_POPULAR_ANIME:
      return { ...state, popularAnime: action.payload, loading: false };
    case ACTIONS.SEARCH:
      return { ...state, searchResults: action.payload, loading: false };
    default:
      return state;
  }
};
