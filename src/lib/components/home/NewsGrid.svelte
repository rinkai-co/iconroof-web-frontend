<script lang="ts">
  import { X } from "lucide-svelte";
  import type { NewsArticle } from "$lib/types";
  import { fade, scale } from 'svelte/transition';

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
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class={`group relative flex w-full overflow-hidden rounded-lg cursor-pointer ${
        item.className ||
        (news.length === 3 && index === 2
          ? "md:col-span-2 md:row-span-2 h-64"
          : DEFAULT_LAYOUT_CLASSES[index % DEFAULT_LAYOUT_CLASSES.length])
      }`}
      onclick={() => {
          if (disablePopup) {
              // Handle link navigation if popup is disabled
              window.location.href = item.linkUrl;
          } else {
              openPopup(item);
          }
      }}
    >
      <div class="absolute bottom-0 left-0 z-20 flex flex-col justify-between items-start w-full p-6 text-white">
        <div>
          <h1 class="text-start text-base">{item.category}</h1>
          <h1 class="text-start text-3xl font-semibold">{item.title}</h1>
          <p class="mt-2 overflow-hidden transition-all duration-500 ease-in-out max-h-6 line-clamp-1 group-hover:max-h-40 group-hover:line-clamp-none">
            {item.description}
          </p>
        </div>
        <div class="overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <div
            class="flex items-center bg-white border border-neutral-100 py-1 px-3 text-neutral-700 rounded-full text-sm font-semibold shadow-sm mt-4 whitespace-nowrap shrink-0 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            ดูรายละเอียด
          </div>
        </div>
      </div>
      <div class="absolute inset-0 z-10 bg-gradient-to-t from-neutral-900/90 to-transparent group-hover:from-black group-hover:via-black/60 group-hover:to-transparent transition-all duration-300"></div>
      <img
        src={item.imageUrl}
        alt={item.title}
        class="absolute h-full w-full object-cover"
      />
    </div>
  {/each}
</div>

{#if selectedNews}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
        transition:fade
        onclick={closePopup}
    >
        <div
            class="bg-white rounded-xl overflow-hidden max-w-3xl lg:max-w-7xl w-full shadow-2xl relative max-h-[90vh] lg:h-[85vh] flex flex-col lg:flex-row"
            onclick={(e) => e.stopPropagation()}
            transition:scale
        >
            <button
                onclick={closePopup}
                class="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white lg:text-neutral-500 lg:bg-transparent lg:hover:bg-neutral-100 rounded-full transition-colors z-10"
            >
                <X class="w-5 h-5" />
            </button>
            <div class="h-64 md:h-80 lg:h-auto relative w-full lg:w-1/2 shrink-0">
                <img
                    src={selectedNews.imageUrl}
                    alt={selectedNews.title}
                    class="absolute h-full w-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6 text-white">
                    <span class="text-sm font-medium py-1 rounded">{selectedNews.category}</span>
                    <h2 class="text-3xl font-bold mt-2">{selectedNews.title}</h2>
                    <p class="mt-2">
                        {selectedNews.description}
                    </p>

                </div>
            </div>
            <div class="flex flex-col w-full lg:w-1/2 flex-1 min-h-0 overflow-hidden">
                <div class="p-6 md:p-8 overflow-y-auto flex-1">
                    <p class="text-neutral-600 leading-relaxed text-lg">
                        {selectedNews.content}
                    </p>
                </div>
                <div class="p-6 md:p-8 border-t border-neutral-100 flex justify-end shrink-0 bg-white">
                    <a
                        href={selectedNews.linkUrl}
                        class="flex items-center bg-neutral-900 hover:bg-neutral-700 border border-neutral-700 py-1 px-3 text-neutral-100 rounded-full text-sm font-semibold shadow-sm"
                    >
                        ดูเพิ่มเติม
                    </a>
                </div>
            </div>
        </div>
    </div>
{/if}
