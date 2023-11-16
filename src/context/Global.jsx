import { createContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { ACTIONS } from './reducerActions';

export const GlobalContext = createContext();

const baseUrl = 'https://api.jikan.moe/v4';

export const GlobalContextProvider = ({ children }) => {
  // intial state
  const intialState = {
    popularAnime: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  //fetch popular anime

  const getPopularAnime = async () => {
    dispatch({ type: ACTIONS.LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
    const data = await response.json();
    dispatch({ type: ACTIONS.GET_POPULAR_ANIME, payload: data.data });
  };

  //initial render

  useEffect(() => {
    getPopularAnime();
  }, []);

  return <GlobalContext.Provider value={{ ...state }}>{children}</GlobalContext.Provider>;
};
