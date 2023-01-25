<script>
  import { Line } from 'svelte-chartjs';
  import { onMount } from 'svelte';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';

    export let lineData

    let one = []
    let two = []
    let three = []
    let labels = []

    let data = {}

    onMount(() => {
      console.log("LINE", lineData)

      
    })
    for(let i = 0; i < lineData.length; i++){
      one.push(lineData[i].one)
      two.push(lineData[i].two)
      three.push(lineData[i].three)
      const date = new Date(lineData[i].created);
      labels.push(date.toLocaleTimeString())
    }      
    data = {
        labels: labels,
        datasets: [
          {
            label: 'Sector One  ',
            fill: true,
            lineTension: 0.3,
            backgroundColor: 'rgba(225, 204,230, .3)',
            borderColor: 'rgb(205, 130, 158)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(205, 130,1 58)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(0, 0, 0)',
            pointHoverBorderColor: 'rgba(220, 220, 220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: one,
          },
          {
            label: 'Sector Two',
            fill: true,
            lineTension: 0.3,
            backgroundColor: 'rgba(184, 185, 210, .3)',
            borderColor: 'rgb(35, 26, 136)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(35, 26, 136)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(0, 0, 0)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: two
          },
          {
            label: 'Sector Three',
            fill: true,
            lineTension: 0.3,
            backgroundColor: 'rgba(184, 185, 210, .3)',
            borderColor: '#03fcad',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#03fcad',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(0, 0, 0)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: three
          },
        ],
      };


    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
      );

</script>

<Line {data} options={{ responsive: true }} />
