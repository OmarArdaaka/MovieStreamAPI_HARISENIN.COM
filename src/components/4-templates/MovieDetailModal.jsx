import { useMovieStore } from "../../store/movieStore";
import { FaCheck, FaPlay, FaPlus, FaEye, FaUndo } from "react-icons/fa";
import { PiSpeakerSimpleSlashFill } from "react-icons/pi";
import MovieCard from "../2-molecules/MovieCard";
import Button from "../1-atoms/Button";

const MovieDetailModal = ({ movie, onClose, allMovies }) => {
  // Get state dan action from useMovieStore
  const { myMovieList, addToMyList, removeFromMyList, toggleWatchedStatus } =
    useMovieStore();

  const recommendations = allMovies
    .filter((item) => item.id !== movie.id)
    .slice(0, 3);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  // console.log("myMovieList:", myMovieList);
  // cek apakah film ada di daftar saya
  const myListItem = myMovieList.find(
    (item) => String(item.movieId) === String(movie.id)
  );
  // console.log("myListItem:", myListItem);
  const isInMyList = !!myListItem; //nilai true jika ditemukan
  // console.log("isInMyList:", isInMyList);
  const isWatched = myListItem ? myListItem.isWatched : false;
  // console.log("isWatched:", isWatched);

  return (
    <div
      className="fixed inset-0 bg-gray-800/90 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#181A1C] text-white rounded-lg shadow-xl w-full max-w-3xl h-70% lg:h-[90%] overflow-y-auto flex flex-col"
        onClick={handleClick}
      >
        <div className="hero-section relative h-42 lg:h-64">
          <img
            src={movie.poster.landscape}
            alt="movie.title"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="gradient-overlay absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent"></div>
          {/* Tombol Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl hover:text-red-500 cursor-pointer bg-[#181A1C] rounded-full w-8 h-8 flex items-center justify-center z-50"
          >
            &times;
          </button>

          {/* Info di atas gambar */}
          <div className="info-overlay absolute bottom-0 left-0 p-6 lg:p-10 flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-6 w-full">
              <h1 className="text-[16px] lg:text-[32px] font-bold">
                {movie.title}
              </h1>
              <div className="actions flex flex-row w-full justify-between text-[12px] lg:text-[16px]">
                <div className="button-left flex flex-row gap-2">
                  <Button variant="primary" iconLeft={<FaPlay />}>
                    Mulai
                  </Button>
                  <Button
                    className="add-remove-button"
                    type="button"
                    variant="outlined"
                    title={
                      isInMyList
                        ? "Hapus dari Daftar Saya"
                        : "Tambah ke Daftar Saya"
                    }
                    onClick={() =>
                      isInMyList ? removeFromMyList(movie) : addToMyList(movie)
                    }
                  >
                    {isInMyList ? <FaCheck /> : <FaPlus />}
                  </Button>
                  {isInMyList && (
                    <Button
                      className="toggle-watch-button"
                      type="button"
                      variant="outlined"
                      title={
                        isWatched
                          ? "Tandai Belum Ditonton"
                          : "Tandai Sudah Ditonton"
                      }
                      onClick={() => toggleWatchedStatus(movie)}
                    >
                      {isWatched ? <FaUndo /> : <FaEye />}
                    </Button>
                  )}
                </div>
                <div className="button-right">
                  <Button type="button" variant="outlined">
                    <PiSpeakerSimpleSlashFill />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full text-[10px] lg:text-[16px]">
          {/* Bagian Detail Konten */}
          <div className="details-section p-6 lg:p-10 flex flex-col lg:flex-row content-around gap-6 lg:gap-10">
            <div className="synopsis flex flex-col gap-2">
              <div className="meta-info flex items-center gap-5 text-gray-400">
                <span>{new Date(movie.releaseDate).getFullYear()}</span>
                <span>{movie.duration}</span>
                <span className="border border-gray-400 rounded-[4px] px-3 py-1 text-white">
                  {movie.ageRating}
                </span>
              </div>
              <p className="text-white">{movie.synopsis}</p>
            </div>
            <div className="cast-info flex flex-col gap-2  w-full">
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 items-start ">
                <span className="font-semibold text-[#C1C2C4]">Cast</span>
                <span className="text-white">: {movie.cast}</span>

                <span className="font-semibold text-[#C1C2C4]">Genre</span>
                <span className="text-white">: {movie.genre}</span>

                <span className="font-semibold text-[#C1C2C4]">
                  Pembuat Film
                </span>
                <span className="text-white">: {movie.director}</span>
              </div>
            </div>

            {/* Bagian Rekomendasi */}
          </div>
          <div className="recommendations-section px-6 lg:px-10 pb-10">
            <h3 className="text-[12px] lg:text-2xl font-bold mb-4">
              Rekomendasi Serupa
            </h3>
            <div className="grid grid-cols-3 gap-4 ">
              {recommendations.map((rec) => (
                <MovieCard
                  key={rec.id}
                  movie={rec}
                  imgSrc={rec.poster.portrait}
                  movieBadge={true}
                />
              ))}
            </div>
          </div>
          {/* Detail Konten End */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
