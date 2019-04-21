import React, { Component } from 'react';
import ModalComponent from '../../Components/ModalComponent/ModalComponent';

import { Container, Header, Section, Footer, Button, Bar } from './App.style';
import GlobalStyle from '../../styles/globalStyle';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false
		};
	}

	render() {
		const { modal } = this.state;
		const toggleModal = () => this.setState({ modal: !modal });

		return (
			<Container>
				<GlobalStyle />
				<Header>
					<Bar>
						<h1>Regas</h1>
						<Button onClick={toggleModal}>?</Button>
					</Bar>

					<ModalComponent show={modal} onHide={toggleModal} />
				</Header>
				<Section>
					<ol>
						<li>
							Entra na pagina principal da Wikipedia do idioma
							escolhido pelos participantes
						</li>
						<li>
							Cada jogador irar abrir 10 abas de página
							aleatória(encontra-se no lado esquerdo da página)
						</li>
						<li>Cada página é uma carta diferente</li>
						<li>
							Das 10 abertas, você ira escolher as 5 melhores,
							mais raras
						</li>
						<li>
							Quanto mais interessante for sua página, mais rara
							ela é
						</li>
						<li>
							Cada jogador apos escolher as suas 5 cartas, podera
							fazer o reroll(<b>não é obrigatório</b>)
						</li>
						<li>
							O reroll consisate em você escolher uma carta e
							trocá-la por outra aleatória
						</li>
						<li>
							você tem direito a 2 rerolls, pode ser na mesma
							carta ou em cartas diferentes
						</li>
						<li>Apois o reroll você não pode voltar atrais</li>
						<li>Apois isso o jogo inicia</li>
						<li>
							Cada um escolhe uma carta para jogar, apois escolha
							não vale trocar de carta
						</li>
						<li>
							Para garantir que ninguém vai trocar de carta, os
							jogadores podem mandar o link da página no discord
							ou algo do tipo ao mesmo tempo
						</li>
						<li>
							Os jogadores votão na que acharem melhor, e a carta
							que tiver mais votos ganha o turno
						</li>
						<li> Vence quem ganhou mais turnos</li>
						<li>
							<b>Regra opicional</b>: O jogador não pode votar em
							sí mesmo
						</li>
					</ol>
				</Section>
				<Footer>
					<h2>
						Criador por Henrique M. Miranda -{' '}
						<a
							href='https://henry-ns.github.io/portfolio/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Meu portfolio
						</a>
					</h2>
				</Footer>
			</Container>
		);
	}
}

export default App;
