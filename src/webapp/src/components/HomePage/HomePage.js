import { fetchMovies, setLoading } from 'appSlice';
import LoadingSpinner from 'components/Spinner/LoadingSpinner';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { CardWrapper, MovieCard } from './HomePage.styles';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
	const dispatch = useDispatch();
	const { movies, isLoading } = useSelector(state => state.app);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchMovies());
	}, [dispatch]);

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<CardWrapper>
					{movies.map(movie => (
						<MovieCard key={movie.id}>
							<Card.Img variant='top' src={movie.imgUrl} />
							<Card.Title className='text-center mt-2'>{movie.name}</Card.Title>
							<Button
								variant='primary'
								onClick={() => {
									dispatch(setLoading());

									navigate(`/movies/${movie.id}`);
								}}>
								Kup bilet
							</Button>
						</MovieCard>
					))}
				</CardWrapper>
			)}
		</>
	);
};

export default HomePage;
