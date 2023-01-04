<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // import { Line } from 'svelte-chartjs'

    // import SensorTable from '$lib/id/SensorTable.svelte';
    import ModulesSensorTable from '$lib/id/ModulesSensorTable.svelte';
    // import LineChart from '$lib/id/LineChart.svelte';
    import ModulesLineChart from '$lib/id/ModulesLineChart.svelte';

    
</script>

<h1 class="text-4xl font-bold pb-10">{data.title}</h1>

{#if data.type == "onetemp"}
    <ModulesLineChart lineData={data.data}/>    
{/if}

{#if data.type == "twotemp"}
    <ModulesLineChart lineData={data.data}/>
{/if}

{#if data.type == "threetemp"}
    <ModulesLineChart lineData={data.data}/>
{/if}

{#if data.type == "onehumid"}
    <ModulesLineChart lineData={data.data}/>
{/if}

{#if data.type == "twohumid"}
    <ModulesLineChart lineData={data.data}/>
{/if}

{#if data.type == "threehumid"}
    <ModulesLineChart lineData={data.data}/>
{/if}



<ModulesSensorTable data={data.data}/>         