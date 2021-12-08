import { atom } from 'recoil';
import { User } from '@src/types/user';

export const userState = atom<User | null>({
	key: 'user',
	default: null,
});

export const a = 1;
