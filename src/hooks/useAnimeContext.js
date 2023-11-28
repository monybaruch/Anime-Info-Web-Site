import { useContext } from 'react';

import { AnimeContext } from '../context/AnimeContext';

export const useAnimeContext = () => {
  return useContext(AnimeContext);
};
