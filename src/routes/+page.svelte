<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('https://vmihydro.com');


    onMount(() => {
        if(!pb.authStore.isValid){
			goto('/login/signin')
		} else {
            goto('/app')
        }
	})

</script>

<h1>HELLO WORLD</h1>