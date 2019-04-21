import styled from 'styled-components';
import {
	background,
	primaryColor,
	primaryTextColor,
	hoverTextColor
} from '../../styles/colors';

const Container = styled.div`
	background-color: ${background};
	min-height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${primaryColor};
`;

const Header = styled.header`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;

	width: 100vw;
	height: 96px;

	background-color: ${primaryColor};

	h1 {
		padding-left: 25px;
		font-size: 4.5rem;
		color: ${primaryTextColor};
	}
`;

const Section = styled.section`
	padding: 25px;
	max-width: 984px;
	flex: 1;

	a {
		color: ${hoverTextColor};
	}
`;

const Footer = styled.footer`
	display: flex;
	position: relative;

	width: 100vw;
	height: 86px;

	background-color: ${primaryColor};

	h2 {
		margin: auto;
		max-width: 984px;
		font-size: 1em;
		text-align: center;
		color: ${primaryTextColor};

		a {
			color: ${hoverTextColor};
		}
	}
`;

const Button = styled.label`
	color: ${primaryTextColor};
	height: 50px;
	width: 50px;
	margin: 0;
	margin-right: 25px;
	font-size: 2.5rem;

	border-radius: 50%;
	border: 2px solid ${primaryTextColor};

	text-align: center;
	line-height: 50px;
	box-sizing: content-box;

	transition: 0.3s;

	&:hover {
		cursor: pointer;
		color: ${hoverTextColor};
		border-color: ${hoverTextColor};
	}
`;

const Bar = styled.div`
	min-width: 984px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		flex: 1;
		&:hover {
			cursor: context-menu;
		}
	}
`;

export { Container, Header, Section, Footer, Button, Bar };
