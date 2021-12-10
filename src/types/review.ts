export interface Review {
	id: string;
	writerId: string;
	restaurantId: string;
	updatedAt: Date | string;
	star: number;
	content?: string;
	colors: string[];
}

export interface ReviewSearch {
	id: string;
	restaurant_id: string;
	writer_id: string;
	title: string;
	content: string;
	star: number;
	created_at: string;
	updated_at: string;
	deleted_at: string;
}

export interface ReviewCreate {
	restaurant_id: string;
	title: string;
	content: string;
	star: number;
}

// id	string
// restaurant_id	string
// writer_id	string
// title	string
// content	string
// star	integer
// created_at	string($date-time)
// updated_at	string($date-time)
// deleted_at	string($date-time)
// }
