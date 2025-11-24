<script lang="ts">
  import { ChevronDown } from "lucide-svelte";

  interface Props {
    question: string;
    answer: string;
  }

  let { question, answer }: Props = $props();
  let isOpen = $state(false);
</script>

<div class="border-b border-neutral-200">
  <button
    onclick={() => (isOpen = !isOpen)}
    class="flex w-full justify-between items-center text-left focus:outline-none py-2"
  >
    <p class="font-medium text-neutral-800 text-xl">{question}</p>
    <ChevronDown
      class={`text-neutral-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
        }`}
    />
  </button>
  <div
    class={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pt-4 pb-6 " : "grid-rows-[0fr] opacity-0"
      }`}
  >
    <div class="overflow-hidden text-neutral-600">
      {answer}
    </div>
  </div>
</div>
