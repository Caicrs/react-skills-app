import styled from 'styled-components';
import StageComponents from './stages';

const ShowRoom = () => {
	return (
		<Container>
			<StageComponents />
		</Container>
	);
};

export default ShowRoom;

const Container = styled.div`
	background: #5c636a;
	border-radius: 24px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
