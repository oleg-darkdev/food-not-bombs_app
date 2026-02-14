function calculateLocationEventChance(location, event) {
	const streakFactor = Math.min(location.goodStreak * 0.05, 0.25);
	const biasFactor = (location.positiveBias - 0.5) * 0.1;

	return Math.max(0, event.baseChance + streakFactor + biasFactor);
}

export default calculateLocationEventChance;
