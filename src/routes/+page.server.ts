import {
    getMockBrandsAsync,
    getMockBannerInfoAsync,
    getMockNewsArticlesAsync,
    getMockFAQItemsAsync,
    getMockBannerAsync,
    getMockTestimonialsAsync,
    getMockCustomerReviewsAsync
} from '$lib/mock-data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const [brands, bannerInfo, newsArticles, faqItems, heroBanner, testimonials, customerReviews] = await Promise.all([
        getMockBrandsAsync(),
        getMockBannerInfoAsync(),
        getMockNewsArticlesAsync(),
        getMockFAQItemsAsync(),
        getMockBannerAsync('home-hero-banner'),
        getMockTestimonialsAsync(),
        getMockCustomerReviewsAsync()
    ]);

    return {
        brands,
        bannerInfo,
        newsArticles,
        faqItems,
        heroBanner,
        testimonials,
        customerReviews
    };
};
