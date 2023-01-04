<script>

    export let data;
      
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
          {#each data as d}
  
            <tr>
              <th>1</th> 
              <td>{d.created}</td> 
              <td>{d.avg}</td> 
              <td>{d.min}</td> 
              <td>{d.max}</td> 
            </tr>
            
          {/each}
        </tbody> 
      </table>
    </div>