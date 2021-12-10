import { selector } from 'recoil';
import { Review, ReviewSearch } from '@src/types/review';
import { currentRestaurantIdState } from '@atoms/restaurant';

export const currentReviewListState = selector<Review[]>({
	key: 'CurrentReviewList',
	get: async ({ get }) => {
		const currentRestaurantId = get(currentRestaurantIdState);
		const response = await fetch(
			`/api/review/?page=1&per_page=10&restaurant_id=${currentRestaurantId}`
		);
		if (response.status !== 200) return [];
		// const currentReivewListDemo = [1, 2, 3].map((_, i) => ({
		// 	id: i.toString(),
		// 	writerId: i.toString(),
		// 	writerName: '귤농사',
		// 	restaurantId: currentRestaurantId,
		// 	updatedAt: new Date().toDateString(),
		// 	star: getRandomStar(),
		// 	content: '임시 텍스트',
		// 	colors: [],
		// }));
		const data: ReviewSearch[] = await response.json();
		const reviewList: Review[] = data.map((d) => ({
			id: d.id,
			writerId: d.writer_id,
			restaurantId: d.restaurant_id,
			updatedAt: d.updated_at,
			star: d.star,
			content: d.content,
			colors: [],
		}));

		return reviewList;
	},
});

export const a = 1;
