import { biasedRandom, expectedValue } from './rng';
import { applyEscalationToBias } from './escalation';
import applyAntiStreaks from './applyAntiStreaks';

function generateLocationResources(location, scenario, factor, log) {
	const baseBias = location.positiveBias / (location.positiveBias + location.negativeBias);

	let bias = applyAntiStreaks(location, baseBias, scenario, factor);
	bias = applyEscalationToBias(bias, factor);

	const value = biasedRandom(location.min, location.max, bias);

	if (value <= location.min + 1) {
		location.badStreak++;
		location.goodStreak = 0;
	} else if (value >= location.max - 1) {
		location.goodStreak++;
		location.badStreak = 0;
	} else {
		location.badStreak = 0;
		location.goodStreak = 0;
	}

	log.locations.push({
		id: location.id,
		baseBias,
		finalBias: bias,
		expected: expectedValue(location.min, location.max, bias),
		result: value
	});

	return value;
}

export default generateLocationResources;
