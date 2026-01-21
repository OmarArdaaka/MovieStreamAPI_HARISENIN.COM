import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMovies,
  getMyList,
  addMovieToList,
  removeMovieFromList,
  updateWatchedStatus,
} from "../../../services/api.js";

// Initial state
const initialState = {
  allMovies: [],
  myMovieList: [],
  selectedMovie: null,
  loading: true,
  error: null,
  notification: { isVisible: false, message: "", type: "success" },
};

// Async thunks
export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async (_, { rejectWithValue }) => {
    try {
      const movies = await getMovies();
      return movies;
    } catch (err) {
      return rejectWithValue("Gagal memuat data film.");
    }
  }
);

export const fetchMyList = createAsyncThunk(
  "movies/fetchMyList",
  async (_, { rejectWithValue }) => {
    try {
      const list = await getMyList();
      return list;
    } catch (err) {
      return rejectWithValue("Gagal memuat MyList");
    }
  }
);

export const addToMyListAsync = createAsyncThunk(
  "movies/addToMyList",
  async (movie, { rejectWithValue }) => {
    try {
      const result = await addMovieToList(movie);
      return result;
    } catch (err) {
      return rejectWithValue("Gagal menambah film ke MyList");
    }
  }
);

export const removeFromMyListAsync = createAsyncThunk(
  "movies/removeFromMyList",
  async (movieId, { rejectWithValue }) => {
    try {
      await removeMovieFromList(movieId);
      return movieId;
    } catch (err) {
      return rejectWithValue("Gagal menghapus film dari MyList");
    }
  }
);

export const updateWatchedStatusAsync = createAsyncThunk(
  "movies/updateWatchedStatus",
  async ({ movieId, watched }, { rejectWithValue }) => {
    try {
      const result = await updateWatchedStatus(movieId, watched);
      return result;
    } catch (err) {
      return rejectWithValue("Gagal update status ditonton");
    }
  }
);

// ADD MOVIE (Create)
export const addMovieAsync = createAsyncThunk(
  "movies/addMovie",
  async (newMovie, { rejectWithValue, getState }) => {
    try {
      // Simulate API call untuk add movie
      await new Promise((resolve) => setTimeout(resolve, 300));

      const state = getState();
      const allMovies = state.movies.allMovies;
      const movieWithId = {
        ...newMovie,
        id: allMovies.length > 0 ? Math.max(...allMovies.map(m => m.id)) + 1 : 1, // Generate ID baru
      };

      // Di real app, kirim ke API backend
      // const result = await createMovie(movieWithId);

      return movieWithId;
    } catch (err) {
      return rejectWithValue("Gagal menambah film baru");
    }
  }
);

// DELETE MOVIE (Delete)
export const deleteMovieAsync = createAsyncThunk(
  "movies/deleteMovie",
  async (movieId, { rejectWithValue }) => {
    try {
      // Simulate API call untuk delete movie
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      // Di real app, kirim ke API backend
      // await deleteMovie(movieId);
      
      return movieId;
    } catch (err) {
      return rejectWithValue("Gagal menghapus film");
    }
  }
);

// EDIT MOVIE (Update)
export const editMovieAsync = createAsyncThunk(
  "movies/editMovie",
  async ({ movieId, updatedData }, { rejectWithValue }) => {
    try {
      // Simulate API call untuk edit movie
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      const movieToUpdate = {
        ...updatedData,
        id: movieId,
      };
      
      // Di real app, kirim ke API backend
      // const result = await updateMovie(movieId, updatedData);
      
      return movieToUpdate;
    } catch (err) {
      return rejectWithValue("Gagal mengubah film");
    }
  }
);

// Create slice
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // Action synchronous
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
    showNotification: (state, action) => {
      state.notification = {
        isVisible: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    hideNotification: (state) => {
      state.notification = { isVisible: false, message: "", type: "success" };
    },
  },
  extraReducers: (builder) => {
    // Fetch All Movies
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.allMovies = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Fetch MyList
    builder
      .addCase(fetchMyList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyList.fulfilled, (state, action) => {
        state.loading = false;
        state.myMovieList = action.payload;
      })
      .addCase(fetchMyList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Add to MyList
    builder
      .addCase(addToMyListAsync.fulfilled, (state, action) => {
        if (!state.myMovieList.find((item) => item.movieId === action.payload.movieId)) {
          state.myMovieList.push(action.payload);
        }
      })
      .addCase(addToMyListAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    // Remove from MyList
    builder
      .addCase(removeFromMyListAsync.fulfilled, (state, action) => {
        state.myMovieList = state.myMovieList.filter(
          (item) => item.movieId !== action.payload
        );
      })
      .addCase(removeFromMyListAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    // Update Watched Status
    builder
      .addCase(updateWatchedStatusAsync.fulfilled, (state, action) => {
        const movie = state.myMovieList.find(
          (item) => item.movieId === action.payload.movieId
        );
        if (movie) {
          movie.watched = action.payload.watched;
        }
      })
      .addCase(updateWatchedStatusAsync.rejected, (state, action) => {
        state.error = action.payload;
      });

    // ADD MOVIE (Create)
    builder
      .addCase(addMovieAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMovieAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allMovies.push(action.payload);
        state.notification = {
          isVisible: true,
          message: "Film berhasil ditambahkan",
          type: "success",
        };
      })
      .addCase(addMovieAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.notification = {
          isVisible: true,
          message: action.payload,
          type: "error",
        };
      });

    // EDIT MOVIE (Update)
    builder
      .addCase(editMovieAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editMovieAsync.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.allMovies.findIndex(
          (movie) => movie.id === action.payload.id
        );
        if (index !== -1) {
          state.allMovies[index] = action.payload;
        }
        state.notification = {
          isVisible: true,
          message: "Film berhasil diubah",
          type: "success",
        };
      })
      .addCase(editMovieAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.notification = {
          isVisible: true,
          message: action.payload,
          type: "error",
        };
      });

    // DELETE MOVIE (Delete)
    builder
      .addCase(deleteMovieAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMovieAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allMovies = state.allMovies.filter(
          (movie) => movie.id !== action.payload
        );
        state.notification = {
          isVisible: true,
          message: "Film berhasil dihapus",
          type: "success",
        };
      })
      .addCase(deleteMovieAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.notification = {
          isVisible: true,
          message: action.payload,
          type: "error",
        };
      });
  },
});

export const {
  setSelectedMovie,
  clearSelectedMovie,
  showNotification,
  hideNotification,
} = movieSlice.actions;

export default movieSlice.reducer;
