import React from 'react';
import * as S from './styles';

const LoadingPage = () => {
	return (
		<S.LoadingContainer className='App'>
			<S.Spinner />
			<div>Carregando...</div>
		</S.LoadingContainer>
	);
};

export default LoadingPage;
