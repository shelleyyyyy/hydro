<script>
    import { goto } from '$app/navigation';

	import PocketBase from 'pocketbase';
    import { onMount } from 'svelte';

	const pb = new PocketBase('http://45.79.208.204:8080');

	onMount(() => {
		if(pb.authStore.isValid){
			goto('/app')
		}
	})

	let username = ""
	let email = ""
	let password = ""
	let passwordConfirm = ""
	let name = ""

	const login = async () => {
		await pb.collection('users').authWithPassword(
			username,
			password,
		);
	}

	const register = async () => {
		const data = {
			"username": username,
			"email": email,
			"emailVisibility": true,
			"password": password,
			"passwordConfirm": passwordConfirm,
			"name": name
		};
		
		try {
			await pb.collection('users').create(data)
			.then(() => {
				login()
				.catch(() => {
					alert("Registration Succesful, error signing in")
				})
				.then(() => {
					if(pb.authStore.isValid){
						goto("/app")
					}
				})
			})
		} catch(e) {
			console.log(e)
			alert("error make sure your password is long enough")
		} 
	}

</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Register now!</h1>
			<p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">username</span>
					</label>
					<input bind:value={username} type="text" placeholder="username" class="input input-bordered" />
				</div>
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">email</span>
					</label>
					<input bind:value={email} type="text" placeholder="email" class="input input-bordered" />
				</div>
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">password</span>
					</label>
					<input bind:value={password} type="password" placeholder="password" class="input input-bordered" />
				</div>
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span  class="label-text password">confirm password</span>
					</label>
					<input bind:value={passwordConfirm} type="password" placeholder="confirm password" class="input input-bordered" />
				</div>
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">full name</span>
					</label>
					<input bind:value={name} type="text" placeholder="full name" class="input input-bordered" />
				</div>
				<div class="form-control mt-6">
					<button on:click={register} class="btn btn-primary">Register</button>
				</div>
			</div>
		</div>
	</div>
</div>
