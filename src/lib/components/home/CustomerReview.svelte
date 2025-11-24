<script lang="ts">
  const reviews = [
      {
          id: 1,
          name: "Supachai W.",
          reviewAt: "Facebook",
          comment: "เป็นเวลา 2 วันที่ติดตั้งระแนงไวนิลจากช่างของ ICONROOF ได้รับการบริการที่ดีเยี่ยมเลยครับ ช่างทั้งสามคนที่เข้ามาติดตั้งฝีมือดีมาก งานเนี๊ยบ ใจเย็น พูดจาสุภาพ ขอแนะนำเลยครับ ชอบผลงานมาก ๆ เลยครับ",
          rating: 5,
          imageUrl: "/review/re-1.webp",
          link: "https://www.facebook.com/share/p/1D3pLsWs1f/"
      },
      {
          id: 2,
          name: "Natalie S.",
          reviewAt: "Facebook",
          comment: "งานดี มีคุณภาพ ติดตั้งไวและสวย ทีมงานติดตั้งชำนาญ มีประสบการณ์ จบงานได้ไว ส่วนตัวกับแฟน ชอบมากๆ ค่ะ ติดแล้ว บ้านก็ยังดูสวย ดูทันสมัย และดูแพง",
          rating: 5,
          imageUrl: "/review/re-2.webp",
          link: "https://www.facebook.com/share/p/16XC85rjqo/"
      },
      {
          id: 3,
          name: "AuTing W.",
          reviewAt: "Facebook",
          comment: "งานระแนง งานหลังคาโรงรถ เรียบร้อย สวยงาม ทีมช่างมีความชำนาญ ทำงาน เก็บงานเรียบร้อยมากค่ะ",
          rating: 4,
          imageUrl: "/review/re-3.webp",
          link: "https://www.facebook.com/share/p/1E7BUrY35V/"
      },
      {
          id: 4,
          name: "Atitaya T.",
          reviewAt: "Facebook",
          comment: "เราติดระแนงบังตาไปค่ะ ช่างสุภาพ ทำงานเรียบร้อย เก็บงานดี มีเก็บสีด้านหลังระแนงให้ด้วย ทำไวดี วันเดียวเสร็จ หลังจากทำงานเสร็จ ก็เก็บกวาดบ้าน บริเวณนั้นให้อีก ประทับใจค่ะ",
          rating: 5,
          imageUrl: "/review/re-4.webp",
          link: "https://www.facebook.com/share/p/14TUa4FT8r9/"
      },
  ];
</script>

<div class="flex flex-col w-full gap-6">
    <span class='flex flex-col w-full'>
        <p class='text-neutral-600'>รีวิว</p>
        <h2 class="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
            รีวิวจากลูกค้าของเรา
        </h2>
    </span>
    <div class="w-full overflow-hidden pb-6">
        <div class="flex gap-4 w-max animate-scroll hover:[animation-play-state:paused]">
            {#each [...reviews, ...reviews] as review, index (index)}
                <a
                    href={review.link || '#'}
                    target={review.link ? "_blank" : undefined}
                    class="relative w-[300px] md:w-[350px] h-[500px] rounded-2xl overflow-hidden group flex-shrink-0 block"
                >
                    <img
                        src={review.imageUrl}
                        alt={`Review by ${review.name}`}
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                    <div class="relative z-10 flex flex-col h-full p-6 justify-end gap-4">
                        <div class="overflow-hidden transition-all duration-500 ease-in-out max-h-[120px] group-hover:max-h-[500px]">
                            <p class="text-neutral-50 font-medium text-2xl leading-relaxed line-clamp-3 group-hover:line-clamp-none">
                                "{review.comment}"
                            </p>
                        </div>
                        <div class="flex items-center gap-3 pt-2 border-t border-white/20">
                            <div class="flex flex-col">
                                <span class="text-sm font-semibold text-white">{review.name}</span>
                                <span class="text-xs text-neutral-300">{review.reviewAt}</span>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
