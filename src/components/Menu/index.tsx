import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useGeneral } from '../../contexts/GeneralContext';

function Menu() {
	const { setStage, stage } = useGeneral();

	return (
		<ButtonGroup aria-label='Basic example'>
			<Button
				onClick={() => setStage(1)}
				variant={stage === 1 ? 'primary' : 'secondary'}>
				UseEffect<br></br>VS <br></br>UseLayoutEffect
			</Button>
			<Button
				onClick={() => setStage(2)}
				variant={stage === 2 ? 'primary' : 'secondary'}>
				Context<br></br>VS <br></br>useState
			</Button>
			<Button
				onClick={() => setStage(3)}
				variant={stage === 3 ? 'primary' : 'secondary'}>
				Git
			</Button>
			<Button
				onClick={() => setStage(4)}
				variant={stage === 4 ? 'primary' : 'secondary'}>
				Pixabay
			</Button>
		</ButtonGroup>
	);
}

export default Menu;
