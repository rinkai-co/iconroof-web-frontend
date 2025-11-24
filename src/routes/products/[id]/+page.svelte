<script lang="ts">
    import Menutab from '$lib/components/home/Menutab.svelte';
    import ProductBannerContainer from '$lib/components/products/ProductBannerContainer.svelte';
    import type { PageData } from './$types';
    import Image from '$lib/components/ui/Image.svelte';

    let { data }: { data: PageData } = $props();
</script>

<ProductBannerContainer product={data.product} />
<Menutab />
<main class="flex font-sans flex-col items-center justify-start min-h-screen bg-[var(--background)] text-[var(--foreground)] max-w-7xl mx-auto pt-16 md:pt-20">
    <div class="w-full p-4 md:p-8 bg-white shadow-lg rounded-lg">
        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
                <Image
                    src={data.product.imageUrl}
                    alt={data.product.name}
                    class="rounded-lg shadow-md w-full h-auto"
                />
            </div>
            <div class="md:w-1/2 flex flex-col justify-center">
                <h1 class="text-4xl font-bold mb-2 text-gray-900">{data.product.name}</h1>
                <p class="text-gray-600 text-lg mb-4">{data.product.category} - {data.product.brand}</p>
                <p class="text-2xl font-semibold text-green-600 mb-6">${data.product.price.toFixed(2)}</p>
                <p class="text-gray-700 text-base leading-relaxed">{data.product.description}</p>
                <!-- Add more product details here as needed -->
            </div>
        </div>
    </div>
</main>
