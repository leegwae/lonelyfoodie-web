import { selector } from 'recoil';
import { Review } from '@src/types/review';
import getRandomStar from '@utils/getRandomStar';
import { currentRestaurantKakaoIdState } from '@atoms/restaurant';

export const currentReviewListDemoState = selector<Review[]>({
	key: 'currentReviewListDemo',
	get: ({ get }) => {
		const currentRestaurantId = get(currentRestaurantKakaoIdState);
		const currentReivewListDemo = [1, 2, 3].map((_, i) => ({
			id: i.toString(),
			writerId: i.toString(),
			writerName: '귤농사',
			restaurantId: currentRestaurantId,
			updatedAt: new Date().toDateString(),
			star: getRandomStar(),
			content: '임시 텍스트',
			colors: [],
		}));
		console.log(currentReivewListDemo);
		return currentReivewListDemo;
	},
});

export const currentReviewListState = selector<Review[]>({
	key: 'currentReviewList',
	get: ({ get }) => get(currentReviewListDemoState),
});
