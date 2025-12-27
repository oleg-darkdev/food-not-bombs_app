import { json } from '@sveltejs/kit';
import { groupsListCentralSouthAmerica } from '$sharedData';

export async function GET(event) {
	return json(groupsListCentralSouthAmerica);
}
