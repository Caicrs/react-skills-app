import UseEffectComponent from '../../UseEffectComponent';
import UseLayoutEffectComponent from '../../UseLayoutEffectComponent';
import * as S from './styles';

const Stage1 = () => {
	return (
		<S.Container>
			<S.Box>
				<UseLayoutEffectComponent />
			</S.Box>
			<S.Box>
				<UseEffectComponent />
			</S.Box>
		</S.Container>
	);
};

export default Stage1;
