import { roundResults } from '$sharedStores';

function clearRoundResults() {
	roundResults.set([]);
}

export default clearRoundResults;
