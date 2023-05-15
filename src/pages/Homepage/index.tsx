import styled from 'styled-components';
import Menu from '../../components/Menu';
import MainStages from '../../components/MainStages';

const Homepage = () => {
	return (
		<Container>
			<MainStages />
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
