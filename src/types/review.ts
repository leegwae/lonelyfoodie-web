export interface Review {
	id: string;
	writerId: string;
	restaurantId: string;
	updatedAt: Date | string;
	star: number;
	content?: string;
	colors: string[];
}

export interface ReviewCreate {
	restaurant_id: string;
	content: string;
	star: number;
}
