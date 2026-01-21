import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies, setSelectedMovie, clearSelectedMovie } from "../../store/redux/slices/movieSlice";
import MovieDetailModal from "../4-templates/MovieDetailModal";

const Series = () => {
  // 1. Get dispatch dan data dari Redux store
  const dispatch = useDispatch();
  const { allMovies, selectedMovie, loading, error } = useSelector(
    (state) => state.movies
  );

  // 2. Fetch data movies saat component mount
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  // 3. Handle movie click
  const handleMovieClick = (movie) => {
    dispatch(setSelectedMovie(movie));
  };

  // 4. Handle close modal
  const handleCloseModal = () => {
    dispatch(clearSelectedMovie());
  };

  // Filter series (movies dengan duration yang mengandung "eps")
  const seriesList = allMovies.filter((movie) => movie.duration.includes("eps"));

  // 5. Loading state
  if (loading && allMovies.length === 0) {
    return (
      <main className="flex justify-center items-center w-full bg-[#181A1C] min-h-screen">
        <p className="text-white text-2xl">Loading...</p>
      </main>
    );
  }

  // 6. Error handling
  if (error) {
    return (
      <main className="flex justify-center items-center w-full bg-[#181A1C] min-h-screen">
        <p className="text-red-500 text-2xl">{error}</p>
      </main>
    );
  }

  // 7. Render tampilan dengan data dari Redux
  return (
    <main className="flex flex-col w-full bg-[#181A1C] gap-15 min-h-screen pb-25 px-5 lg:px-[80px]">
      {/* Header */}
      <section className="header-section pt-10">
        <h1 className="text-white text-[32px] lg:text-[48px] font-bold">
          Semua Series
        </h1>
        <p className="text-white/60 text-[14px] lg:text-[16px] mt-2">
          Koleksi series terlengkap dengan episode terbaru
        </p>
      </section>

      {/* Series Grid */}
      <section className="series-grid-section w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {seriesList.map((series) => (
            <div
              key={series.id}
              className="series-card cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleMovieClick(series)}
            >
              <img
                src={series.poster.portrait}
                alt={series.title}
                className="w-full h-auto rounded-lg object-cover"
              />
              <h3 className="text-white text-[12px] lg:text-[14px] font-semibold mt-3 line-clamp-2">
                {series.title}
              </h3>
              <p className="text-white/60 text-[10px] lg:text-[12px]">
                {series.rating} • {series.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Detail Series */}
      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          allMovies={allMovies}
        />
      )}
    </main>
  );
};

export default Series;
