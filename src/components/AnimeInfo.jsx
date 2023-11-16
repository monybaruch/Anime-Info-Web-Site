import { useState } from 'react';
import { useParams } from 'react-router-dom';

const AnimeInfo = () => {
  const { id } = useParams();
  console.log(id);

  // const [anime, setAnime] = useState();
  // const [moreInfo, setMoreInfo] = useState(false);

  // fetch anime by it's id

  return <div>AnimeItem</div>;
};
export default AnimeInfo;
