import { escalationFactor } from './escalation';

function applyGlobalBalance(results, scenario, round, log) {
	const f = escalationFactor(round);
	const min = Math.floor(scenario.global.minTotal * (1 - f));
	const max = Math.floor(scenario.global.maxTotal * (1 - f * 0.7));

	const totalBefore = results.reduce((s, r) => s + r.resources, 0);
	const adjustments = [];

	// 📉 Если ресурсов меньше минимума — поднимаем
	if (totalBefore < min) {
		const count = Math.ceil(3 + scenario.cooperativeAid * 3);

		results
			.sort((a, b) => a.resources - b.resources)
			.slice(0, count)
			.forEach((r) => {
				r.resources++; // увеличиваем ресурсы
				adjustments.push({
					// locationId: r.locationId, // ✅ используем locationId
					title: r.title, // ✅ добавляем title для логов
					change: 1
				});
			});
	}

	// 📈 Если ресурсов больше максимума — уменьшаем
	if (totalBefore > max) {
		results
			.sort((a, b) => b.resources - a.resources)
			.slice(0, 2)
			.forEach((r) => {
				r.resources--;
				adjustments.push({
					// locationId: r.locationId, // ✅
					title: r.title, // ✅
					change: -1
				});
			});
	}

	log.globalBalance = {
		totalBefore,
		totalAfter: results.reduce((s, r) => s + r.resources, 0),
		adjustments
	};

	// ✅ Возвращаем results с полной структурой
	return results;
}

export default applyGlobalBalance;
