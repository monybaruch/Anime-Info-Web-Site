import './styles/animedetails.css';
const AnimeDetails = ({ images, rating, rank, score, scored_by, popularity, status, source, season, duration }) => {
  return (
    <div className="detail">
      <div className="image">
        <img src={images?.jpg.large_image_url} alt="" />
      </div>
      <div className="anime-details">
        <p>Rating: {rating}</p>
        <p>Rank: {rank}</p>
        <p>Score: {score}</p>
        <p>Scored By: {scored_by}</p>
        <p>Popularity: {popularity}</p>
        <p>Status: {status}</p>
        <p>Source: {source}</p>
        <p>Season: {season}</p>
        <p>Duration: {duration}</p>
      </div>
    </div>
  );
};
export default AnimeDetails;
