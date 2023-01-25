<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://45.79.208.204:8080');


    onMount(() => {
        if(!pb.authStore.isValid){
			goto('/login/signin')
		} else {
            goto('/app')
        }
	})

</script>

<h1>HELLO WORLD</h1>