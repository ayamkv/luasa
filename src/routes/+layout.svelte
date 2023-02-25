
<script>
    import "../style.css";
    import Transition from '$lib/components/Transition.svelte';
	export let data;
</script>

<svelte:head>
    <link rel="icon" href="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Ghost/3D/ghost_3d.png">
</svelte:head>

  
<Transition pathname={data.currentPath}>
    <slot />
</Transition>
