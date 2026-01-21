import Badge from "../1-atoms/Badge.jsx";
import MovieInfo from "../1-atoms/MovieInfo.jsx";

const MovieCard = ({
  movie,
  imgSrc,
  movieBadge = false,
  movieInfo = false,
  onClick,
  isWatched,
}) => {
  return (
    <div
      className={`poster-card relative rounded-lg overflow-hidden cursor-pointer ${
        isWatched ? "opacity-50" : ""
      }`}
      title={movie.title}
      onClick={onClick}
    >
      <img
        src={imgSrc}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      {movieBadge && <Badge type={movie.badge} />}

      {movieInfo && <MovieInfo title={movie.title} rating={movie.rating} />}
    </div>
  );
};

export default MovieCard;
