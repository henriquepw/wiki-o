import React, { Component } from 'react';
import ModalComponent from '../../Components/ModalComponent/ModalComponent';

import { Container, Header, Section, Footer, Button, Bar } from './App.style';
import GlobalStyle from '../../styles/globalStyle';

// const Tab = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

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
						<h1>Wiki Aleatória - Regras</h1>
						<Button onClick={toggleModal}>?</Button>
					</Bar>

					<ModalComponent
						show={modal}
						onHide={() => this.setState({ modal: false })}
					/>
				</Header>
				<Section>
					<h2>Jogadores recomendados:</h2>
					<p>
						De 3 a 8 jogadores, mas pode ser quantos você quiser, só
						não deve ser bom jogar sozinho PepeHands.
					</p>
					<h2>Preparando para jogar:</h2>
					<p>
						Entrem na página principal da{' '}
						<a
							href='https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal'
							target='_blank'
							rel='noopener noreferrer'
						>
							Wikipédia
						</a>{' '}
						em português.
					</p>
					<p>
						Cada jogador irá abrir dez páginas aleatórias clicando
						no botão “
						<a
							href='https://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria'
							target='_blank'
							rel='noopener noreferrer'
						>
							página aleatória
						</a>
						” no lado esquerdo Cada página é uma carta.
					</p>
					<p>
						Das dez páginas abertas, você irá escolher cinco
						melhores cartas, as mais raras, as mais interessantes ao
						seu critério, no jogo você terá que argumentar por que
						ele tem essa raridade. Após escolher essas cinco cartas,
						cada jogador tem o direito de 2 rerolls opcionais.
					</p>
					<h2>Reroll</h2>
					<p>
						O reroll consistem em você poder trocar uma carta das
						cinco escolhidas por uma aleatória clicando em “página
						aleatória”, após a troca, não será possível destrocar,
						fica no risco do jogador, pode vi melhor ou pode vim uma
						comuna francesa.
					</p>
					<h2>Raridade das cartas</h2>
					<p>
						Páginas comuns como cidades desconhecidas, asteroides ou
						comunas francesas são consideradas fracas, ao passo que
						artistas, lugares importantes e nomes engraçados são
						raros.
					</p>
					<h2>Rodadas de classificação</h2>
					<p>
						Com as 5 cartas escolhidas, os jogadores expõem uma por
						rodada e em cada rodada uma carta é escolhida como a
						melhor. A escolha é arbitrária a partir da "raridade" da
						carta.
					</p>
					<p>
						Os jogadores iram votar na carta que acharem a melhor, e
						quem tiver mais votos vence a rodada. Vence a partida
						quem ganhar rodadas.
					</p>
					<h2>Rodada final</h2>
					<p>
						Ao final das 5 rodadas, começa a rodada final que vai
						decidir o ganhador. Cada carta vencedora, dá ao seu
						jogador uma chance a mais na rodada final. (1 carta
						vencedora = +1 carta para a final) Na rodada final os
						jogadores têm três chances (mais as cartas vencedoras)
						de escolher apenas UMA carta para competir. A melhor (a
						partir dos mesmos critérios das rodadas de
						classificação) ganha.
					</p>
					<h2>Regras opcionais</h2>
					<ul>
						<li>
							O idioma das páginas podem ser escolhidas pelos
							jogadores se todos estiverem de acordo
						</li>
						<li>
							Para garantir que ninguém vai trocar de carta, os
							jogadores podem mandar o link da sua página no
							discord ou algo do tipo ao mesmo tempo
						</li>
						<li>Os jogadores não podem votar em si mesmo</li>
						<li>
							Em vez de usar páginas da Wikipedia, pode ser usar
							páginas do mercadolivre ou do wikiHow
						</li>
						<li>
							A raridade das cartas podem diferentes dependendo do
							gosto dos jogadores.
						</li>
					</ul>
				</Section>
				<Footer>
					<h2>
						Criador por Henrique M. Miranda -{' '}
						<a
							href='https://henry-ns.github.io/portfolio/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Projetos
						</a>
					</h2>
				</Footer>
			</Container>
		);
	}
}

export default App;
