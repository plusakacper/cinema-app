import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Wrapper, ButtonWrapper } from './LoginPane.styles';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchLogin, setLoading } from 'appSlice';

const LoginPane = () => {
	const [loginData, setLoginData] = useState({ email: '', password: '' });
	const [formError, setFormError] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleForm = e => {
		let tmp = { ...loginData };
		tmp[e.target.id] = e.target.value;
		setLoginData(tmp);
	};

	const handleLogin = e => {
		e.preventDefault();
		if (loginData.email.length > 0 && loginData.password.length > 0) {
			dispatch(setLoading());
			dispatch(fetchLogin(loginData));
			navigate('/');
		} else {
			setFormError('Musisz uzpełnić pola!');
		}
	};

	return (
		<Wrapper>
			<Form onSubmit={e => handleLogin(e)}>
				<Form.Group className='mb-3' controlId='email'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' value={loginData.email} onChange={e => handleForm(e)} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={loginData.password}
						onChange={e => handleForm(e)}
					/>
				</Form.Group>
				<ButtonWrapper>
					<Link to='/signup'>Nie masz konta, stwórz je!</Link>
					<Button variant='success' type='submit'>
						Zaloguj
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

export default LoginPane;
