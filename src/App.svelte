<script lang="ts">
  import logotext from './assets/citw-logotext.png'
  import { fade } from 'svelte/transition'
  import Contestant from './Contestant.svelte'
  import Modal from './Modal.svelte'
  import { stage, allUsers, refImage } from './store'
  let modalData: { uid: string; index: number } | null = null
  let viewMode: 'stage' | 'all' = 'stage'
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

{#if viewMode === 'stage'}
  <div class="flex items-center justify-center inset-0 absolute">
    <div class="grid-view">
      <div class="template-image">
        <img
          src={$refImage}
          alt="Template"
          on:click={() => (viewMode = 'all')}
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
  <img src={logotext} alt="" class="absolute top-8 left-8 w-[21.823vw]" />
{:else}
  <div class="flex inset-0 absolute p-4 gap-4">
    <div class="self-center flex-none">
      <img
        src={$refImage}
        alt="Template"
        width="540"
        on:click={() => (viewMode = 'stage')}
      />
    </div>
    <div class="flex-auto relative">
      <div class="absolute inset-0 flex overflow-x-hidden overflow-y-auto">
        <div class="m-auto flex-auto flex flex-wrap gap-4 justify-center">
          {#each $allUsers as uid, i}
            <div class="flex-none">
              <Contestant
                {uid}
                index={i}
                on:click={() => displayContestantModal(uid, i)}
              />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Modal -->
{#if modalData}
  <div class="absolute inset-0" transition:fade={{ duration: 100 }}>
    <Modal {...modalData} on:close={closeModal} />
  </div>
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
