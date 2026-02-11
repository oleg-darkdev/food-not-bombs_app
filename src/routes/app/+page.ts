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
	scenarios,
	locations,
	fnbFaq,
	boardgameFaq,
	basicFaq,
	appFaq,
	componentsFaq,
	rulesAndInterpretationFaq,
	runGame,
	pnp
} from '$sharedData';

export function load() {
	return {
		fnbFaq,
		boardgameFaq,
		basicFaq,
		appFaq,
		componentsFaq,
		rulesAndInterpretationFaq,
		kit,
		pnp,
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
		scenarios,
		locations,
		runGame
	};
}
