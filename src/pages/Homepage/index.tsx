import styled from 'styled-components';
import Menu from '../../components/Menu';
import ShowRoom from '../../components/ShowRoom';

const Homepage = () => {
	return (
		<Container>
			<ShowRoom />
			<Menu />
		</Container>
	);
};

export default Homepage;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	gap: 24px;
	height: 100%;
`;
