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
import { get } from 'svelte/store';

import { locations } from '$sharedData';
import { runGame } from '$sharedUtils';

let maxRound = 5;

function nextRound() {
	const currentRound = get(actualRound);
	const currentResults = get(roundResults);
	const level = get(selectedLevel);

	console.log(level);
	console.log(currentRound);
	console.log(currentResults);

	if (currentRound < maxRound && currentResults.length - 1 < maxRound) {
		const roundResult = runGame(locations, level, 1);

		roundResults.update((results) => [...results, roundResult]);
	} else {
		console.log('Достигнут максимальный раунд');
		console.log(currentRound);
	}
}

export default nextRound;
