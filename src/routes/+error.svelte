<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center gap-4">
	<div class="text-center">
		<h1 class="text-2xl font-medium">{$page.status}</h1>
		<p>{$page.error?.message}</p>
	</div>
	<a href="/">Go to homepage</a>
</div>
