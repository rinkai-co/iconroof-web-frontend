<script lang="ts">
  import { page } from '$app/stores';
  import { ArrowUpRight } from "lucide-svelte";
  import Menutab from "$lib/components/home/Menutab.svelte";

  function isActive(path: string) {
    return $page.url.pathname === path;
  }
</script>

<div class="sticky top-0 z-50 font-sans bg-neutral-50">
  <section class="flex items-center justify-between max-w-7xl mx-auto py-2 px-4 h-[72px]">
    <a href="/">
      <img src="/icr-n-o.svg" alt="Logo" width={100} height={32} class="h-8 w-auto" />
    </a>
    <div class="md:flex hidden gap-6 text-neutral-500">
      <a
        href="/"
        class={`flex-shrink-0 transition-colors ${isActive("/")
          ? "text-neutral-700 font-medium"
          : "hover:text-neutral-700"
          }`}
      >
        หน้าแรก
      </a>
      <a
        href="/products"
        class={`flex-shrink-0 transition-colors ${isActive("/products")
          ? "text-neutral-700 font-medium"
          : "hover:text-neutral-700"
          }`}
      >
        สินค้า
      </a>
      <a
        href="/preview"
        class={`flex-shrink-0 transition-colors ${isActive("/preview")
          ? "text-neutral-700 font-medium"
          : "hover:text-neutral-700"
          }`}
      >
        ผลงาน
      </a>
      <a
        href="/"
        class="flex-shrink-0 hover:text-neutral-700 transition-colors"
      >
        ช่างทำระแนง
      </a>
      <a
        href="https://www.xn--42cf7cl0c9a5bk1kzc.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-shrink-0 hover:text-neutral-700 transition-colors"
      >
        แผ่นหลังคา
        <ArrowUpRight class="inline-block ml-1 h-4 w-4" />
      </a>
    </div>
    <a
      href="https://lin.ee/8BsKFek"
      target="_blank"
      class="flex whitespace-nowrap shrink-0 items-center bg-white border border-neutral-100 py-1 px-3 text-neutral-700 rounded-full text-sm font-semibold shadow-sm"
    >
      ซื้อสินค้า
    </a>
  </section>
  <!-- TODO: Implement Menutab -->
  <Menutab />
</div>
