<script>

    export let data;
    export let type;
      
  </script>
  
  <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th></th> 
            <th>Date Time</th> 
            <th>Average</th> 
            <th>Min</th> 
            <th>Max</th> 
          </tr>
        </thead> 
        <tbody>
          {#each data.reverse() as d, i}
  
            <tr>
              <th>{i + 1}</th> 
              <td>{new Date(d.created).toLocaleDateString()}</td> 
              <td>{d.avg.toFixed(2)}
                {#if type.includes("humid")}
                    %
                {:else}
                    F
                {/if}
              </td> 
              <td>{d.min}
                {#if type.includes("humid")}
                    %
                {:else}
                    F
                {/if}
              </td> 
              <td>{d.max}
                {#if type.includes("humid")}
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