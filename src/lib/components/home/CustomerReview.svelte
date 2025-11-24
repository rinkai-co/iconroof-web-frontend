<script lang="ts">
    import type { CustomerReview } from "$lib/types";
    import Image from "$lib/components/ui/Image.svelte";

    interface Props {
        customerReviews: CustomerReview[];
    }

    let { customerReviews }: Props = $props();
</script>

<div class="flex flex-col w-full gap-6">
    <span class='flex flex-col w-full'>
        <p class='text-neutral-600'>รีวิว</p>
        <h2 class="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
            รีวิวจากลูกค้าของเรา
        </h2>
    </span>
    <div class="w-full overflow-hidden pb-6">
        <div class="flex gap-4 w-max animate-scroll hover:[animation-play-state:paused]">
            {#each [...customerReviews, ...customerReviews] as review, index (index)}
                <a
                    href={review.linkUrl || '#'}
                    target={review.linkUrl ? "_blank" : undefined}
                    class="relative w-[300px] md:w-[350px] h-[500px] rounded-2xl overflow-hidden group flex-shrink-0 block"
                >
                    <Image
                        src={review.imageUrl}
                        alt={`Review by ${review.name}`}
                        sizes="(min-width: 768px) 350px, 300px"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                    <div class="relative z-10 flex flex-col h-full p-6 justify-end gap-4">
                        <div class="overflow-hidden transition-all duration-500 ease-in-out max-h-[120px] group-hover:max-h-[500px]">
                            <p class="text-neutral-50 font-medium text-2xl leading-relaxed line-clamp-3 group-hover:line-clamp-none">
                                "{review.comment}"
                            </p>
                        </div>
                        <div class="flex items-center gap-3 pt-2 border-t border-white/20">
                            <div class="flex flex-col">
                                <span class="text-sm font-semibold text-white">{review.name}</span>
                                <span class="text-xs text-neutral-300">{review.reviewAt}</span>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
