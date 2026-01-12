import { writable } from 'svelte/store';

const stepInstruction = writable(1),
	currentScenario = writable(0),
	selectedMenu = writable(2);

export { stepInstruction, currentScenario, selectedMenu };
