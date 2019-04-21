import styled from 'styled-components';

const Container = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
`;

const Header = styled.header`
	width: 100vw;
	height: 100px;
	text-align: center;
	border-bottom: 2px solid #fff;

	h1 {
		margin: 2rem;
		font-size: 2rem;
	}
`;

const Section = styled.section`
	margin: 10%;
	margin-top: 25px;
`;

export { Container, Header, Section };
