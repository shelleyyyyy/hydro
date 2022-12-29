<script>

</script>

<div class="flex">
    <div class=" m-5 rounded-2xl min-h-full bg-base-200">
        <h1 class="px-5 pt-5 font-bold text-2xl">Modules</h1>
        <!-- <div>
            <ul class="menu bg-base-200 w-56 p-2 rounded-box">
                <li tabindex="-1">
                    <span>Sector One</span>
                    <ul class="bg-base-200">
                        <li><a href="/app/data/onetemp">Temperature</a></li>
                        <li><a href="/app/data/onehumid">Humidity</a></li>
                    </ul>
                </li>
                <li tabindex="-1">
                    <span>Sector Two</span>
                    <ul class="bg-base-200">
                        <li><a href="/app/data/twotemp">Temperature</a></li>
                        <li><a href="/app/data/twohumid">Humidity</a></li>
                    </ul>
                </li>
                <li tabindex="-1">
                    <span>Sector Three</span>
                    <ul class="bg-base-200">
                        <li><a href="/app/data/threetemp">Temperature</a></li>
                        <li><a href="/app/data/threehumid">Humidity</a></li>
                    </ul>
                </li>
            </ul>
        </div> -->
        <h1 class="px-5 font-bold text-2xl">All Data</h1>
        <div>
            <ul class="menu bg-base-200 w-56 p-2 rounded-box">
                <li><a href="/app/data/temp">Temperature</a></li>
                <li><a href="/app/data/humid">Humidity</a></li>
            </ul>
        </div>
    </div>
    <div class="p-5 grid justify-items-center w-full">
        <div class="w-full">
            <slot/>
        </div>
    </div>
</div>