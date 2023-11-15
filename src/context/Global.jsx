// import { createContext, useContext, useEffect, useReducer } from 'react';

// const GlobalContext = createContext();

// const baseUrl = 'https://api.jikan.moe/v4';
// //actions
// const LOADING = 'LOADING';
// const GET_POPULAR_ANIME = 'GET_POPULAR_ANIME';

// //reducer
// const reducer = (state, action) => {
//   return state;
// };

// export const GlobalContextProvider = ({ children }) => {
//   // intial state
//   const intialState = {
//     popularAnime: [],
//     loading: false,
//   };

//   const [state, dispatch] = useReducer(reducer, intialState);

//   //fetch popular anime

//   const getPopularAnime = async () => {
//     const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
//     const data = await response.json();
//     console.log(data.data);
//   };

//   //initial render

//   useEffect(() => {
//     getPopularAnime();
//   }, []);

//   return <GlobalContext.Provider value={{ ...state }}>{children}</GlobalContext.Provider>;
// };

// export const useGlobalContext = () => {
//   return useContext(GlobalContext);
// };
