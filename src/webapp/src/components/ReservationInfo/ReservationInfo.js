import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Wrapper } from './ReservationInfo.styles';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const ReservationInfo = () => {
	const navigate = useNavigate();
	const { reservation } = useSelector(state => state.app);

	return (
		reservation && (
			<Wrapper>
				<Card>
					<Card.Header>Numer rezerwacji: {reservation.id}</Card.Header>
					<Card.Body>
						<Card.Title>{reservation.movieName}</Card.Title>
						<Card.Text>{format(new Date(reservation.showingTime), 'd MMMM yyyy, HH:mm')}</Card.Text>
						<Card.Text>Wybrane miejsca: {reservation.places.join(', ')}</Card.Text>
						<Card.Text>Do zapłaty: {reservation.price}</Card.Text>
						<Button variant='primary' onClick={() => navigate('/')}>
							Powrót do strony głównej
						</Button>
					</Card.Body>
				</Card>
			</Wrapper>
		)
	);
};

export default ReservationInfo;
