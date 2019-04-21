import styled from 'styled-components';

//#282c34;
const Container = styled.div`
	background-color: #f9f5e8;
	min-height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #292929;
`;

const Header = styled.header`
	display: flex;
	position: relative;

	width: 100vw;
	height: 96px;

	background-color: white;

	h1 {
		margin: auto;
		padding-left: 25px;
		min-width: 984px;
		font-size: 4.5rem;
		font-weight: bold;
	}

	&::before {
		content: '';
		top: 6px;
		width: 100vw;
		position: absolute;
		background: transparent;
		border-bottom: 2px dotted #292929;
		border-top: 2px dotted #292929;
		height: 84px;
	}
`;

const Section = styled.section`
	padding: 25px;
	min-width: 984px;
	flex: 1;
`;

const Footer = styled.footer`
	display: flex;
	position: relative;

	width: 100vw;
	height: 96px;

	background-color: #4b4a4a;

	h2 {
		margin: auto;
		min-width: 984px;
		font-size: 1em;
		text-align: center;
		color: #b1b1b1;

		a {
			color: #2286c3;
		}
	}
`;

export { Container, Header, Section, Footer };
