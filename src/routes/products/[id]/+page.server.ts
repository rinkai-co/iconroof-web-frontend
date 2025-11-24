import { getMockProductAsync } from '$lib/mock-data';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    const { id } = params;
    const product = await getMockProductAsync(id);

    if (!product) {
        throw error(404, `Product with ID '${id}' not found`);
    }

    // Transform product to banner format for reuse if needed, or just pass product
    // The container logic in Next.js did this mapping. We can do it here or in the component.
    // In ProductBannerContainer.svelte (Svelte version), it accepts 'product' and maps it.
    // So we just pass 'product'.

    return {
        product
    };
};
