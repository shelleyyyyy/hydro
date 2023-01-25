<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // import { Line } from 'svelte-chartjs'

    import SensorTable from '$lib/id/SensorTable.svelte';
    import LineChart from '$lib/id/LineChart.svelte';

    
</script>

<h1 class="text-4xl font-bold pb-10">{data.title}</h1>

{#if data.type == "temp"}
    <LineChart lineData={data.data}/>    
{/if}

{#if data.type == "humid"}
    <LineChart lineData={data.data}/>
{/if}

<SensorTable type={data.type} data={data.data}/>         