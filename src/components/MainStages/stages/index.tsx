import { useGeneral } from '../../../contexts/GeneralContext';
import Stage1 from './stage_1';
import Stage2 from './stage_2';
import Stage3 from './stage3/stage_3';

const StageComponents = () => {
	const { stage } = useGeneral();
	switch (stage) {
		case 1:
			return <Stage1 />;
		case 2:
			return <Stage2 />;
		case 3:
			return <Stage3 />;
		default:
			return <div>Invalid stage number</div>;
	}

	return null;
};

export default StageComponents;
