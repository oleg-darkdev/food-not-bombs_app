function applyAntiStreaks(location, bias, scenario, factor) {
	const { badBoost, goodPenalty } = scenario.antiStreaks;
	const dampening = 1 - factor;

	if (location.badStreak >= 2) bias += badBoost * dampening;
	if (location.goodStreak >= 2) bias -= goodPenalty * (1 + factor);

	return Math.min(0.9, Math.max(0.1, bias));
}

export default applyAntiStreaks;
