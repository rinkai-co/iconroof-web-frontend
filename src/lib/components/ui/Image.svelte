<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		src: string;
		alt?: string;
		class?: string;
		width?: string | number;
		height?: string | number;
		[key: string]: any;
	}

	let { src, alt = '', class: className = '', ...rest }: Props = $props();

	// Lazy glob import - this is static analysis by Vite
	const modules = import.meta.glob('/src/lib/assets/images/**/*.{webp,jpg,jpeg,png,svg}', {
		query: {
			enhanced: true
		}
	});

	let imageModule = $state<any>(null);

	$effect(() => {
		if (!src) return;

		// Try exact match first
		let loader = modules[src];

		// If not found, try finding by ending (e.g. if src is short path)
		if (!loader) {
			const key = Object.keys(modules).find((k) => k.endsWith(src) || src.endsWith(k));
			if (key) loader = modules[key];
		}

		if (loader) {
			loader().then((m: any) => {
				imageModule = m.default;
			});
		} else {
			console.warn(`Image not found in glob: ${src}`);
		}
	});
</script>

{#if imageModule}
	<enhanced:img src={imageModule} {alt} class={className} {...rest} />
{:else}
    <!-- Fallback empty or skeleton? Or just nothing until loaded? -->
    <!-- If we render img with src, it will 404 because src is a file path, not a URL served by dev server directly unless strictly static -->
    <!-- But for SVGs, enhanced-img might not capture them if they are excluded? My glob includes svg. -->
    <!-- If SVG, enhanced-img might return URL string as default export? -->
    <!-- Let's wait for load. -->
	<div class={`bg-neutral-100 animate-pulse ${className}`} aria-label="Loading image"></div>
{/if}
