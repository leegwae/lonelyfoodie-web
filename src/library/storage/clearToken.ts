import TOKEN_KEY from '@library/storage/const';

function clearToken() {
	localStorage.removeItem(TOKEN_KEY);
}

export default clearToken;
