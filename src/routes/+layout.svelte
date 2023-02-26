
<script>
    import "../style.css";
    import Transition from '$lib/components/Transition.svelte';
	export let data;
</script>

<svelte:head>
    <link rel="icon" href="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Ghost/3D/ghost_3d.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
</svelte:head>

  
<Transition pathname={data.currentPath}>
    <slot />
</Transition>
