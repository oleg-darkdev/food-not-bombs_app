import { writable } from 'svelte/store';

const stepInstruction = writable(1),
	stepGame = writable(0),
	selectedLevel = writable(0),
	actualRound = writable(0),
	selectedScenario = writable(0),
	roundResults = writable([]),
	actualScreen = writable(0),
	stepPnp = writable(0),
	selectedMenu = writable(0);

export {
	stepInstruction,
	actualRound,
	actualScreen,
	stepPnp,
	selectedLevel,
	selectedScenario,
	roundResults,
	stepGame,
	selectedMenu
};
