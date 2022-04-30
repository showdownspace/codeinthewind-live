<script lang="ts">
  import Contestant from './Contestant.svelte'
  import Modal from './Modal.svelte'
  import { stage } from './store'
  let modalUid: string | false = false
  $: uids = $stage || []

  function displayContestantModal(uid) {
    modalUid = uid
  }

  function closeModal() {
    modalUid = false
  }
</script>

Number of users on stage: {uids.length}

<div class="grid-view">
  <div class="template-image">
    <img
      src="https://cdn.discordapp.com/attachments/969252015341449256/969296584800104468/unknown.png"
      alt="Template"
    />
  </div>

  {#each uids as uid}
    <div>
      <Contestant {uid} on:click={() => displayContestantModal(uid)} />
    </div>
  {/each}

  <div class="flex items-center justify-center border">(No Player)</div>
  <div class="flex items-center justify-center border">(No Player)</div>
  <div class="flex items-center justify-center border">(No Player)</div>
  <div class="flex items-center justify-center border">(No Player)</div>
</div>

<!-- Modal -->
{#if modalUid}
  <Modal uid={modalUid} on:click={closeModal} />
{/if}

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
