<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ y: -10, duration: 300, delay: 300 }} out:fly={{ y: 10, duration: 100 }}>
		<slot />
	</div>
{/key}