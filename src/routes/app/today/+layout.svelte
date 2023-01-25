<script>

</script>

<div class="flex">
    <div class=" m-5 rounded-2xl min-h-full bg-base-200">
        <h1 class="p-5 font-bold text-2xl">Today</h1>
        <div>
            <ul class="menu bg-base-200 w-56 p-2 rounded-box">
                <li><a href="/app/today/temp">Temperature</a></li>
                <li><a href="/app/today/humid">Humidity</a></li>
            </ul>
        </div>
    </div>
    <div class="p-5 grid justify-items-center w-full">
        <div class="w-full">
            <slot/>
        </div>
    </div>
</div>