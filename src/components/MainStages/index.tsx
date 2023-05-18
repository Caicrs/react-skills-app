import { useGeneral } from '../../contexts/GeneralContext';
import Stage1 from './stage1';
import Stage2 from './stage2';
import Stage3 from './stage3';
import Stage4 from './stage4';
import * as S from './styles';

const StageComponents = () => {
	const { stage } = useGeneral();
	switch (stage) {
		case 1:
			return (
				<S.Container>
					<Stage1 />
				</S.Container>
			);
		case 2:
			return (
				<S.Container>
					<Stage2 />
				</S.Container>
			);
		case 3:
			return (
				<S.Container>
					<Stage3 />
				</S.Container>
			);
		case 4:
			return (
				<S.Container>
					<Stage4 />
				</S.Container>
			);
		default:
			return <div>Invalid stage number</div>;
	}
	// eslint-disable-next-line no-unreachable
	return (<></>)
};

export default StageComponents;
