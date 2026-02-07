import {
	promoFnbGroups,
	fnbFaq,
	boardgameFaq,
	basicFaq,
	appFaq,
	componentsFaq,
	rulesAndInterpretationFaq
} from '$sharedData';
import { landingPromoPhotos } from '$widgets';


const imgs = [
		{
			altText: '',
			img: '/images/photos/boardgame/promo/2.JPG'
		},
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/3.JPG'
		// },
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/4.JPG'
		// },
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/5.JPG'
		// },
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/6.JPG'
		// },

		{
			altText: '',
			img: '/images/photos/boardgame/promo/8.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/11.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/15.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/9.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/16.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/1.JPG'
		}
	];



export function load() {
	return {
		promoFnbGroups,
		landingPromoPhotos,
		imgs,
		fnbFaq,
		boardgameFaq,
		basicFaq,
		appFaq,
		componentsFaq,
		rulesAndInterpretationFaq
	};
}
