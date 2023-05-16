import React, { useState, useEffect } from 'react';
import * as S from './style';
const UseLayoutEffectComponent = () => {
	const [valor, setValor] = useState(0);

	useEffect(() => {
		// Function
	}, [valor]);

	const handleClick = () => {
		setValor(valor + 1);
	};
	return (
		<S.Container>
			<div>
				<h2>useEffect</h2>
				<p style={{ fontSize: 12 }}>
					O useEffect é executado de forma assíncrona, após a atualização do
					componente e da renderização. Ele é adequado para tarefas que não
					exigem interação direta com o DOM ou que podem ser adiadas sem afetar
					a aparência visual do componente. É a opção mais comum de se usar.
				</p>
				<p style={{ fontSize: 12 }}>
					Aqui o useEffect ira fazer algo apenas quando o valor mudar, como por
					exemplo, ao fazer um pagination pode ser adicionada uma logica para
					fazer um novo fetch, e renderizando os dados com um componente
					totalmente componentizado, fazendo assim alterar o lifecycle apenas do
					componente, sendo re-renderizado ao inves da pagina inteira.
				</p>
				<button onClick={handleClick}>Clique aqui ({valor})</button>
			</div>
		</S.Container>
	);
};

export default UseLayoutEffectComponent;

