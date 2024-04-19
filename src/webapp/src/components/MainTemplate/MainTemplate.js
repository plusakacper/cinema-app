import { Button } from 'react-bootstrap';
import { MainWrapper } from './MainTemplate.styles';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, setLoading } from 'appSlice';
import { Username } from './MainTemplate.styles';
const MainTemplate = ({ children }) => {
	const navigate = useNavigate();
	const { user } = useSelector(state => state.app);
	const dispatch = useDispatch();

	const handleLogut = () => {
		dispatch(setLoading());
		dispatch(logout());
	};

	return (
		<>
			<MainWrapper>
				<Navbar className='bg-body-tertiary'>
					<Container>
						<Navbar.Brand
							onClick={() => {
								navigate('/');
							}}>
							Kino Srebny Ekran
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className='justify-content-end'>
							<Navbar.Text>
								{user ? (
									<div>
										<Username onClick={() => navigate('/user-reservation')}>Witaj: {user.email}</Username>
										<Button className='ms-3' variant='danger' onClick={() => handleLogut()}>
											Wyloguj
										</Button>
									</div>
								) : (
									<Button onClick={() => navigate('/login')}>Zaloguj</Button>
								)}
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				{children}
			</MainWrapper>
		</>
	);
};

export default MainTemplate;
