<script>

	import PocketBase from 'pocketbase';
	import { goto } from '$app/navigation';

	
	const pb = new PocketBase('http://45.79.208.204:8080');

	const logout = () => {
		pb.authStore.clear();
		goto('/login/signin')
	}

</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li tabindex="-1">
					<div class="justify-between">
					  Historical
					  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
					</div>
					<ul class="p-2">
					  <li><a href="/app/today/temp">Today</a></li>
					  <li><a href="/app/modules/onetemp">Modules</a></li>
					</ul>
				  </li>
				<li><a href="/app/live">Live</a></li>
			</ul>
		</div>
		<a href="/app" class="btn btn-ghost normal-case text-xl">Hydro Monitering</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li tabindex="-1">
				<div class="justify-between">
				  Historical
				  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
				</div>
				<ul class="p-2">
				  <li><a href="/app/today/temp">Today</a></li>
				  <li><a href="/app/modules/onetemp">Modules</a></li>
				</ul>
			  </li>
			<li><a href="/app/live">Live</a></li>
		</ul>
	</div>
	<div class="navbar-end">
	  	<button on:click={logout} class="btn">Logout</button>
	</div>
</div>