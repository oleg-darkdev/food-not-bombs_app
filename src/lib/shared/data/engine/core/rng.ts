function biasedRandom(min, max, bias) {
	const r = Math.random();
	const k = bias < 0.5 ? 1 + (0.5 - bias) * 4 : 1 / (1 + (bias - 0.5) * 4);

	return Math.floor(min + Math.pow(r, k) * (max - min + 1));
}

function expectedValue(min, max, bias) {
	return min + (max - min) * bias;
}

export { expectedValue, biasedRandom };
