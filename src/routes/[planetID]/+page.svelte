<script lang="ts">
    import type { PageData } from './$types';
    import logo from '$lib/assets/planet-earth-internal.svg';
    export let data: PageData;

    // Convert milliseconds to days
    const msInADay = 24 * 60 * 60 * 1000;
    $: rotationInDays = parseFloat((data.rotation / msInADay).toFixed(2));
    $: revolutionInDays = parseFloat((data.revolution / msInADay).toFixed(2));
    $: radiusInKm = parseFloat((data.radius / 1000).toFixed(2));
    $: avgTempInCelsius = `${parseFloat(data.temperature.toFixed(2))}°C`;

    let currentContent = 'overview';

    ``
    function showContent(content) {
        currentContent = content;
    }
</script>
<body class="backgorund_body">
<content class="content">
    <div class="content_big_name">
        {data.name}
    </div>
    <div class="description_of_planet">
        {#if currentContent === 'overview'}
            {data.overview.content}
        {:else if currentContent === 'structure'}
            {data.structure.content}
        {:else if currentContent === 'geology'}
            {data.geology.content}
        {/if}
    </div>

    <div class="info_buttons">
        <button class="content_overview" on:click={() => showContent('overview')}>
            OVERVIEW
        </button>

        <button class="content_internal_structure" on:click={() => showContent('structure')}>
            INTERNAL STRUCTURE
        </button>

        <button class="content_surface_geology" on:click={() => showContent('geology')}>
            SURFACE GEOLOGY
        </button>
    </div>
</content>

<footer class="the_constant_metrics_footer">
    <div class="info_box">
        <div class="info_box_naming">
            rotation time
            <div class="info_box_naming_data">
                {rotationInDays} DAYS
            </div>
        </div>
    </div>

    <div class="info_box">
        <div class="info_box_naming">
            revolution time
            <div class="info_box_naming_data">
                {revolutionInDays} DAYS
            </div>
        </div>
    </div>

    <div class="info_box">
        <div class="info_box_naming">
            radius
            <div class="info_box_naming_data">
                {radiusInKm} KM
            </div>
        </div>
    </div>

    <div class="info_box">
        <div class="info_box_naming">
            average temp.
            <div class="info_box_naming_data">
                {avgTempInCelsius}
            </div>
        </div>
    </div>
</footer>
</body>


<style>

    .backgorund_body{
        width: 1440px;
        height: 1024px;
        background: #ec95b8;

    }

    .the_planets_bar {
        justify-content: space-between;
        align-items: flex-end;
        /* Add additional styles for padding, background, etc. as needed */
        display: inline-flex;
        padding-right: 1px;

        gap: 33px;
    }
    .the_planets {
        color: #FFF;
        font-family: 'Spartan';
        font-size: 11px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 227.273% */
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .info_box{
        width: 255px;
        height: 128px;
        flex-shrink: 0;
        border: 1px solid #d3d3d3;
        position: relative;
        bottom: 56px; /* Adjusted to 56px from the bottom */
        margin-bottom: 0px;
    }
    .info_box_naming{
        width: 255px;
        height: 128px;
        flex-shrink: 0;
        border: 1px solid #d3d3d3;
        position: relative;
        margin-bottom: 56px; /* Set the margin from the bottom to 56px */
    }
    .the_planets_links{
        color: #FFFFFF;
        font-family: 'Spartan';
        font-size: 11px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 227.273% */
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-right: 41px;
    }
    .the_constant_metrics_footer {
        position: absolute;
        display: flex;
        justify-content: space-between;
        margin-left: 165px;
        margin-right: 165px;
        gap: 30px;
        margin-top: 500px;
    }
</style>

