import { createGlobalStyle, css } from 'styled-components';

const globalStyle = css`
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

	* {
		box-sizing: border-box;
		&:focus {
			outline: none;
		}
		font-family: 'Noto Sans KR', sans-serif;
	}
	a,
	button {
		text-decoration: none;
		border: none;
		outline: none;
		background-color: transparent;
		&:hover {
			cursor: pointer;
		}
	}
	#root {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	body {
		margin: 0;
		padding: 0;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}
`;

const GlobalStyle = createGlobalStyle`
	${globalStyle};
`;

export default GlobalStyle;
