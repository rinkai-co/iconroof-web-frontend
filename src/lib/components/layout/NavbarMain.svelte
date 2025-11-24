<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { ArrowUpRight } from "lucide-svelte";

  let scrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 100;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function isActive(path: string) {
    return $page.url.pathname === path;
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
      <a
        href="/"
        class={`flex-shrink-0 transition-colors ${isActive("/")
          ? scrolled
            ? "text-neutral-950 font-medium"
            : "text-neutral-50 font-medium"
          : scrolled
            ? "hover:text-neutral-700"
            : "hover:text-neutral-100"
          }`}
      >
        หน้าแรก
      </a>
      <a
        href="/products"
        class={`flex-shrink-0 transition-colors ${isActive("/products") || $page.url.pathname.startsWith("/products/")
          ? scrolled
            ? "text-neutral-950 font-medium"
            : "text-neutral-50 font-medium"
          : scrolled
            ? "hover:text-neutral-700"
            : "hover:text-neutral-100"
          }`}
      >
        สินค้า
      </a>
      <a
        href="/preview"
        class={`flex-shrink-0 transition-colors ${isActive("/preview")
          ? scrolled
            ? "text-neutral-950 font-medium"
            : "text-neutral-50 font-medium"
          : scrolled
            ? "hover:text-neutral-700"
            : "hover:text-neutral-100"
          }`}
      >
        ผลงาน
      </a>
      <a
        href="/blogs"
        class={`flex-shrink-0 transition-colors ${isActive("/blogs") || $page.url.pathname.startsWith("/blogs/")
          ? scrolled
            ? "text-neutral-950 font-medium"
            : "text-neutral-50 font-medium"
          : scrolled
            ? "hover:text-neutral-700"
            : "hover:text-neutral-100"
          }`}
      >
        บทความ
      </a>
      <a
        href="/"
        class={`flex-shrink-0 transition-colors ${scrolled ? "hover:text-neutral-700" : "hover:text-neutral-100"}`}
      >
        ช่างทำระแนง
      </a>
      <a
        href="https://www.xn--42cf7cl0c9a5bk1kzc.com/"
        target="_blank"
        rel="noopener noreferrer"
        class={`flex-shrink-0 transition-colors ${scrolled ? "hover:text-neutral-700" : "hover:text-neutral-100"}`}
      >
        แผ่นหลังคา
        <ArrowUpRight class="inline-block ml-1 h-4 w-4" />
      </a>
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
