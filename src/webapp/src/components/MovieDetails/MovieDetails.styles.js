import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	width: 50%;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	img {
		padding: 10px;
		width: 40%;
	}
`;

export const Title = styled.h2`
	text-align: center;
	font-weight: bold;
	font-size: 32px;
	color: white;
`;

export const Info = styled.p`
	text-align: center;
	font-size: 24px;
	color: white;
`;

export const Day = styled.span`
	color: white;
	text-align: center;
	font-size: 20px;
`;

export const StyledSquareWrapper = styled.div`
	display: flex;
`;

export const StyledSquare = styled.div`
	width: 50px;
	height: 50px;
	background-color: #3498db;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #83bcea;
	}
`;
