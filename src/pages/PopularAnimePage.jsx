import { useAnimeContext } from '../hooks/useAnimeContext';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PopularAnimePage.css';
import { useAuthContext } from '../hooks/useAuthContext';

function PopularAnimePage() {
  const { popularAnime, isSearch, searchResults } = useAnimeContext();
  const [favorites, setFavorites] = useState([]);

  const { user } = useAuthContext();

  const animeData = isSearch ? searchResults : popularAnime;

  const addToFavorites = (anime) => {
    setFavorites((prevFavorites) => [...prevFavorites, anime]);
  };

  const removeFromFavorites = (malId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((anime) => anime.mal_id !== malId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <div className="container">
      <h2>Animes</h2>
      <div className="popular-anime">
        {animeData?.map((anime) => (
          <div key={anime.mal_id} className="anime-card">
            <Link to={`/anime/${anime.mal_id}`}>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            </Link>
            {user && (
              <div className="buttons-container">
                {favorites.some((favAnime) => favAnime.mal_id === anime.mal_id) ? (
                  <button onClick={() => removeFromFavorites(anime.mal_id)}>Remove</button>
                ) : (
                  <button onClick={() => addToFavorites(anime)}>Add</button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {user && favorites.length > 0 && (
        <div>
          <h2>Your Favorites:</h2>
          <div className="clear-all-container">
            <button onClick={clearFavorites} className="btn">
              Clear All
            </button>
          </div>
          <div className="popular-anime">
            {favorites.map((favAnime) => (
              <Link key={favAnime.mal_id} to={`/anime/${favAnime.mal_id}`}>
                <img src={favAnime.images.jpg.large_image_url} alt={favAnime.title} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PopularAnimePage;
