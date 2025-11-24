import {
    getMockBrandsAsync,
    getMockBannerInfoAsync,
    getMockNewsArticlesAsync,
    getMockFAQItemsAsync,
    getMockBannerAsync
} from '$lib/mock-data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const [brands, bannerInfo, newsArticles, faqItems, heroBanner] = await Promise.all([
        getMockBrandsAsync(),
        getMockBannerInfoAsync(),
        getMockNewsArticlesAsync(),
        getMockFAQItemsAsync(),
        getMockBannerAsync('home-hero-banner')
    ]);

    return {
        brands,
        bannerInfo,
        newsArticles,
        faqItems,
        heroBanner
    };
};
