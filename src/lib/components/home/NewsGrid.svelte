<script lang="ts">
  import type { NewsArticle } from "$lib/types";
  import NewsCard from "./NewsCard.svelte";
  import NewsPopup from "./NewsPopup.svelte";

  interface Props {
    news: NewsArticle[];
    disablePopup?: boolean;
  }

  let { news, disablePopup = false }: Props = $props();

  const DEFAULT_LAYOUT_CLASSES = [
    "md:row-span-4 h-64 md:h-full",
    "md:col-span-2 md:row-span-2 h-64",
    "md:col-span-1 md:row-span-2 h-64 md:h-full",
    "md:col-span-1 md:row-span-2 h-64 md:h-full"
  ];

  let selectedNews = $state<NewsArticle | null>(null);

  function openPopup(item: NewsArticle) {
    if (disablePopup) return;
    selectedNews = item;
  }

  function closePopup() {
    selectedNews = null;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closePopup();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="grid grid-cols-1 md:grid-cols-none md:grid-flow-col md:grid-rows-4 gap-4 w-full">
  {#each news as item, index (item.id)}
    {@const className = item.className ||
        (news.length === 3 && index === 2
          ? "md:col-span-2 md:row-span-2 h-64"
          : DEFAULT_LAYOUT_CLASSES[index % DEFAULT_LAYOUT_CLASSES.length])
    }
    <NewsCard 
        news={item} 
        {className}
        onClick={() => {
            if (disablePopup) {
                window.location.href = item.linkUrl;
            } else {
                openPopup(item);
            }
        }}
    />
  {/each}
</div>

{#if selectedNews}
    <NewsPopup news={selectedNews} onClose={closePopup} />
{/if}
