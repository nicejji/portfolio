import type { PageServerLoad } from './$types';
import { CAT_API_KEY } from '$env/static/private';
import { TheCatAPI } from '@thatapicompany/thecatapi';

const catApi = new TheCatAPI(CAT_API_KEY);

export const load: PageServerLoad = async () => ({
	images: (await catApi.images.searchImages({ limit: 10 })).map((image) => image.url)
});
