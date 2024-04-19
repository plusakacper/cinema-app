import HomePage from 'components/HomePage/HomePage';
import LoginPane from 'components/LoginPane/LoginPane';
import MainTemplate from 'components/MainTemplate/MainTemplate';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import RegistrationPane from 'components/RegistrationPane/RegistrationPane';
import ReservationInfo from 'components/ReservationInfo/ReservationInfo';
import Showing from 'components/Showing/Showing';
import UserReservation from 'components/UserReservation/UserReservation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<MainTemplate>
							<HomePage />
						</MainTemplate>
					}
				/>
				<Route
					path='/movies/:id'
					element={
						<MainTemplate>
							<MovieDetails />
						</MainTemplate>
					}
				/>
				<Route
					path='/movies/:movieid/showing/:showingid'
					element={
						<MainTemplate>
							<Showing />
						</MainTemplate>
					}
				/>
				<Route
					path='/login'
					element={
						<MainTemplate>
							<LoginPane />
						</MainTemplate>
					}
				/>
				<Route
					path='/signup'
					element={
						<MainTemplate>
							<RegistrationPane />
						</MainTemplate>
					}
				/>
				<Route
					path='/reservation-info'
					element={
						<MainTemplate>
							<ReservationInfo />
						</MainTemplate>
					}
				/>
				<Route
					path='/user-reservation'
					element={
						<MainTemplate>
							<UserReservation />
						</MainTemplate>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
