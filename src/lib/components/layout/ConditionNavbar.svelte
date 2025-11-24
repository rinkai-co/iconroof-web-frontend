<script lang="ts">
	import { page } from '$app/stores';
	import NavbarDefault from './NavbarDefault.svelte';
	import NavbarMain from './NavbarMain.svelte';
</script>

{#if $page.status >= 400}
	<NavbarDefault />
{:else}
	<NavbarMain />
{/if}