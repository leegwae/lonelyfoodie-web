import TOKEN_KEY from '@library/storage/const';

function getToken() {
	return localStorage.getItem(TOKEN_KEY);
}

export default getToken;
