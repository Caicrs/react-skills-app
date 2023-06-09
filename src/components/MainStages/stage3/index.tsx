import * as S from './styles';
import example from '../../../assets/img/example-branchs.png';

const Stage3 = () => {
	return (
		<S.Container>
			<S.Box>
				<h2>Estrutura e Nomenclatura de Commits</h2>
				<div>
					(Contexto em que o commit esta inserido) - (Modificacao/criacao feita)
				</div>
				<S.List>
					<div>Routes - shooping cart route created</div>
					<div>Handlers - Validate reseller function created</div>
					<div>Logic - Penalty wrong word in code bug solved</div>
				</S.List>
				<div>
					✅ Evitar fazer muitas alterações em um único commit, em vez disso,
					fazer pequenas alterações incrementais e commitar individualmente.
				</div>
			</S.Box>

			<S.Box>
				<h2>Pull requests & Ramificações</h2>
				<S.List>
					<S.Item>
						<div>
							✅ Sempre usar pull requests para solicitar a revisão de código
							antes de mesclar as alterações em uma branch principal.
						</div>
					</S.Item>
					<S.Item>
						<div>
							✅ Crie branches para cada nova feature ou correção de bug
						</div>
						<p style={{ fontSize: 12 }}>
							Em vez de trabalhar diretamente na branch principal, crie uma nova
							branch para cada nova feature ou correção de bug que você estiver
							trabalhando. Isso permite que você trabalhe em alterações sem
							afetar o código principal, além de facilitar a revisão e a
							mesclagem de alterações usando pull requests.
						</p>

						<div>Exemplos - feature/(contexto da feature)</div>
						<img alt='' src={example} />
					</S.Item>
					<S.Item>
						<div style={{ paddingBottom: '24px' }}>
							Extra : Automatize testes e integrações
						</div>
						<p style={{ fontSize: 12 }}>
							Utilize ferramentas de integração contínua (CI) e testes
							automatizados para garantir que as alterações feitas não afetem
							negativamente o código existente. <br></br>Configurar uma pipeline
							de CI que execute testes automatizados sempre que um pull request
							é aberto ou atualizado pode ajudar a detectar problemas
							rapidamente e garantir que as alterações não quebrem o código
							existente.
						</p>
						<h6>1. Choose a CI tool</h6>
						<p style={{ fontSize: 12 }}>
							Choose a CI tool that suits your project and team's needs. Some
							popular options include Jenkins, Travis CI, CircleCI, and GitLab
							CI/CD.
						</p>
						<h6>2. Create a CI pipeline</h6>
						<p style={{ fontSize: 12 }}>
							Create a CI pipeline that includes automated steps, such as
							compilation, testing, and code analysis. Configure your pipeline
							to run automatically whenever a pull request is opened or updated.
						</p>
						<h6>3. Write automated tests</h6>
						<p style={{ fontSize: 12 }}>
							Write automated tests to ensure that changes made do not
							negatively affect existing code. This may include unit tests,
							integration tests, acceptance tests, and more. Ensure that your
							tests cover all possible scenarios and are automatically run in
							the CI pipeline.
						</p>
						<h6>4. Configure notifications</h6>
						<p style={{ fontSize: 12 }}>
							Configure notifications to immediately inform you and your team of
							any failures in the CI pipeline or automated tests. This will help
							you detect problems quickly and fix them before they are merged
							into the main codebase.
						</p>
						<h6>5. Keep your CI pipeline up-to-date</h6>
						<p style={{ fontSize: 12 }}>
							As your project evolves, your CI pipeline should also evolve. Keep
							your pipeline up-to-date by adding new steps and tests as your
							project grows and new features are added.
						</p>
					</S.Item>
				</S.List>
			</S.Box>
		</S.Container>
	);
};

export default Stage3;

