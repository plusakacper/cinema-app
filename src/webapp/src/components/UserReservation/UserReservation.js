import { fetchReservationCancel, fetchUserReservation } from 'appSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import { Wrapper } from './UserReservation.styles';
import { useNavigate } from 'react-router-dom';

const UserReservation = () => {
	const dispatch = useDispatch();
	const currentDateTime = new Date();
	const { userReservations, user } = useSelector(state => state.app);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/');
		}
		dispatch(fetchUserReservation(user.email));
	}, []);

	return (
		userReservations && (
			<Wrapper>
				{userReservations.map(reservation => (
					<Card className='m-3' key={reservation.id}>
						<Card.Header>Numer rezerwacji: {reservation.id}</Card.Header>
						<Card.Body>
							<Card.Title>{reservation.movieName}</Card.Title>
							<Card.Text>{format(new Date(reservation.showingTime), 'd MMMM yyyy, HH:mm')}</Card.Text>
							<Card.Text>Wybrane miejsca: {reservation.places.join(', ')}</Card.Text>
							<Card.Text>Do zapłaty: {reservation.price}</Card.Text>
							{new Date(reservation.showingTime) > currentDateTime ? (
								<Button
									variant='danger'
									onClick={() => {
										dispatch(fetchReservationCancel(reservation.id));
										navigate('/');
									}}>
									Anuluj
								</Button>
							) : null}
						</Card.Body>
					</Card>
				))}
			</Wrapper>
		)
	);
};

export default UserReservation;
