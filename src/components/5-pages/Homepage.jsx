// import { useOutletContext } from "react-router-dom";
import { useMovieStore } from "../../store/movieStore.js";

// Import component
import Button from "../1-atoms/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiSpeakerSlash } from "react-icons/pi";
// Component
import MovieListPortrait from "../4-templates/MovieListPortrait";
import MovieListLandscape from "../4-templates/MovieListLandscape";
import MovieDetailModal from "../4-templates/MovieDetailModal";

// Import Data Movies
// import { allMovies } from "../../data/movies.js";

const Homepage = () => {
  // Get state and action from useMovieStore
  const { allMovies, selectedMovie, handleMovieClick, handleCloseModal } =
    useMovieStore();

  return (
    <main className="flex flex-col flex-wrap w-full bg-[#181A1C] gap-15 min-h-screen pb-25">
      {/* Hero Section */}
      <section className="hero-section w-full h-[360px] lg:h-[587px] flex justify-center align-center relative gap-4">
        <img
          className="hero-image w-full  object-cover"
          src="/img/bg/hero5.png"
          alt=""
        />
        <div className="gradient-overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-[#181A1C] z-10"></div>
        <div className="hero-text text-white absolute top-8 left-0 bottom-0 z-20 w-full h-full flex flex-col justify-center items-start gap-6 px-5 py-2 lg:px-[80px] lg:py-[25px]">
          <div className="hero-text flex flex-col gap-[12px] lg:gap-[20px]">
            <h1 className="hero-title text-[24px] lg:text-[48px] font-bold">
              Lion King : King of Pride Rock
            </h1>
            <p className="hero-description text-[12px] lg:text-[18px] font-medium line-clamp-3 lg:w-4xl">
              Film ini mengisahkan perjalanan Simba, seekor anak singa yang akan menjadi penerus takhta ayahnya, Mufasa. Namun, setelah pamannya yang jahat, Scar, membunuh Mufasa dan merebut takhta, Simba diusir dari kerajaannya. Dengan bantuan teman-temannya, Timon dan Pumbaa, Simba harus menemukan jati dirinya dan kembali untuk merebut kembali tempat yang seharusnya menjadi miliknya di Pride Rock.
            </p>
          </div>
          <div className="hero-button flex flex-row w-full justify-between items-center">
            <div className="button-left flex flex-row gap-2">
              <Button type="button" variant="primary">
                Mulai
              </Button>
              <Button
                type="button"
                variant="secondary"
                iconLeft={<IoMdInformationCircleOutline />}
              >Selengkapnya
              </Button>
              <Button type="button" variant="outlined">
                13+
              </Button>
            </div>
            <div className="button-right">
              <Button type="button" variant="outlined">
                <PiSpeakerSlash />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Film Section */}
      <section className="film-section w-full flex flex-col gap-10">
        {/* Film Slider Landscape 1 */}
        <MovieListLandscape
          sectionTitle="Melanjutkan Tonton Film"
          movies={allMovies}
          filterType="top-rated"
          movieInfo={true}
          onMovieClick={handleMovieClick}
        />
        {/* Film Slider Landscape 1 End */}

        {/* Top Rating*/}
        <MovieListPortrait
          sectionTitle="Top Rating Film dan Series Hari Ini"
          movies={allMovies}
          filterType=""
          movieBadge={true}
          onMovieClick={handleMovieClick}
        />
        {/* Top Rating End */}

        {/* Trending */}
        <MovieListPortrait
          sectionTitle="Film Trending"
          movies={allMovies}
          filterType="trending"
          movieBadge={true}
          onMovieClick={handleMovieClick}
        />

        {/* New Release */}
        <MovieListPortrait
          sectionTitle="Rilis Baru"
          movies={allMovies}
          filterType="new-release"
          movieBadge={true}
          onMovieClick={handleMovieClick}
        />
      </section>
      {/* Film Section End */}

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

export default Homepage;
