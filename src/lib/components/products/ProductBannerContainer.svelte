<script lang="ts">
  import ProductBanner from './ProductBanner.svelte';
  import type { Product, Banner } from "$lib/types";
  import { getMockBannerAsync } from "$lib/mock-data";

  interface Props {
    id?: string;
    product?: Product;
    fullScreen?: boolean;
  }

  let { id, product, fullScreen }: Props = $props();
  let banner = $state<Banner | undefined>(undefined);

  $effect(() => {
    if (product) {
      banner = {
        id: product.id,
        title: product.name,
        subtitle: `${product.brand} - ${product.category}`,
        description: product.description,
        imageUrl: product.imageUrl,
        linkUrl: `/products/${product.id}`
      };
    } else if (id) {
      getMockBannerAsync(id).then(b => banner = b);
    }
  });
</script>

{#if banner}
  <ProductBanner {banner} {fullScreen} />
{/if}
