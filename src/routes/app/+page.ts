import {
	pnp,
	fnbFaq,
	boardgameFaq,
	appFaq,
	componentsFaq,
	rulesAndInterpretationFaq
} from '$sharedData';
import { runGame } from '$sharedUtils';

export function load() {
	return {
		pnp,

		fnbFaq,
		boardgameFaq,

		appFaq,
		componentsFaq,
		rulesAndInterpretationFaq,
		runGame
	};
}
