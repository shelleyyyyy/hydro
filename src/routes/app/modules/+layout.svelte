<script>

</script>

<div class="flex">
    <div class=" m-5 rounded-2xl min-h-full bg-base-200">
        <h1 class="px-5 pt-5 font-bold text-2xl">Modules</h1>
        <div>
            <ul class="menu bg-base-200 w-56 p-2 rounded-box">
                <li tabindex="-1">
                    <span>Sector One</span>
                    <ul class="bg-base-200">
                        <li><a href="/app/modules/onetemp">Temperature</a></li>
                        <li><a href="/app/modules/onehumid">Humidity</a></li>
                    </ul>
                </li>
                <li tabindex="-1">
                    <span>Sector Two</span>
                    <ul class="bg-base-200">
                        <li><a href="/app/modules/twotemp">Temperature</a></li>
                        <li><a href="/app/modules/twohumid">Humidity</a></li>
                    </ul>
                </li>
                <li tabindex="-1">
                    <span>Sector Three</span>
                    <ul class="bg-base-200">
                        <li><a href="/app/modules/threetemp">Temperature</a></li>
                        <li><a href="/app/modules/threehumid">Humidity</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <div class="p-5 grid justify-items-center w-full">
        <div class="w-full">
            <slot/>
        </div>
    </div>
</div>