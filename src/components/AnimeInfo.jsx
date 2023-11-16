import { AnimeInfoHeader, AnimeDetails } from '../data';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/animeinfo.css';

const AnimeInfo = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnime(data.data);
      } catch (error) {
        console.error('Error fetching anime data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <AnimeInfoHeader {...anime} />
      {loading ? <p>Loading...</p> : <AnimeDetails {...anime} />}
    </>
  );
};

export default AnimeInfo;
