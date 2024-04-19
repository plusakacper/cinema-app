import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 75%;
	margin: 30px auto;
`;

export const MovieCard = styled(Card)`
	width: 30%;
	margin: 20px;
	padding: 10px;
`;
