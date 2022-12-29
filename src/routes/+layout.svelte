<script>
	import './styles.css';
	import { goto } from '$app/navigation';
	import PocketBase from 'pocketbase';
    import { onMount } from 'svelte';

	const pb = new PocketBase('http://45.79.208.204:8080');

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
