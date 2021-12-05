import TOKEN_KEY from '@library/storage/const';

function setToken(token: string) {
	localStorage.setItem(TOKEN_KEY, token);
}

export default setToken;
