<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    
    

    
</script>

<nav>

    <a href="/">Mercury</a>
    <a href="/venus">Venus</a>
    <a href="/earth">Earth</a>
    <a href="/mars">Mars</a>
    <a href="/jupiter">Jupiter</a>
    <a href="/saturn">Saturn</a>
    <a href="/uranus">Uranus</a>
    <a href="/neptune">Neptune</a>
</nav>



<h1>MERCURY</h1>
{#each data.data as {id, name}} 
<h1> {name}</h1>
<h1> {id}</h1>
{/each}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


