<script lang="ts">
  import { page } from '$app/stores';
  import NavbarDefault from './NavbarDefault.svelte';
  import NavbarMain from './NavbarMain.svelte';

  let pathname = $derived($page.url.pathname);
</script>

{#if pathname === '/' || pathname.startsWith('/product') || pathname.startsWith('/blogs')}
  <NavbarMain />
{:else}
  <NavbarDefault />
{/if}
