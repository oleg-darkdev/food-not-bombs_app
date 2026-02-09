import generateRound from './roundGenerator';

import { probabilityLog } from '$sharedData';

function runGame(locations, scenario) {
	// let results;

	for (let round = 1; round <= scenario.rounds; round++) {
		let results = generateRound(locations, scenario, round);

		// console.log(`🎲 Раунд ${round}`);
		console.table(
			results.map((r) => ({
				number: r.number,
				// locationId: r.locationId,
				title: r.title,
				resources: r.resources
			}))
		);

		// 👇 ВЫЗОВ ЛОГГЕРА
		// probabilityLog.printLastRound();

		const lastLog = probabilityLog.rounds.at(-1);

		return {
			round,
			// escalation: lastLog.escalation,
			globalBalance: lastLog.globalBalance,
			locationEvents: lastLog.locationEvents,
			locations: results.map((r, index) => ({
				number: index + 1,
				title:  r.title,
				// locationId: r.location,
				// locationTitle: r.location,
				resources: r.resources
			}))
		};
	}

	// console.log('📈 Сводка по игре:');
	// console.table(probabilityLog.getSummary());
}

export default runGame;
