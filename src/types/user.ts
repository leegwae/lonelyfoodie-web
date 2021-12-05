export interface User {
	id: string;
	kakaoId: string;
	email: string;
	nickname: string;
	deptCode: string;
	studentYear: string;
	sex: string;
}

export interface UserRaw {
	[index: string]: string;
}
