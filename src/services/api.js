import { allMovies } from "../data/movies";

// Simulasi database MyList (disimpan di localStorage)
const MYLIST_STORAGE_KEY = "myList";

// Helper: Dapatkan MyList dari localStorage
const getMyListFromStorage = () => {
  const stored = localStorage.getItem(MYLIST_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Helper: Simpan MyList ke localStorage
const saveMyListToStorage = (list) => {
  localStorage.setItem(MYLIST_STORAGE_KEY, JSON.stringify(list));
};

// --- Get All Movies Data Function ---
export const getMovies = async () => {
  try {
    // Simulasi delay API
    await new Promise((resolve) => setTimeout(resolve, 300));
    return allMovies;
  } catch (error) {
    console.log("Gagal mengambil data film dari API:", error);
    throw error;
  }
};
// --- Get Movies Data End ---

// --- MyList Function ---
// Get Data MyList
export const getMyList = async () => {
  try {
    // Simulasi delay API
    await new Promise((resolve) => setTimeout(resolve, 300));
    return getMyListFromStorage();
  } catch (error) {
    console.log("Gagal mengambil data MyList:", error);
    throw error;
  }
};

// Create Data MyList
export const addMovieToList = async (movie) => {
  try {
    // Simulasi delay API
    await new Promise((resolve) => setTimeout(resolve, 300));
    const myList = getMyListFromStorage();
    const newItem = {
      id: Date.now(), // Generate ID unik
      movieId: movie.id, // Use movie.id from the movie object
      watched: false,
      createdAt: new Date().toISOString(),
    };
    myList.push(newItem);
    saveMyListToStorage(myList);
    return newItem;
  } catch (error) {
    console.log("gagal menambahkan ke MyList:", error);
    throw error;
  }
};

// Update Data isWatched status
export const updateWatchedStatus = async (movieId, watched) => {
  try {
    // Simulasi delay API
    await new Promise((resolve) => setTimeout(resolve, 300));
    const myList = getMyListFromStorage();
    const index = myList.findIndex((item) => item.movieId === movieId);
    if (index !== -1) {
      myList[index].watched = watched;
      saveMyListToStorage(myList);
      return myList[index];
    }
    throw new Error(`Movie with movieId ${movieId} tidak ditemukan`);
  } catch (error) {
    console.log(`Gagal memperbarui status movie ${movieId}:`, error);
    throw error;
  }
};

// Delete movie from MyList
export const removeMovieFromList = async (movieId) => {
  try {
    // Simulasi delay API
    await new Promise((resolve) => setTimeout(resolve, 300));
    const myList = getMyListFromStorage();
    const filteredList = myList.filter((item) => item.movieId !== movieId);
    saveMyListToStorage(filteredList);
    return { success: true };
  } catch (error) {
    console.log(`Gagal menghapus movie ${movieId}`, error);
    throw error;
  }
};
