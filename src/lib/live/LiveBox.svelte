<script>

    import { onMount, onDestroy } from 'svelte';
    import PocketBase from "pocketbase"

    export let type;
    export let coll;

    const pb = new PocketBase('https://vmihydro.com');

    $: liveValue = {
        one: 0,
        two: 0,
        three: 0
    };

    onMount(async () => {

        const resultList = await pb.collection(coll).getList(1, 1, {
            sort: '-created'
        });

        liveValue = resultList.items[0]

        pb.collection(coll).subscribe('*', function (e) {
            liveValue = e.record
        });
    });

</script>

<h1 class="text-4xl font-bold p-10 text-left">{type} LIVE</h1>

<div class="grid justify-items-center p-10">
    <div class="stats shadow w-full">
        <div class="stat">
            <div class="stat-title">Sector One</div>
            <div class="stat-value text-primary">{liveValue.one}
                {#if type == "Humidity"}
                    %
                {:else}
                    F
                {/if}
        </div>
        </div>
        <div class="stat">
            <div class="stat-title">Sector Two</div>
            <div class="stat-value text-primary">{liveValue.two}
                {#if type == "Humidity"}
                    %
                {:else}
                    F
                {/if}</div>
          </div>
          <div class="stat">
            <div class="stat-title">Sector Three</div>
            <div class="stat-value text-primary">{liveValue.three}
                {#if type == "Humidity"}
                    %
                {:else}
                    F
                {/if}
            </div>
          </div>
      </div>
</div>