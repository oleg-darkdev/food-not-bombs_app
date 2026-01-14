import { writable } from 'svelte/store';

const stepInstruction = writable(1),
	currentScenario = writable(0),
	stepGame = writable(0),
	actualRound = writable(0),
	roundResults = writable([]),
	selectedMenu = writable(2);

export { stepInstruction, actualRound,  roundResults, currentScenario, stepGame, selectedMenu };
