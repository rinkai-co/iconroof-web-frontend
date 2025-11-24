<script lang="ts">
  import { page } from '$app/stores';
  import { ArrowUpRight } from "lucide-svelte";

  interface MenuItem {
    label: string;
    href: string;
    external?: boolean;
  }

  const menuItems: MenuItem[] = [
    { label: "หน้าแรก", href: "/" },
    { label: "สินค้า", href: "/products" },
    { label: "ผลงานติดตั้ง", href: "/preview" },
    { label: "บทความ", href: "/blogs" },
    { label: "ช่างทำระแนง", href: "#" },
    { label: "แผ่นหลังคา", href: "https://www.xn--42cf7cl0c9a5bk1kzc.com/", external: true },
  ];

  function isActive(href: string) {
    if (href === "/") {
      return $page.url.pathname === "/";
    }
    return $page.url.pathname === href || $page.url.pathname.startsWith(`${href}/`);
  }
</script>

<div class="sticky top-[72px] z-40 w-full md:hidden bg-neutral-50 border-y border-neutral-200 font-sans px-6 md:px-8">
  <div class="relative max-w-7xl mx-auto">
    <section
      class="flex font-medium items-center gap-6 h-12 overflow-x-auto no-scrollbar text-neutral-500"
      id="menu-tab"
    >
      {#each menuItems as item}
        <a
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          class={`flex-shrink-0 transition-colors ${!item.external && isActive(item.href)
            ? "text-neutral-700 font-medium"
            : "hover:text-neutral-700"
            }`}
        >
          {item.label}
          {#if item.external}
            <ArrowUpRight class="inline-block ml-1 h-4 w-4" />
          {/if}
        </a>
      {/each}
    </section>

    <div class="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none"></div>
  </div>
</div>
