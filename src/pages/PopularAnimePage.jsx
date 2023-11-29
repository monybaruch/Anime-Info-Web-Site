import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PopularAnimePage.css';
import { useAnimeContext } from '../hooks/useAnimeContext';
import { useAuthContext } from '../hooks/useAuthContext';

function PopularAnimePage() {
  const { popularAnime, isSearch, searchResults } = useAnimeContext();
  const { user, saveUser } = useAuthContext();

  const animeData = isSearch ? searchResults : popularAnime;

  const addToFavorites = async (anime) => {
    if (user) {
      const updatedUser = {
        ...user,
        favorites: [...user.favorites, anime],
      };

      saveUser(updatedUser);
      try {
        await axios.put(`https://65647590ceac41c0761e3990.mockapi.io/users/${user.id}`, updatedUser);
      } catch (error) {
        console.error('Error adding anime to favorites:', error);
      }
    }
  };

  const removeFromFavorites = async (malId) => {
    if (user) {
      const favorites = [...user.favorites].filter((anime) => anime.mal_id !== malId);
      const updatedUser = {
        ...user,
        favorites,
      };
      saveUser(updatedUser);
      try {
        await axios.put(`https://65647590ceac41c0761e3990.mockapi.io/users/${user.id}`, updatedUser);
      } catch (error) {
        console.error('Error removing anime from favorites:', error);
      }
    }
  };

  const clearFavorites = async () => {
    if (user) {
      // Update local state
      const updatedUser = {
        ...user,
        favorites: [],
      };

      saveUser(updatedUser);

      // Update user's favoriteAnime in mock API
      try {
        await axios.put(`https://65647590ceac41c0761e3990.mockapi.io/users/${user.id}`, updatedUser);
      } catch (error) {
        console.error('Error clearing favorites:', error);
      }
    }
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
                {user.favorites.some((favAnime) => favAnime.mal_id === anime.mal_id) ? (
                  <button onClick={() => removeFromFavorites(anime.mal_id)} className="btn">
                    Remove
                  </button>
                ) : (
                  <button onClick={() => addToFavorites(anime)} className="btn">
                    Add
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {user && user.favorites.length > 0 && (
        <div>
          <h2>Your Favorites:</h2>
          <div className="clear-all-container">
            <button onClick={clearFavorites} className="btn clear-btn">
              Clear All
            </button>
          </div>
          <div className="popular-anime">
            {user &&
              user.favorites.map((favAnime) => (
                <div key={favAnime.mal_id} className="anime-card">
                  <Link to={`/anime/${favAnime.mal_id}`}>
                    <img src={favAnime.images.jpg.large_image_url} alt={favAnime.title} />
                  </Link>
                  <button onClick={() => removeFromFavorites(favAnime.mal_id)} className="btn">
                    Remove
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PopularAnimePage;
