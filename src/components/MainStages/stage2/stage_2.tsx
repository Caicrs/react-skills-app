import * as S from './styles';

const Stage2 = () => {
	return (
		<S.Container>
			<S.Box>
				<h2>UseState</h2>
				<S.List>
					<S.Item>
						<div>
							✅ Utilizado quando o estado é específico a um componente e não
							precisa ser compartilhado com outros componentes. Adequado para
							gerenciar estados simples, como um valor booleano, uma string ou
							um objeto pequeno,como por exemplo para guardar os novos dados dos
							campos que o user decidiu alterar em uma pagina de edit profile.
						</div>
					</S.Item>
				</S.List>
			</S.Box>
			<S.Box>
				<h2>UseContext</h2>
				<S.List>
					<S.Item>
						<div>
							✅ Utilizado quando o estado precisa ser compartilhado com outros
							componentes. Ele é adequado para gerenciar estados mais complexos,
							que precisam ser acessados em vários componentes diferentes. O
							useContext é utilizado em conjunto com o createContext, que cria
							um contexto compartilhado entre os componentes, como por exemplo
							para guardar no carrinho de compras os itens escolhidos pelo user.
						</div>
					</S.Item>
				</S.List>
			</S.Box>
		</S.Container>
	);
};

export default Stage2;
