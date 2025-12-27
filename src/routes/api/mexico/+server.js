import { json } from '@sveltejs/kit';
import { groupsListMexico } from '$sharedData';
 
export async function GET(event) {
	return json(groupsListMexico);
}
