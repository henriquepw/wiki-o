import { createGlobalStyle } from 'styled-components';
import { background } from './colors';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

    body {
        font-family: 'Press Start 2P', cursive;
		background-color: ${background};
        margin: 0px;
    }
`;
