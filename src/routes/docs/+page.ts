import type { PageLoad } from './$types';
import {
	kit,
	foodTokens,
	roles,
	preparation,
	winTokens,
	loseTokens,
	winLose,
	volunteeringApp,
	volunteeringGame,
	volunteeringFnb,
	promoFnbGroups,
	docsNav,
	fnbFaq,
	boardgameFaq,
	basicFaq,
	appFaq,
	componentsFaq,
	rulesAndInterpretationFaq
} from '$sharedData';

export const load: PageLoad = async () => {
	// Возвращаем все необходимые объекты через data
	return {
		kit,
		foodTokens,
		roles,
		preparation,
		winTokens,
		loseTokens,
		promoFnbGroups,
		winLose,
		volunteeringApp,
		volunteeringGame,
		volunteeringFnb,
		docsNav,
		fnbFaq,
		boardgameFaq,
		basicFaq,
		appFaq,
		componentsFaq,
		rulesAndInterpretationFaq
	};
};
