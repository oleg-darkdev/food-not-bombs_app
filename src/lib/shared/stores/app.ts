import { writable } from 'svelte/store';

const stepInstruction = writable(1),
	stepGame = writable(0),
	selectedLevel = writable(0),
	actualRound = writable(0),
	selectedScenario = writable(0),
	roundResults = writable([]),
	selectedMenu = writable(0);

export {
	stepInstruction,
	actualRound,
	selectedLevel,
	selectedScenario,
	roundResults,
	stepGame,
	selectedMenu
};
