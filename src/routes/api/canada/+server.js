import { json } from '@sveltejs/kit';
import { groupsListCanada } from '$sharedData';


export async function GET(event) {
	return json(groupsListCanada);
}
