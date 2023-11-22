import { useGlobalContext } from '../hooks/useGlobalContext';
import { Link } from 'react-router-dom';
import './popular.css';

function PopularAnimePage() {
  const { popularAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    }
  };

  return (
    <div className="container">
      <div className="popular-container">
        <div className="popular-anime">{conditionalRender()}</div>
      </div>
    </div>
  );
}

export default PopularAnimePage;
