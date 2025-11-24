<script lang="ts">
    import Menutab from '$lib/components/home/Menutab.svelte';
    import ProductBanner from '$lib/components/products/ProductBanner.svelte';
    import NewsGrid from '$lib/components/home/NewsGrid.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

{#if data.banner}
    <ProductBanner banner={data.banner} />
{/if}
<Menutab />
<div class="font-sans flex flex-col max-w-7xl mx-auto p-6 gap-6">
    <div>
        <p class='text-neutral-600'>สินค้าทั้งหมด</p>
        <h2 class="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
            สร้างความเป็นส่วนตัวให้กับบ้าน
        </h2>
    </div>
    <NewsGrid news={data.productNews} disablePopup={true} />
    
    <div class="mt-8">
            <span
            class="flex items-start justify-between w-full mb-6"
            id="product"
        >
            <div>
                <h1 class="text-start text-neutral-500">สินค้า</h1>
                <h1 class="text-start text-xl text-neutral-700 font-semibold">
                    เพื่มความเป็นส่วนตัวให้กับบ้านคุณ
                </h1>
            </div>
            <h1 class="text-start text-base text-neutral-500">ดูทั้งหมด</h1>
        </span>
    </div>
    
</div>
