import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllMovies,
  addMovieAsync,
  editMovieAsync,
  deleteMovieAsync,
  showNotification,
  hideNotification,
} from "../../store/redux/slices/movieSlice";
import InputForm from "../2-molecules/InputForm";
import Button from "../1-atoms/Button";
import SectionContainer from "../4-templates/SectionContainer";
import Toast from "../1-atoms/Toast";

const AddMoviePage = () => {
  // Get dispatch dan data dari Redux
  const dispatch = useDispatch();
  const { allMovies, notification, loading } = useSelector(
    (state) => state.movies
  );

  // Local state untuk form
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    synopsis: "",
    genre: "",
    rating: "0/5",
    duration: "0m",
    releaseDate: "",
    director: "",
    cast: "",
    ageRating: "PG",
  });

  const [isEditMode, setIsEditMode] = useState(false);

  // Fetch movies saat component mount
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle ADD MOVIE
  const handleAddMovie = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      dispatch(
        showNotification({
          message: "Judul film harus diisi",
          type: "error",
        })
      );
      return;
    }

    const newMovie = {
      ...formData,
      poster: {
        portrait: "/img/poster/portrait/default.png",
        landscape: "/img/poster/landscape/default.png",
      },
      badge: "none",
    };

    // Dispatch action ADD
    dispatch(addMovieAsync(newMovie));

    // Reset form
    setFormData({
      id: null,
      title: "",
      synopsis: "",
      genre: "",
      rating: "0/5",
      duration: "0m",
      releaseDate: "",
      director: "",
      cast: "",
      ageRating: "PG",
    });

    // Hide notification after 3 seconds
    setTimeout(() => {
      dispatch(hideNotification());
    }, 3000);
  };

  // Handle SELECT MOVIE untuk EDIT
  const handleSelectMovieForEdit = (movieId) => {
    const selectedMovie = allMovies.find((movie) => movie.id === movieId);
    if (selectedMovie) {
      setFormData({
        id: selectedMovie.id,
        title: selectedMovie.title,
        synopsis: selectedMovie.synopsis,
        genre: selectedMovie.genre,
        rating: selectedMovie.rating,
        duration: selectedMovie.duration,
        releaseDate: selectedMovie.releaseDate,
        director: selectedMovie.director,
        cast: selectedMovie.cast,
        ageRating: selectedMovie.ageRating,
      });
      setIsEditMode(true);
    }
  };

  // Handle EDIT MOVIE
  const handleEditMovie = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      dispatch(
        showNotification({
          message: "Judul film harus diisi",
          type: "error",
        })
      );
      return;
    }

    const updatedMovie = {
      ...formData,
      poster: {
        portrait: "/img/poster/portrait/default.png",
        landscape: "/img/poster/landscape/default.png",
      },
    };

    // Dispatch action EDIT
    dispatch(
      editMovieAsync({
        movieId: formData.id,
        updatedData: updatedMovie,
      })
    );

    // Reset form
    setFormData({
      id: null,
      title: "",
      synopsis: "",
      genre: "",
      rating: "0/5",
      duration: "0m",
      releaseDate: "",
      director: "",
      cast: "",
      ageRating: "PG",
    });
    setIsEditMode(false);

    // Hide notification after 3 seconds
    setTimeout(() => {
      dispatch(hideNotification());
    }, 3000);
  };

  // Handle DELETE MOVIE
  const handleDeleteMovie = (movieId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus film ini?")) {
      // Dispatch action DELETE
      dispatch(deleteMovieAsync(movieId));

      // Reset form
      setFormData({
        id: null,
        title: "",
        synopsis: "",
        genre: "",
        rating: "0/5",
        duration: "0m",
        releaseDate: "",
        director: "",
        cast: "",
        ageRating: "PG",
      });
      setIsEditMode(false);

      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
    }
  };

  // Handle CANCEL EDIT
  const handleCancelEdit = () => {
    setFormData({
      id: null,
      title: "",
      synopsis: "",
      genre: "",
      rating: "0/5",
      duration: "0m",
      releaseDate: "",
      director: "",
      cast: "",
      ageRating: "PG",
    });
    setIsEditMode(false);
  };

  return (
    <main className="flex flex-col flex-wrap w-full bg-[#181A1C] gap-6 min-h-screen pb-25 px-5 lg:px-[80px]">
      {/* Notification Toast */}
      {notification.isVisible && (
        <Toast message={notification.message} type={notification.type} />
      )}

      {/* FORM SECTION */}
      <SectionContainer
        sectionTitle={
          isEditMode ? "Edit Data Film" : "Tambah Data Film Baru"
        }
      >
        <form
          onSubmit={isEditMode ? handleEditMovie : handleAddMovie}
          className="flex flex-col gap-4"
        >
          <InputForm
            label="Judul Film"
            type="text"
            placeholder="Masukkan judul film"
            id="movie-title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <InputForm
            label="Sinopsis"
            type="text"
            placeholder="Masukkan sinopsis film"
            id="movie-sinopsis"
            name="synopsis"
            value={formData.synopsis}
            onChange={handleInputChange}
          />
          <InputForm
            label="Genre"
            type="text"
            placeholder="Contoh: Action, Drama, etc"
            id="movie-genre"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          />
          <InputForm
            label="Rating"
            type="text"
            placeholder="Contoh: 4.5/5"
            id="movie-rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
          />
          <InputForm
            label="Durasi"
            type="text"
            placeholder="Contoh: 2j 30m"
            id="movie-duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          />
          <InputForm
            label="Tanggal Rilis"
            type="date"
            id="movie-release"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleInputChange}
          />
          <InputForm
            label="Direktur"
            type="text"
            placeholder="Nama direktur"
            id="movie-director"
            name="director"
            value={formData.director}
            onChange={handleInputChange}
          />
          <InputForm
            label="Pemeran"
            type="text"
            placeholder="Nama pemeran utama"
            id="movie-cast"
            name="cast"
            value={formData.cast}
            onChange={handleInputChange}
          />

          <div className="flex gap-3 pt-4">
            <Button type="submit" variant="primary">
              {loading
                ? "Memproses..."
                : isEditMode
                ? "Simpan Perubahan"
                : "Tambah Film"}
            </Button>
            {isEditMode && (
              <Button
                type="button"
                variant="outlined"
                onClick={handleCancelEdit}
              >
                Batal
              </Button>
            )}
          </div>
        </form>
      </SectionContainer>

      {/* DAFTAR FILM SECTION */}
      <SectionContainer sectionTitle="Daftar Film">
        <div className="overflow-x-auto">
          <table className="w-full text-white text-sm">
            <thead className="bg-[#2F3334] rounded-lg">
              <tr>
                <th className="px-4 py-3 text-left">No</th>
                <th className="px-4 py-3 text-left">Judul</th>
                <th className="px-4 py-3 text-left">Rating</th>
                <th className="px-4 py-3 text-left">Durasi</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {allMovies.length > 0 ? (
                allMovies.map((movie, index) => (
                  <tr
                    key={movie.id}
                    className="border-b border-[#3D4142] hover:bg-[#2F3334] transition"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 line-clamp-1">{movie.title}</td>
                    <td className="px-4 py-3">{movie.rating}</td>
                    <td className="px-4 py-3">{movie.duration}</td>
                    <td className="px-4 py-3 flex gap-2 justify-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => handleSelectMovieForEdit(movie.id)}
                        className="px-3 py-1 text-xs"
                      >
                        Edit
                      </Button>
                      <Button
                        type="button"
                        variant="outlined"
                        onClick={() => handleDeleteMovie(movie.id)}
                        className="px-3 py-1 text-xs"
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-6 text-center text-white/60">
                    Tidak ada data film
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </SectionContainer>
    </main>
  );
};

export default AddMoviePage;
