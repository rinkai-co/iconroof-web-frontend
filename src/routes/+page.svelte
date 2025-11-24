<script lang="ts">
	import Menutab from '$lib/components/home/Menutab.svelte';
	import TestimonialSlider from '$lib/components/home/TestimonialSlider.svelte';
	import BrandListPage from '$lib/components/home/Brand.svelte';
	import ProductInfoPage from '$lib/components/home/ProductInfo.svelte';
	import BannerInfoPage from '$lib/components/home/Banner.svelte';
	import InformationComp from '$lib/components/home/InformationComp.svelte';
	import ProductBanner from '$lib/components/products/ProductBanner.svelte';
	import ContactFAQ from '$lib/components/home/ContactFAQ.svelte';
	import CustomerReview from '$lib/components/home/CustomerReview.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Iconroof',
		description: 'จำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด',
		url: 'https://iconroof.co.th/',
		telephone: '+66-89-154-3355',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'หมู่บ้าน คนึงทิพย์ (โกดัง) ถนน บางกรวย-ไทรน้อย กาญจนาภิเษก ตำบล บางบัวทอง',
			addressLocality: 'อำเภอบางบัวทอง',
			addressRegion: 'นนทบุรี',
			postalCode: '11110',
			addressCountry: 'TH'
		},
		image: 'https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg',
		priceRange: '$',
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				opens: '08:00',
				closes: '17:30'
			}
		]
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div
	class="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start bg-[var(--background)] pt-16 font-sans text-[var(--foreground)] md:pt-20"
>
	{#if data.heroBanner}
		<ProductBanner banner={data.heroBanner} fullScreen={true} />
	{/if}

	<Menutab />

	<div class="flex w-full flex-col gap-16 px-6 py-8 md:gap-24 md:px-8 md:py-16">
		<ProductInfoPage />

		<BrandListPage brands={data.brands} />

		<TestimonialSlider testimonials={data.testimonials} />

		<InformationComp newsArticles={data.newsArticles} />

		<ContactFAQ faqItems={data.faqItems} />

		<CustomerReview customerReviews={data.customerReviews} />

		{#if data.bannerInfo}
			<BannerInfoPage bannerInfo={data.bannerInfo} />
		{/if}
	</div>
</div>
