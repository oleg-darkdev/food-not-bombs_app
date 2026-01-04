import { json } from '@sveltejs/kit';
import { groupsListAustralia } from '$sharedData';


export async function GET(event) {
	return json(groupsListAustralia);
}
