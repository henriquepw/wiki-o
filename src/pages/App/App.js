import React, { Component } from 'react';

import { Container, Header, Section } from './App.style';
import GlobalStyle from '../../styles/globalStyle';

class App extends Component {
	render() {
		return (
			<Container>
				<GlobalStyle />
				<Header>
					<h1>Regas</h1>
				</Header>
				<Section>
					<p>
						{' '}
						Texto Texto Texto Texto Texto Texto Texto Texto Texto
						Texto Texto Texto Texto Texto Texto Texto Texto Texto
						Texto Texto Texto Texto Texto Texto Texto Texto Texto
						Texto Texto Texto Texto Texto{' '}
					</p>
					<p>
						{' '}
						Texto Texto Texto Texto Texto Texto Texto Texto Texto
						Texto Texto Texto Texto Texto Texto Texto Texto Texto
						Texto Texto Texto Texto Texto Texto Texto Texto Texto
						Texto Texto Texto Texto Texto{' '}
					</p>
					<p>
						{' '}
						Texto Texto Texto Texto Texto Texto Texto Texto Texto
						Texto Texto Texto Texto Texto Texto Texto Texto Texto
						Texto Texto Texto Texto Texto Texto Texto Texto Texto
						Texto Texto Texto Texto Texto{' '}
					</p>
				</Section>
			</Container>
		);
	}
}

export default App;
