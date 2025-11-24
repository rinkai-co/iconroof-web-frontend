<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  let { class: className, ...props }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class="animate-pulse rounded-md bg-neutral-200 {className}"
  {...props}
></div>
