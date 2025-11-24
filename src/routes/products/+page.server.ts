import { getAllMockProductsAsync, getMockBannerAsync } from '$lib/mock-data';
import type { PageServerLoad } from './$types';
import type { NewsArticle } from '$lib/types';

export const load: PageServerLoad = async () => {
    const [products, banner] = await Promise.all([
        getAllMockProductsAsync(),
        getMockBannerAsync('products-main-banner')
    ]);

    const productNews: NewsArticle[] = products.map(product => ({
        id: product.id,
        category: product.category,
        title: product.name,
        description: product.description,
        content: `รายละเอียดเพิ่มเติมเกี่ยวกับสินค้า ${product.name}`,
        imageUrl: product.imageUrl,
        linkUrl: `/products/${product.id}`,
    }));

    return {
        products,
        banner,
        productNews
    };
};
