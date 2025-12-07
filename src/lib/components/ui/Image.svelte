<script lang="ts">
	interface Props {
		src: string;
		alt?: string;
		class?: string;
		width?: string | number;
		height?: string | number;
		[key: string]: any;
	}

	let { src, alt = '', class: className = '', ...rest }: Props = $props();

	// Map src paths to static URLs
	const modules = import.meta.glob('/src/lib/assets/images/**/*.{webp,jpg,jpeg,png,svg}', {
		eager: true,
		query: '?url',
		import: 'default'
	}) as Record<string, string>;

	function getImageUrl(srcPath: string): string | null {
		if (!srcPath) return null;

		// Try exact match first
		if (modules[srcPath]) return modules[srcPath];

		// Try finding by ending
		const key = Object.keys(modules).find((k) => k.endsWith(srcPath) || srcPath.endsWith(k));
		return key ? modules[key] : null;
	}

	const imageUrl = $derived(getImageUrl(src));
</script>

{#if imageUrl}
	<img src={imageUrl} {alt} class={className} loading="lazy" {...rest} />
{:else}
	<div class={`bg-neutral-100 animate-pulse ${className}`} aria-label="Loading image"></div>
{/if}
