<script lang="ts">
  import { MessageCircleQuestion } from "lucide-svelte";
  import type { FAQItem } from "$lib/types";
  import FAQItemComp from "./FAQItemComp.svelte";

  interface Props {
    faqItems: FAQItem[];
  }

  let { faqItems }: Props = $props();
</script>

<section class="flex flex-col items-start justify-center mt-4 min-w-full gap-4">
  <span class='flex flex-col w-full'>
    <p class='text-neutral-600'>คำถามที่พบบ่อย</p>
    <h2 class="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
      ปรึกษาฟรี
    </h2>
  </span>
  <div class="flex flex-col gap-2 w-full">
    {#each faqItems as item (item.id)}
      <FAQItemComp question={item.question} answer={item.answer} />
    {/each}
  </div>
</section>
