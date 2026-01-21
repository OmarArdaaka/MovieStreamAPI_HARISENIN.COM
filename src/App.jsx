import { Routes, Route } from "react-router";
import { useEffect } from "react";
import WrapPage from "./WrapPage.jsx";
import Homepage from "./components/5-pages/Homepage.jsx";
import Login from "./components/5-pages/Login.jsx";
import Register from "./components/5-pages/Register.jsx";
import Series from "./components/5-pages/Series.jsx";
import Film from "./components/5-pages/Film.jsx";
import MyList from "./components/5-pages/MyList.jsx";
import MyProfile from "./components/5-pages/MyProfile.jsx";
import AddMoviePage from "./components/5-pages/AddMoviePage.jsx";
import Toast from "./components/1-atoms/Toast.jsx";
// import LoadingSpinner from "./components/1-atoms/LoadingSpinner.jsx";
// import ErrorMessage from "./components/1-atoms/ErrorMessage.jsx";

// import data
// import { allMovies } from "./data/movies.js";
// import { getMovies } from "./services/api.js";

// Import Store
import { useMovieStore } from "./store/movieStore.js";

function App() {
  // Get state and action yang relevan dari store
  const { fetchAllMovies, notification, fetchMyList } = useMovieStore();

  // Get data on first load
  useEffect(() => {
    fetchAllMovies();
    fetchMyList();
  }, [fetchAllMovies, fetchMyList]);

  return (
    <>
      <Routes>
        <Route path="/" element={<WrapPage />}>
          <Route index element={<Homepage />} />
          <Route path="series" element={<Series />} />
          <Route path="film" element={<Film />} />
          <Route path="mylist" element={<MyList />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="add-movie" element={<AddMoviePage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toast
        isVisible={notification.isVisible}
        message={notification.message}
        type={notification.type}
      />
    </>
  );
}

export default App;
