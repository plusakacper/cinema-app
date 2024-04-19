import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Info } from './Confirm.styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddReservation, setLoading } from 'appSlice';

const ConfirmModal = ({ show, handleClose, selectedSeats, movie, showingId }) => {
	const [formError, setFormError] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.app);
	const [confirmData, setConfirmData] = useState({ email: user ? user.email : '', phoneNumber: '' });

	const handleForm = e => {
		let tmp = { ...confirmData };
		tmp[e.target.id] = e.target.value;
		setConfirmData(tmp);
	};

	const handleSubmit = e => {
		if (confirmData.email.length > 0 && confirmData.phoneNumber.length > 0) {
			dispatch(setLoading());
			dispatch(fetchAddReservation({ confirmData, showingId, selectedSeats }));
			navigate('/reservation-info');
		} else {
			setFormError('Musisz uzpełnić pola!');
		}
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Potwierdź rezerwacje</Modal.Title>
				</Modal.Header>
				<Modal.Body>
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
					</>
					<Form>
						<Form.Group className='mb-3' controlId='email'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								value={confirmData.email}
								onChange={e => handleForm(e)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='phoneNumber'>
							<Form.Label>Numer telefonu</Form.Label>
							<Form.Control
								type='tel'
								placeholder='Enter phone number'
								value={confirmData.phoneNumber}
								onChange={e => handleForm(e)}
							/>
						</Form.Group>
						{formError && (
							<Alert className='m-3' variant='danger'>
								{formError}
							</Alert>
						)}
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='danger' onClick={handleClose}>
						Anuluj
					</Button>
					<Button variant='success' onClick={() => handleSubmit()}>
						Potwierdź
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ConfirmModal;
