import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	movies: [],
	isLoading: false,
	error: null,
	movie: null,
	user: null,
	reservation: null,
	userReservations: []
};

export const fetchMovies = createAsyncThunk('app/fetchMovies', async () => {
	const res = await axios('/movies');
	const data = await res.data;
	return data;
});

export const fetchMovieDetails = createAsyncThunk('app/fetchMovieDetails', async id => {
	const res = await axios(`/movies/${id}`);
	const data = await res.data;
	return data;
});

export const fetchLogin = createAsyncThunk('app/fetchLogin', async loginForm => {
	const res = await axios.post('/auth/signin', {
		email: loginForm.email,
		password: loginForm.password
	});
	const data = await res.data;
	const token = data.token;

	const res2 = await axios.get('/auth/me', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
	const data2 = await res2.data;
	return {
		token: token,
		email: data2.email
	};
});

export const fetchSignUp = createAsyncThunk('app/fetchSignUp', async signUpForm => {
	const res = await axios.post('/auth/signup', {
		email: signUpForm.email,
		password: signUpForm.password
	});
	const data = await res.data;
	return data;
});

export const fetchAddReservation = createAsyncThunk('app/fetchAddReservation', async confirmData => {
	const res = await axios.post('/reservations', {
		showingId: confirmData.showingId,
		email: confirmData.confirmData.email,
		phoneNumber: confirmData.confirmData.phoneNumber,
		placesList: confirmData.selectedSeats.map(seat => seat.id)
	});
	const data = await res.data;
	return data;
});

export const fetchUserReservation = createAsyncThunk('app/fetchUserReservation', async email => {
	const res = await axios(`/reservations-by-email/${email}`);
	const data = await res.data;
	return data;
});

export const fetchReservationCancel = createAsyncThunk('app/fetchReservationCancel', async id => {
	await axios.delete(`/reservations/${id}`);

	return id;
});

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLoading(state) {
			state.isLoading = true;
		},
		logout(state) {
			state.user = null;
			state.isLoading = false;
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchMovies.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchMovies.fulfilled, (state, action) => {
			state.isLoading = false;
			state.movies = action.payload;
		});
		builder.addCase(fetchMovies.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
		builder.addCase(fetchMovieDetails.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
			state.isLoading = false;
			state.movie = action.payload;
		});
		builder.addCase(fetchMovieDetails.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
		builder.addCase(fetchLogin.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchLogin.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
		});
		builder.addCase(fetchLogin.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
		builder.addCase(fetchSignUp.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchSignUp.fulfilled, (state, action) => {
			state.isLoading = false;
		});
		builder.addCase(fetchSignUp.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
		builder.addCase(fetchAddReservation.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchAddReservation.fulfilled, (state, action) => {
			state.isLoading = false;
			console.log(action.payload);
			state.reservation = action.payload;
		});
		builder.addCase(fetchAddReservation.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
		builder.addCase(fetchUserReservation.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchUserReservation.fulfilled, (state, action) => {
			state.isLoading = false;
			state.userReservations = action.payload;
		});
		builder.addCase(fetchUserReservation.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
		builder.addCase(fetchReservationCancel.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchReservationCancel.fulfilled, (state, action) => {
			state.isLoading = false;
		});
		builder.addCase(fetchReservationCancel.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
	}
});
export const { setLoading, logout } = appSlice.actions;
export default appSlice.reducer;
