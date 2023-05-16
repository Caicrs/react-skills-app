import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GeneralProvider, useGeneral } from './contexts/GeneralContext';
import DefaultRoutes from './Routes';

function App() {
	const { isLoading } = useGeneral();
	return (
		<GeneralProvider>
			<DefaultRoutes />
		</GeneralProvider>
	);
}

export default App;
