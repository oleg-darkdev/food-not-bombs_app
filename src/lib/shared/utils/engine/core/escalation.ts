function escalationFactor(roundIndex) {
	if (roundIndex < 4) return 0;
	return Math.min(0.3, (roundIndex - 3) * 0.05);
}

function applyEscalationToBias(bias, factor) {
	return bias - (bias - 0.5) * factor;
}


export { escalationFactor, applyEscalationToBias };