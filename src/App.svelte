<script lang="ts">
  import Contestant from './Contestant.svelte'
  import Modal from './Modal.svelte'
  import { stage } from './store'
  let modalData: { uid: string; index: number } | null = null
  $: uids = $stage || []

  function displayContestantModal(uid: string, index: number) {
    modalData = { uid, index }
  }

  function closeModal() {
    modalData = null
  }

  function rest(a: unknown[]) {
    return new Array(8 - a.length).fill('')
  }
</script>

<div class="flex items-center justify-center inset-0 absolute">
  <div class="grid-view">
    <div class="template-image">
      <img
        src="https://cdn.discordapp.com/attachments/969252015341449256/969296584800104468/unknown.png"
        alt="Template"
      />
    </div>

    {#each uids as uid, i}
      <div>
        <Contestant
          {uid}
          index={i}
          on:click={() => displayContestantModal(uid, i)}
        />
      </div>
    {/each}
    {#each rest(uids) as _unused, i}
      <div
        class="flex items-center justify-center rounded text-2xl bg-slate-500 shadow-inner"
      >
        (No Player)
      </div>
    {/each}
  </div>
</div>

<!-- Modal -->
{#if modalData}
  <Modal {...modalData} on:click={closeModal} />
{/if}

<style>
  .grid-view {
    margin: 1rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 264px 264px [template-start] 540px [template-end] 264px 264px;
    grid-template-rows: [template-start] 352px 352px [template-end];
  }

  .template-image {
    grid-area: template;
  }
</style>
