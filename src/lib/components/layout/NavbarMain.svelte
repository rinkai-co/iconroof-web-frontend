<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { ArrowUpRight } from "lucide-svelte";
  import { MENU_ITEMS } from '$lib/constants';

  let scrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 100;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function isActive(href: string) {
    if (href === "/") {
      return $page.url.pathname === "/";
    }
    return $page.url.pathname === href || $page.url.pathname.startsWith(`${href}/`);
  }
</script>

<nav
  class="fixed top-0 z-50 w-full font-sans transition-colors duration-300 {scrolled ? "bg-neutral-50" : ""}"
>
  <section class="flex items-center justify-between max-w-7xl mx-auto py-2 px-4 h-[72px]">
    <a href="/">
      <img
        src={scrolled ? "/icr-n-o.svg" : "/icr-n-w.svg"}
        alt="Logo"
        width={100}
        height={32}
        class="h-8 w-auto"
      />
    </a>

    <div
      class="md:flex gap-6 transition-colors hidden {scrolled ? "text-neutral-500" : "text-neutral-200"}"
    >
      {#each MENU_ITEMS as item}
        <a
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          class={`flex-shrink-0 transition-colors ${
            !item.external && isActive(item.href)
              ? scrolled
                ? "text-neutral-950 font-medium"
                : "text-neutral-50 font-medium"
              : scrolled
                ? "hover:text-neutral-700"
                : "hover:text-neutral-100"
            }`}
        >
          {item.label}
          {#if item.external}
            <ArrowUpRight class="inline-block ml-1 h-4 w-4" />
          {/if}
        </a>
      {/each}
    </div>

    <a
      href="https://lin.ee/8BsKFek"
      target="_blank"
      class="flex items-center bg-white border whitespace-nowrap shrink-0 border-neutral-100 py-1 px-3 text-neutral-700 rounded-full text-sm font-semibold shadow-sm"
    >
      ซื้อสินค้า
    </a>
  </section>
</nav>
