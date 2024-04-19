import styled from 'styled-components';

const handleColorType = props => {
	if (props.isTaken) {
		return '#757575';
	} else if (props.isSelected) {
		return '#fff';
	} else {
		return '#11d853';
	}
};

export const CinemaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Screen = styled.div`
	background-color: #333;
	color: #fff;
	padding: 10px;
	margin: 20px;
	width: 400px;
	height: 300px;
`;

export const SeatRow = styled.div`
	display: flex;
	margin-bottom: 10px;
`;

export const Seat = styled.div`
	width: 30px;
	height: 30px;
	background-color: ${props => handleColorType(props)};
	border: 1px solid #333;
	margin-right: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: ${props => (props.isTaken ? 'not-allowed' : 'pointer')};
`;

export const DivSquareWrapper = styled.div`
	display: flex;
`;

export const DivSquare = styled.div`
	width: 30px;
	height: 30px;
	background-color: ${props => props.color};
`;

export const DivSquareText = styled.div`
	color: white;
	padding: 5px;
`;
