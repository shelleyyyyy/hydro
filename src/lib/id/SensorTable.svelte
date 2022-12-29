<script>

  export let data;
    
</script>

<div class="overflow-x-auto">
    <table class="table table-compact w-full">
      <thead>
        <tr>
          <th></th> 
          <th>Date Time</th> 
          <th>Sector One</th> 
          <th>Sector Two</th> 
          <th>Sector Three</th> 
        </tr>
      </thead> 
      <tbody>
        {#each data as d}

          <tr>
            <th>1</th> 
            <td>{d.created}</td> 
            <td>{d.one}</td> 
            <td>{d.two}</td> 
            <td>{d.three}</td> 
          </tr>
          
        {/each}
      </tbody> 
    </table>
  </div>