import { atom } from 'recoil';
import { User } from '@src/types/user';

const userState = atom<User | null>({
	key: 'User',
	default: null,
});

export default userState;
