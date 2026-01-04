import { json } from '@sveltejs/kit';
import { groupsListRussia } from '$sharedData';


export async function GET(event) {
	return json(groupsListRussia);
}
