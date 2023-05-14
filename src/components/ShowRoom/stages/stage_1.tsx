import UseEffectComponent from '../../UseEffectComponent';
import UseLayoutEffectComponent from '../../UseLayoutEffectComponent';
import styled from 'styled-components';

const Stage1 = () => {
	return (
		<Container>
			<Box>
				<UseLayoutEffectComponent />
			</Box>
			<Box>
				<UseEffectComponent />
			</Box>
		</Container>
	);
};

export default Stage1;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Box = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
