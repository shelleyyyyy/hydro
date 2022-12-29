<script>
	import Header from '../../lib/app/Header.svelte';
	import '../styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	
</div>
