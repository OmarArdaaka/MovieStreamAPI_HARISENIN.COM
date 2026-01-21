import { useMemo } from "react";
import { Navigation, A11y } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "../2-molecules/MovieCard";

const MovieListPortrait = ({
  sectionTitle,
  movies,
  filterType,
  movieBadge,
  movieInfo,
  onMovieClick,
}) => {
  // Gunakan useMemo agar proses filter & sort tidak berjalan di setiap render
  const processedMovies = useMemo(() => {
    let result = [...movies];

    switch (filterType) {
      // Filter film dengan badge "none" ATAU "newEpisode"
      case "top-rated":
        result = result.filter(
          (movie) => movie.badge === "none" || movie.badge === "newEpsiode"
        );
        break;
      // Filter film dengan badge "trending"
      case "trending":
        result = result.filter((movie) => movie.badge === "trending");
        break;
      // Urutkan dari tanggal rilis terbaru
      case "new-release":
        result.sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
        );
        break;
      // Jika tidak ada filter, tampilkan semua
      default:
        break;
    }
    return result;
  }, [movies, filterType]); // Proses ulang hanya jika movies atau filterType berubah

  return (
    <section className="film-slider-section w-full pl-5 pr-0 lg:px-[80px] relative">
      <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">
        {sectionTitle}
      </h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={"auto"}
        loop={processedMovies.length > 5} //aktifkan loop, jika item > 5
        navigation={{
          nextEl: `.swiper-button-next-custom-${filterType}`,
          prevEl: `.swiper-button-prev-custom-${filterType}`,
        }}
        grabCursor={true}
        breakpoints={{
          // Konfigurasi responsif
          320: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
          // saat layar >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // saat layar >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {processedMovies.map((movie) => (
          <SwiperSlide key={movie.id} className="h-auto">
            <MovieCard
              movie={movie}
              imgSrc={movie.poster.portrait}
              movieBadge={movieBadge}
              movieInfo={movieInfo}
              onClick={() => onMovieClick(movie)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tombol prev dan next */}
      {/* Tombol Prev */}
      <div
        className={`swiper-button-prev-custom-${filterType} hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] left-2 lg:left-15 -translate-y-1/2 z-10`}
      >
        <FaArrowLeft />
      </div>
      {/* Tombol Next */}
      <div
        className={`swiper-button-next-custom-${filterType} hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] right-2 lg:right-15 -translate-y-1/2 z-10`}
      >
        <FaArrowRight />
      </div>
    </section>
  );
};

export default MovieListPortrait;
