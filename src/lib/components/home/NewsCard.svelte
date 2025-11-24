<script lang="ts">
    import type { NewsArticle } from "$lib/types";

    interface Props {
        news: NewsArticle;
        className?: string;
        onClick: () => void;
    }

    let { news, className, onClick }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class={`group relative flex w-full overflow-hidden rounded-lg cursor-pointer ${className}`}
    onclick={onClick}
>
    <div class="absolute bottom-0 left-0 z-20 flex flex-col justify-between items-start w-full p-6 text-white">
        <div>
            <h1 class="text-start text-base">{news.category}</h1>
            <h1 class="text-start text-3xl font-semibold">{news.title}</h1>
            <p class="mt-2 overflow-hidden transition-all duration-500 ease-in-out max-h-6 line-clamp-1 group-hover:max-h-40 group-hover:line-clamp-none">
                {news.description}
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
        src={news.imageUrl}
        alt={news.title}
        class="absolute h-full w-full object-cover"
    />
</div>
