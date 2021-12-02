export interface Review {
	id: string;
	writerId: string;
	restaurantId: string;
	updatedAt: Date | string;
	star: number;
	content?: string;
	colors: string[];
}
