<script>
	import './styles.css';
	import { goto } from '$app/navigation';
	import PocketBase from 'pocketbase';
    import { onMount } from 'svelte';

	const pb = new PocketBase('https://vmihydro.com');

	onMount(() => {
		if(!pb.authStore.isValid){
			goto('/login/signin')
		}
	})

</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>
