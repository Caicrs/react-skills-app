import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ImageById from './pages/Image';

const DefaultRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/images/:webformaturl/:views/:downloads/:likes/:comments/:user' element={<ImageById />} />
		</Routes>
	);
};

export default DefaultRoutes;
