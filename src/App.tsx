import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import { GeneralProvider } from './contexts/GeneralContext';

function App() {
	return (
		<GeneralProvider>
			<div className='App'>
				<Homepage />
			</div>
		</GeneralProvider>
	);
}

export default App;
