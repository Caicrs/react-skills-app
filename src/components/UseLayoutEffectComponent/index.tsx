import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
const UseLayoutEffectComponent = () => {
	const [valor, setValor] = useState(0);

	useLayoutEffect(() => {
		if (valor !== 0) {
			alert(`O valor foi alterado para ${valor}`);
		}
	}, [valor]);

	const handleClick = () => {
		setValor(valor + 1);
	};
	return (
		<Container>
			<div>
				<h2>useLayoutEffect</h2>
				<p style={{ fontSize: 12 }}>
					O useLayoutEffect é executado de forma síncrona, imediatamente após a
					atualização do componente e antes da renderização. Ele é adequado para
					tarefas que exigem interação direta com o DOM ( dropdowns, carrosseis
					etc...) e que precisam ser executadas antes da renderização. Ele é
					mais rápido que o useEffect, mas deve ser usado com cautela, pois pode
					causar atrasos na renderização.
				</p>
				<button onClick={handleClick}>Clique aqui ({valor})</button>
			</div>
		</Container>
	);
};

export default UseLayoutEffectComponent;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	padding: 0 10%;
`;

const Text = styled.div`
	width: 80%;
	height: 100%;
`;
