const AnimeInfoTrailer = ({ trailer }) => {
  return (
    <>
      <h3 className="title">Trailer</h3>
      <div className="trailer-con">
        {trailer?.embed_url ? (
          <iframe
            src={trailer?.embed_url}
            title="Inline Frame Example"
            width="800"
            height="450"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <h1>Trailer not available!</h1>
        )}
      </div>
    </>
  );
};
export default AnimeInfoTrailer;
