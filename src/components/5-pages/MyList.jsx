// import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import SectionContainer from "../4-templates/SectionContainer";
import MovieCard from "../2-molecules/MovieCard";
import MovieDetailModal from "../4-templates/MovieDetailModal";

const MyList = () => {
  // Get state from Redux
  const { allMovies, myMovieList, selectedMovie } = useSelector(
    (state) => state.movies
  );

  const handleMovieClick = (movie) => {
    // This will be handled by Redux if needed
  };

  const handleCloseModal = () => {
    // This will be handled by Redux if needed
  };

  console.log("allMovies:", allMovies);
  console.log("myMovieList:", myMovieList);

  // Split into watched and unwatched
  const watchedList = myMovieList.filter((item) => item.isWatched);
  const unWatchedList = myMovieList.filter((item) => !item.isWatched);
  console.log("unWatchedList", unWatchedList);
  console.log("watchedList", watchedList);

  // get data movies based on id
  // DUGAAN SEMENTARA ERROR KARENA FUNGSI INI
  const getMoviesFromIds = (list) => {
    if (!allMovies || allMovies.length === 0) return [];
    const ids = list.map((item) => item.movieId);
    return allMovies.filter((movie) => ids.includes(movie.id));
  };
  console.log("getMoviesFromIds", getMoviesFromIds(unWatchedList));

  const moviesToWatch = getMoviesFromIds(unWatchedList);
  const moviesWatched = getMoviesFromIds(watchedList);
  console.log("moviesToWatch", moviesToWatch);

  return (
    <main className="flex flex-col flex-wrap w-full min-h-screen pb-15 bg-[#181A1C]">
      {/* <SectionContainer sectionTitle="Daftar Film Saya">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {getMoviesFromIds(unWatchedList).map((movieInList) => (
            <div
              key={movieInList.id}
              onClick={() => handleMovieClick(movieInList)}
            >
              <MovieCard
                movie={movieInList}
                imgSrc={movieInList.poster.portrait}
                movieBadge={true}
              />
            </div>
          ))}
        </div>
      </SectionContainer> */}

      <SectionContainer sectionTitle="Daftar Film Saya">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {moviesToWatch.length > 0 ? (
            moviesToWatch.map((movieInList) => (
              <div
                key={movieInList.id}
                onClick={() => handleMovieClick(movieInList)}
              >
                <MovieCard
                  movie={movieInList}
                  imgSrc={movieInList.poster.portrait} // <-- Pastikan nama prop 'imageSrc'
                  movieBadge={true}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full">
              Daftar tontonan Anda masih kosong.
            </p>
          )}
        </div>
      </SectionContainer>

      {/* Sudah Selesai Menonton */}
      {/* <SectionContainer sectionTitle="Film Sudah Ditonton">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {getMoviesFromIds(watchedList).map((movieInList) => (
            <div
              key={movieInList.id}
              onClick={() => handleMovieClick(movieInList)}
            >
              <MovieCard
                movie={movieInList}
                imgSrc={movieInList.poster.portrait}
                movieBadge={true}
                isWatched={true}
              />
            </div>
          ))}
        </div>
      </SectionContainer> */}

      <SectionContainer sectionTitle="Film Sudah Ditonton">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {moviesWatched.length > 0 ? (
            moviesWatched.map((movieInList) => (
              <div
                key={movieInList.id}
                onClick={() => handleMovieClick(movieInList)}
              >
                <MovieCard
                  movie={movieInList}
                  imgSrc={movieInList.poster.portrait} // <-- Pastikan nama prop 'imageSrc'
                  movieBadge={true}
                  isWatched={true}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full">
              Anda belum menandai film apapun sebagai sudah ditonton.
            </p>
          )}
        </div>
      </SectionContainer>

      {/* Modal Detail Movie */}
      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          allMovies={allMovies}
        />
      )}
      {/* Modal Detail Movie End */}
    </main>
  );
};
export default MyList;
