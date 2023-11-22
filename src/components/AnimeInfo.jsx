import { AnimeInfoHeader, AnimeDetails, AnimeInfoDescription, AnimeInfoTrailer } from '../data';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/animeinfo.css';

const AnimeInfo = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnime(data.data);
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container anime-info-flex">
      <div className="details">
        <AnimeInfoHeader {...anime} />
        <AnimeDetails {...anime} />
        <AnimeInfoDescription {...anime} />
      </div>
      <AnimeInfoTrailer {...anime} />
    </div>
  );
};

export default AnimeInfo;
