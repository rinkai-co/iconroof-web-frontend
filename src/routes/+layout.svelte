<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import ConditionNavbar from '$lib/components/layout/ConditionNavbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof</title>
	<meta
		name="description"
		content="ไอคอนรูฟ จำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น."
	/>
	<meta
		name="keywords"
		content="amigo, ระแนงบังตา, ระแนงบังตาไวนิล, ระแนงบังตาไวนิล AMIGO, upvc, Amigo, scg ระแนงชิด, ระแนงเว้นร่อง, ระแนงบานเกล็ด, ระแนงบังแดด, ระแนงตกแต่งบ้าน, ระแนงระเบียง, ระแนงกันแดด, ระแนงบังสายตา, ระแนงหน้าบ้าน, ระแนงข้างบ้าน, ระแนงแต่งบ้าน, ระแนงแต่งสวน, ไวนิลบังตา, แผ่นไวนิล, ไวนิลตกแต่ง, ไวนิลภายนอก, ไวนิลภายใน, วัสดุตกแต่งบ้าน, วัสดุก่อสร้าง, หลังคาไวนิล, หลังคาไวนิล AMIGO, ไวนิลคุณภาพสูง, ไวนิลราคาถูก, วัสดุตกแต่งภายนอก, แผ่นไวนิลทนแดด, แผ่นไวนิลทนน้ำ, ไวนิลตกแต่งผนัง, ผนังไวนิล, ไวนิลตกแต่งภายนอก, ติดตั้งระแนง, ช่างติดตั้งระแนง, ระแนงสำเร็จรูป, ผลิตภัณฑ์ไวนิล, ไวนิลกันน้ำ, ไวนิลกันปลวก, วัสดุกันความร้อน, ไวนิลทนฝน, วัสดุก่อสร้างบ้าน, สร้างบ้าน, รีโนเวทบ้าน, บ้านสวยด้วยไวนิล, ไอคอนรูฟ, Iconroof, ไวนิล Amigo, ระแนง, ระ แนง, ระแน ง, บังตา, ฝ้า, ไอคอนรุฟ"
	/>
	<meta
		property="og:title"
		content="ไอคอนรูฟ จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof"
	/>
	<meta
		property="og:description"
		content="ไอคอนรูฟ บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น."
	/>
	<meta property="og:url" content="https://beta.iconroof.co.th/" />
	<meta property="og:site_name" content="Iconroof" />
	<meta
		property="og:image"
		content="https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="iconroof ระแนง" />
	<meta property="og:locale" content="th_TH" />
	<meta property="og:type" content="website" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=Noto+Sans+Thai:wght@100..900&display=swap"
		rel="stylesheet"
	/>

	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-TKH6XPJN');</script>
	<!-- End Google Tag Manager -->

	<!-- Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-M74LW8G72T"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'G-M74LW8G72T');
	</script>
	<!-- End Google Analytics -->
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKH6XPJN"
height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<ConditionNavbar />

{@render children()}

<Footer />
