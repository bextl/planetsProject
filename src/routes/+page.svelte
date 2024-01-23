<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

</script>


{#each data.data as {id, name}} 
<h1> {name}</h1>
{/each}



