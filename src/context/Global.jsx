import { createContext, useEffect, useReducer, useState } from 'react';
import { ACTIONS } from './reducerActions';
import { reducer } from './reducer';

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
    try {
      dispatch({ type: ACTIONS.LOADING });
      const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
      const data = await response.json();
      dispatch({ type: ACTIONS.GET_POPULAR_ANIME, payload: data.data });
    } catch (error) {
      console.error('Error fetching popular anime:', error);
    }
  };
  //initial render

  useEffect(() => {
    getPopularAnime();
  }, []);

  //search function
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      state.isSearch = false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      searchAnime(search);
      state.isSearch = true;
    } else {
      state.isSearch = false;
      alert('Please enter a valid anime name!');
    }
  };

  //fatch searched anime
  const searchAnime = async (anime) => {
    try {
      dispatch({ type: ACTIONS.LOADING });
      const response = await fetch(`${baseUrl}/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SEARCH, payload: data.data });
    } catch (error) {
      console.error('Error fetching searched anime:', error);
    }
  };

  return (
    <GlobalContext.Provider value={{ ...state, handleChange, handleSubmit, searchAnime, search }}>
      {children}
    </GlobalContext.Provider>
  );
};
