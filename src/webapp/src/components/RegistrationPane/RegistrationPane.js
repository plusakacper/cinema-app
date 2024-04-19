import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Wrapper, ButtonWrapper } from './RegistrationPane.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSignUp, setLoading } from 'appSlice';

const RegistrationPane = () => {
	const [signUp, setSignUp] = useState({ email: '', password: '' });
	const [formError, setFormError] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleForm = e => {
		let tmp = { ...signUp };
		tmp[e.target.id] = e.target.value;
		setSignUp(tmp);
	};

	const handleSignUp = e => {
		e.preventDefault();
		if (signUp.email.length > 0 && signUp.password.length > 0) {
			dispatch(setLoading());
			dispatch(fetchSignUp(signUp));
			navigate('/login');
		} else {
			setFormError('Musisz uzpełnić pola!');
		}
	};

	return (
		<Wrapper>
			<Form onSubmit={e => handleSignUp(e)}>
				<Form.Group className='mb-3' controlId='email'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' value={signUp.email} onChange={e => handleForm(e)} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter passwpord'
						value={signUp.password}
						onChange={e => handleForm(e)}
					/>
				</Form.Group>
				<ButtonWrapper>
					<Button variant='success' type='submit'>
						Stwórz konto
					</Button>
				</ButtonWrapper>
				{formError && (
					<Alert className='m-3' variant='danger'>
						{formError}
					</Alert>
				)}
			</Form>
		</Wrapper>
	);
};

export default RegistrationPane;
