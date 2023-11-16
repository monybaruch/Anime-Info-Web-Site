import { useGlobalContext } from '../context/Global';
import { Link } from 'react-router-dom';
import { NavBar } from '../data';
import Footer from '../components/Footer';

const PopularAnimePage = () => {
  const { popularAnime, isSearch } = useGlobalContext();
  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt=""></img>
          </Link>
        );
      });
    }
  };
  return (
    <div className="container">
      <NavBar />
      <div className="popular-container">
        <div className="popular-anime">{conditionalRender()}</div>
      </div>
      <Footer />
    </div>
  );
};
export default PopularAnimePage;
