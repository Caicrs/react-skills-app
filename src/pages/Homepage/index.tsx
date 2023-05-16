import * as S from './styles';
import Menu from '../../components/Menu';
import MainStages from '../../components/MainStages';
import { useGeneral } from '../../contexts/GeneralContext';

const Homepage = () => {
	const { isLoading } = useGeneral();
	return (
		<S.Container>
			<MainStages />
			{!isLoading && <Menu />}
		</S.Container>
	);
};

export default Homepage;
