<script>

  export let data;
  export let type;

</script>

<div class="overflow-x-auto">
    <table class="table table-compact w-full">
      <thead>
        <tr>
          <th></th> 
          <th>Time</th> 
          <th>Sector One</th> 
          <th>Sector Two</th> 
          <th>Sector Three</th> 
        </tr>
      </thead> 
      <tbody>
        {#each data.reverse() as d, i}
          <tr>
            <th>{i + 1}</th> 
            <td>{new Date(d.created).toLocaleTimeString()}</td> 
            <td>{d.one}
              {#if type == "humid"}
                  %
              {:else}
                  F
              {/if}
            </td> 
            <td>{d.two}
              {#if type == "humid"}
                  %
              {:else}
                  F
              {/if}
            </td> 
            <td>{d.three}
              {#if type == "humid"}
                  %
              {:else}
                  F
              {/if}
            </td> 
          </tr>
        {/each}
      </tbody> 
    </table>
  </div>