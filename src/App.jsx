import { useEffect, useState } from 'react';

function App() {
  const [searchAnime, setSearchAnime] = useState('nope');
  const [animeData, setAnimeData] = useState();
  const baseUrl = 'https://api.jikan.moe/v4';
  const getAnimeData = async () => {
    const res = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
    const resData = await res.json();
    console.log(resData.data);

    setAnimeData(resData.data);
  };
  useEffect(() => {
    getAnimeData();
  }, []);
  return (
    <>
      <div className="header">
        <h1>My Anime Info</h1>
        <div className="anime-search">
          <input
            type="search"
            placeholder="Search your favorite anime!"
            onChange={(e) => {
              setSearchAnime(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
