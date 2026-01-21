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
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies, fetchMyList } from "./store/redux/slices/movieSlice.js";

function App() {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state.movies);

  // Get data on first load
  useEffect(() => {
    dispatch(fetchAllMovies());
    dispatch(fetchMyList());
  }, [dispatch]);

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
