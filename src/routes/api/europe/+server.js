import { json } from '@sveltejs/kit';
import { groupsListEurope } from '$sharedData';

export async function GET(event) {
	return json(groupsListEurope);
}
