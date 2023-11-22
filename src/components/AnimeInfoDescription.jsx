import { useState } from 'react';
import './styles/animeinfrodescription.css';

const AnimeInfoDescription = ({ synopsis }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <p className="description">
      {showMore ? synopsis : `${synopsis?.substring(0, 450)}...`}
      <button
        type="button"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? 'Show Less' : 'Read More'}
      </button>
    </p>
  );
};
export default AnimeInfoDescription;
