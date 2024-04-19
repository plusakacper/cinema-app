import { fetchMovieDetails, setLoading } from 'appSlice';
import LoadingSpinner from 'components/Spinner/LoadingSpinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Info, Title, Wrapper, StyledSquare, StyledSquareWrapper, Day } from './MovieDetails.styles';
import { Image } from 'react-bootstrap';
import { format } from 'date-fns';

const MovieDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { movie, isLoading } = useSelector(state => state.app);
	let eventsByDay = null;

	useEffect(() => {
		dispatch(fetchMovieDetails(id));
	}, [dispatch, id]);

	const groupShowingsByDay = events => {
		return events.reduce((acc, event) => {
			const eventDate = new Date(event.showingTime).toLocaleDateString();
			if (acc[eventDate]) {
				acc[eventDate].push(event);
			} else {
				acc[eventDate] = [event];
			}
			return acc;
		}, {});
	};

	if (movie) {
		eventsByDay = groupShowingsByDay(movie.showings);
	}

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<Wrapper>
					<Image src={movie.imgUrl} />
					<Title>{movie.name}</Title>
					<Info>Cena biletu: {movie.price} PLN</Info>
					<Info>Dostępne seanse</Info>
					<div>
						{Object.entries(eventsByDay).map(([date, events]) => (
							<div key={date}>
								<Day>{date}</Day>
								<StyledSquareWrapper>
									{events.map(event => (
										<StyledSquare
											key={event.id}
											onClick={() => {
												dispatch(setLoading());
												navigate(`/movies/${movie.id}/showing/${event.id}`);
											}}>
											{format(new Date(event.showingTime), 'HH:mm')}
										</StyledSquare>
									))}
								</StyledSquareWrapper>
							</div>
						))}
					</div>
				</Wrapper>
			)}
		</>
	);
};

export default MovieDetails;
