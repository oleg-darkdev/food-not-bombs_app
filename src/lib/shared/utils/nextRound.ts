import {
	stepGame,
	stepInstruction,
	selectedMenu,
	selectedLevel,
	selectedScenario,
	roundResults,
	actualRound,
	actualScreen,
	stepPnp
} from '$sharedStores';

// let { data } = $props();

// const {
// 	kit,
// 	pnp,

// 	foodTokens,
// 	roles,
// 	preparation,
// 	winTokens,
// 	loseTokens,
// 	winLose,
// 	volunteeringApp,
// 	volunteeringGame,
// 	volunteeringFnb,
// 	promoFnbGroups,
// 	scenarios,
// 	fnbFaq,
// 	boardgameFaq,
// 	basicFaq,
// 	appFaq,
// 	componentsFaq,
// 	rulesAndInterpretationFaq,
// } = data;
import { locations } from '$sharedData';
import { runGame } from '$sharedUtils';
// (locations, runGame);

let // $selectedMenu = $state(0),
	// $stepInstruction = $state(0),
	// stepWelcome = $state(1),
	maxRound = 5;
// roundResult = $state(null),
// maxGameStep = $state(7);

// const substepInstruction = stepInstruction.subscribe((value) => {});
// const subroundResults = roundResults.subscribe((value) => {});

// let currentScenario = $selectedScenario;

function nextRound() {
	if (actualRound < maxRound && roundResults.length - 1 < maxRound) {
		const roundResult = runGame(locations, selectedLevel, 1);

		roundResults.update((results) => [...results, roundResult]);

		// console.log($roundResults);
	} else {
		console.log('Достигнут максимальный раунд');
	}
}

function clearRoundResults() {
	roundResults.set([]);
}

export default nextRound;
