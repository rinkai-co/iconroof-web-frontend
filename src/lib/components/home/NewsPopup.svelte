<script lang="ts">
    import { X } from "lucide-svelte";
    import { fade, scale } from 'svelte/transition';
    import type { NewsArticle } from "$lib/types";

    interface Props {
        news: NewsArticle;
        onClose: () => void;
    }

    let { news, onClose }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
    transition:fade
    onclick={onClose}
>
    <div
        class="bg-white rounded-xl overflow-hidden max-w-3xl lg:max-w-7xl w-full shadow-2xl relative max-h-[90vh] lg:h-[85vh] flex flex-col lg:flex-row"
        onclick={(e) => e.stopPropagation()}
        transition:scale
    >
        <button
            onclick={onClose}
            class="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white lg:text-neutral-500 lg:bg-transparent lg:hover:bg-neutral-100 rounded-full transition-colors z-10"
        >
            <X class="w-5 h-5" />
        </button>
        <div class="h-64 md:h-80 lg:h-auto relative w-full lg:w-1/2 shrink-0">
            <img
                src={news.imageUrl}
                alt={news.title}
                class="absolute h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6 text-white">
                <span class="text-sm font-medium py-1 rounded">{news.category}</span>
                <h2 class="text-3xl font-bold mt-2">{news.title}</h2>
                <p class="mt-2">
                    {news.description}
                </p>

            </div>
        </div>
        <div class="flex flex-col w-full lg:w-1/2 flex-1 min-h-0 overflow-hidden">
            <div class="p-6 md:p-8 overflow-y-auto flex-1">
                <p class="text-neutral-600 leading-relaxed text-lg">
                    {news.content}
                </p>
            </div>
            <div class="p-6 md:p-8 border-t border-neutral-100 flex justify-end shrink-0 bg-white">
                <a
                    href={news.linkUrl}
                    class="flex items-center bg-neutral-900 hover:bg-neutral-700 border border-neutral-700 py-1 px-3 text-neutral-100 rounded-full text-sm font-semibold shadow-sm"
                >
                    ดูเพิ่มเติม
                </a>
            </div>
        </div>
    </div>
</div>
