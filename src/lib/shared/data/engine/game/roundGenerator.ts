import { escalationFactor } from '../core/escalation';
import generateLocationResources from '../core/locationGenerator';
import {
	applyGlobalBalance,
	locationEvents,
	calculateLocationEventChance
} from '$sharedData';
import probabilityLog from '../logging/probabilityLog';

function generateRound(locations, scenario, round) {
	const factor = escalationFactor(round);

	const log = {
		round,
		scenario: scenario.id,
		escalation: factor,
		locations: [],
		locationEvents: [],
		globalBalance: null
	};

	// 1️⃣ Генерация ресурсов с title
	let results = locations.map((loc) => ({
		number: loc.number,
		id: loc.id,
		title: loc.title, // ✅ title добавлен
		resources: generateLocationResources(loc, scenario, factor, log)
	}));

	// 2️⃣ ЛОКАЛЬНЫЕ СОБЫТИЯ
	const triggeredEvents = [];

	for (const result of results) {
		// Ищем объект локации по id
		const location = locations.find((l) => l.id === result.id);

		if (!location) continue;

		for (const event of locationEvents) {
			const chance = calculateLocationEventChance(location, event);

			if (Math.random() < chance) {
				// Применяем эффект к результату
				// event.effect(result);

				triggeredEvents.push({
					locationId: location.id,
					title: location.title, // ✅ title добавлен в событие
					eventId: event.id,
					chance: Number(chance.toFixed(3))
				});

				break; // 1 событие на локацию
			}
		}
	}

	log.locationEvents = triggeredEvents;

	// 3️⃣ Глобальный баланс
	results = applyGlobalBalance(results, scenario, round, log);

	// 4️⃣ Логирование
	probabilityLog.logRound(log);

	return results;
}

export default generateRound;
