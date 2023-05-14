import styled from 'styled-components';

const Stage2 = () => {
	return (
		<Container>
			<Box>
				<h2>UseState</h2>
				<List>
					<Item>
						<div>
							✅ Utilizado quando o estado é específico a um componente e não
							precisa ser compartilhado com outros componentes. Adequado para
							gerenciar estados simples, como um valor booleano, uma string ou
							um objeto pequeno,como por exemplo para guardar os novos dados dos
							campos que o user decidiu alterar em uma pagina de edit profile.
						</div>
					</Item>
				</List>
			</Box>
			<Box>
				<h2>UseContext</h2>
				<List>
					<Item>
						<div>
							✅ Utilizado quando o estado precisa ser compartilhado com outros
							componentes. Ele é adequado para gerenciar estados mais complexos,
							que precisam ser acessados em vários componentes diferentes. O
							useContext é utilizado em conjunto com o createContext, que cria
							um contexto compartilhado entre os componentes, como por exemplo
							para guardar no carrinho de compras os itens escolhidos pelo user.
						</div>
					</Item>
				</List>
			</Box>
		</Container>
	);
};

export default Stage2;

const Container = styled.div`
	display: flex;
	max-height: 500px;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	overflow-y: scroll;
`;

const Box = styled.div`
	width: fit-content;
	color: white;
`;

const List = styled.ul`
	padding-top: 24px;
	display: flex;
	max-height: 400px;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;

const Item = styled.div`
	max-width: 50%;
	display: flex;
	padding-bottom: 12px;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);

	> img {
		padding-top: 12px;
	}
`;
