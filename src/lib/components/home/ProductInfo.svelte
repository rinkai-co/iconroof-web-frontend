<script>
  import Image from '$lib/components/ui/Image.svelte';
</script>

<section class="">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Content Section -->
      <div class="space-y-8">
        <!-- Heading -->
        <div>
          <p class='text-neutral-600'>ระแนงไวนิล วีจีเวนโต้</p>
          <h2 class="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
            ออกแบบเพื่อสภาพอากาศของประเทศไทยโดยเฉพาะ
          </h2>
          <p class="text-base sm:text-lg text-neutral-600 leading-relaxed">
            เปลี่ยนบ้านของคุณด้วยบริการหลังคาพรีเมียม วัสดุคุณภาพ การติดตั้งที่เชี่ยวชาญ และการป้องกันที่ยาวนาน
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-row gap-2">
          <a href="https://line.me/ti/p/@plk2013" target='_blank' class='px-5 py-2 border-2 border-neutral-800 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors font-semibold'>
            สั่งซื้อสินค้า
          </a>
          <a href="https://line.me/ti/p/@plk2013" target='_blank' class='px-5 py-2 border-2 border-neutral-800 text-neutral-800 rounded-full hover:opacity-80 transition-colors font-semibold'>
            ดูรายละเอียด
          </a>
        </div>
      </div>

      <!-- Image Section -->
      <div class="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          alt="Product showcase"
          src="/src/lib/assets/images/product/test-1.jpg"
          class="absolute inset-0 w-full h-full object-cover rounded-sm"
        />
      </div>
    </div>
  </div>
</section>
