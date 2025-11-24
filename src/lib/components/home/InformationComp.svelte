<script lang="ts">
  import type { NewsArticle } from "$lib/types";
  import NewsGrid from "./NewsGrid.svelte";

  interface Props {
    newsArticles: NewsArticle[];
  }

  let { newsArticles }: Props = $props();
</script>

<div class="flex flex-col gap-6 w-full">
    <span
        class="flex items-start justify-between w-full"
        id="product"
    >
        <div>
            <p class='text-neutral-600'>บทความ</p>
            <h2 class="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
                ข่าวสารและโปรโมชั่น
            </h2>
        </div>
    </span>

    <NewsGrid news={newsArticles} />
</div>
