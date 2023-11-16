const AnimeInfoTrailer = ({ trailer }) => {
  return (
    <>
      <h3 className="title">Trailer</h3>
      <div className="trailer-con">
        <iframe
          src={trailer?.embed_url}
          title="Inline Frame Example"
          width="800"
          height="450"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
export default AnimeInfoTrailer;
