<script lang="ts">
  import ProductBanner from './ProductBanner.svelte';
  import type { Product, Banner } from "$lib/types";

  interface Props {
    product: Product;
    fullScreen?: boolean;
  }

  let { product, fullScreen }: Props = $props();
  
  let banner = $derived<Banner>({
    id: product.id,
    title: product.name,
    subtitle: `${product.brand} - ${product.category}`,
    description: product.description,
    imageUrl: product.imageUrl,
    linkUrl: `/products/${product.id}`
  });
</script>

<ProductBanner {banner} {fullScreen} />
