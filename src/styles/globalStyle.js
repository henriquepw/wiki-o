import { createGlobalStyle } from 'styled-components';
import { background } from './colors';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P|VT323');

    body {
		font-family: 'VT323', 'Press Start 2P', monospace;
		font-size: 24px;
		background-color: ${background};
        margin: 0px;
    }
`;
