<script lang="ts">
  import Contestant from './Contestant.svelte'
  import { stage } from './store'

  let uids: string[]
  $: {
    uids = $stage || []
  }
</script>

Number of users on stage: {uids.length}

<div class="grid-view">
  <div class="template-image">
    <img
      src="https://cdn.discordapp.com/attachments/969252015341449256/969296584800104468/unknown.png"
      alt="Template Image"
    />
  </div>

  {#each uids as uid}
    <div>
      <Contestant {uid} />
    </div>
  {/each}

  <div class="flex items-center justify-center border">(No Player)</div>
  <div class="flex items-center justify-center border">(No Player)</div>
  <div class="flex items-center justify-center border">(No Player)</div>
  <div class="flex items-center justify-center border">(No Player)</div>
</div>

<style>
  .grid-view {
    margin: 1rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 270px 270px [template-start] 540px [template-end] 270px 270px;
    grid-template-rows: [template-start] 360px 360px [template-end];
  }

  .template-image {
    grid-area: template;
  }
</style>
