import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GeneralProvider} from './contexts/GeneralContext';
import DefaultRoutes from './Routes';

function App() {
	return (
		<GeneralProvider>
			<DefaultRoutes />
		</GeneralProvider>
	);
}

export default App;
