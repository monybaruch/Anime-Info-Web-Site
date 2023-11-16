import { useContext } from 'react';

import { GlobalContext } from '../context/Global';

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
