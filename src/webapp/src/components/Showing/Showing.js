import { useEffect, useState } from 'react';
import { CinemaWrapper, Screen, Seat, SeatRow, DivSquare, DivSquareWrapper, DivSquareText } from './Showing.styles';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Title, Day, Info } from 'components/MovieDetails/MovieDetails.styles';
import { format } from 'date-fns';
import { Button } from 'react-bootstrap';
import ConfirmModal from 'components/ConfirmModal/ConfirmModal';

const Showing = () => {
	const { showingid } = useParams();
	const [places, setPlaces] = useState([]);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const { movie } = useSelector(state => state.app);

	useEffect(() => {
		let tmp = movie.showings.filter(show => show.id == showingid)[0].places;
		let tmpSort = [...tmp];
		tmpSort.sort((a, b) => {
			return a.placeNumber - b.placeNumber;
		});
		setPlaces(tmpSort);
	}, []);

	const handleSelectSeats = (id, number) => {
		let tmp = [...selectedSeats];
		let tmp_number = [...selectedSeats].map(place => place.number);
		const index = tmp_number.indexOf(number);
		if (index === -1) {
			tmp.push({ id, number });
		} else {
			tmp.splice(index, 1);
		}
		setSelectedSeats(tmp);
	};

	const renderSeats = places => {
		const seats = [];
		const seatsPerRow = 10;
		let counter = 0;
		let rows = places.length / seatsPerRow;
		if (places.length % seatsPerRow !== 0) {
			rows = rows + 1;
		}

		for (let row = 1; row <= rows; row++) {
			const seatRow = [];
			let i = 1;
			while (i <= seatsPerRow && counter <= places.length) {
				const seat = places[counter];
				seatRow.push(
					<Seat
						key={seat.id}
						isTaken={seat.occupied}
						isSelected={selectedSeats.map(seat => seat.number).includes(seat.placeNumber)}
						onClick={seat.occupied ? null : () => handleSelectSeats(seat.id, seat.placeNumber)}>
						{seat.placeNumber}
					</Seat>
				);
				counter++;
				i++;
			}

			seats.push(<SeatRow key={row}>{seatRow}</SeatRow>);
		}
		return seats;
	};

	return (
		<>
			<ConfirmModal
				show={show}
				setShow={setShow}
				handleClose={handleClose}
				selectedSeats={selectedSeats}
				movie={movie}
				showingId={showingid}
			/>
			<CinemaWrapper>
				<Title>{movie.name}</Title>
				<Day>
					{format(new Date(movie.showings.filter(show => show.id == showingid)[0].showingTime), 'd MMMM yyyy, HH:mm')}
				</Day>
				<Screen>Ekran</Screen>
				<DivSquareWrapper>
					<DivSquare color='#757575'></DivSquare>
					<DivSquareText>Zajęte</DivSquareText>
					<DivSquare color='#fff'></DivSquare>
					<DivSquareText>Wybrane</DivSquareText>
					<DivSquare color='#11d853'></DivSquare>
					<DivSquareText>Wolne</DivSquareText>
				</DivSquareWrapper>
				{renderSeats(places)}

				{selectedSeats.length > 0 ? (
					<>
						<Info>
							Wybrane miejsca:{' '}
							{selectedSeats
								.sort((a, b) => {
									return a.number - b.number;
								})
								.map(place => place.number)
								.join(', ')}
						</Info>
						<Info>Koszt zamówienia: {selectedSeats.length * movie.price} PLN</Info>
						{selectedSeats.length > 0 ? (
							<Button variant='success' onClick={() => setShow(true)}>
								Zarezerwuj
							</Button>
						) : null}{' '}
					</>
				) : null}
			</CinemaWrapper>
		</>
	);
};

export default Showing;
