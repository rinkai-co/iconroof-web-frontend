<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowUpRight } from 'lucide-svelte';
	import Menutab from '$lib/components/home/Menutab.svelte';
	import { MENU_ITEMS } from '$lib/constants';

	function isActive(href: string) {
		if (href === "/") {
			return $page.url.pathname === "/";
		}
		return $page.url.pathname === href || $page.url.pathname.startsWith(`${href}/`);
	}
</script>

<div class="sticky top-0 z-50 bg-neutral-50 font-sans">
	<section class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 py-2">
		<a href="/">
			<img src="/icr-n-o.svg" alt="Logo" width={100} height={32} class="h-8 w-auto" />
		</a>
		<div class="hidden gap-6 text-neutral-500 md:flex">
			{#each MENU_ITEMS as item}
				<a
					href={item.href}
					target={item.external ? "_blank" : undefined}
					rel={item.external ? "noopener noreferrer" : undefined}
					class={`flex-shrink-0 transition-colors ${
						!item.external && isActive(item.href) ? 'font-medium text-neutral-700' : 'hover:text-neutral-700'
					}`}
				>
					{item.label}
					{#if item.external}
						<ArrowUpRight class="ml-1 inline-block h-4 w-4" />
					{/if}
				</a>
			{/each}
		</div>
		<a
			href="https://lin.ee/8BsKFek"
			target="_blank"
			class="flex shrink-0 items-center rounded-full border border-neutral-100 bg-white px-3 py-1 text-sm font-semibold whitespace-nowrap text-neutral-700 shadow-sm"
		>
			ซื้อสินค้า
		</a>
	</section>
	<!-- TODO: Implement Menutab -->
	<Menutab />
</div>
