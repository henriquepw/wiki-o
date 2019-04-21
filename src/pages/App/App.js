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
						<li>Regra 1</li>
						<li>Regra 2</li>
						<li>Regra 3</li>
						<li>Regra 4</li>
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
