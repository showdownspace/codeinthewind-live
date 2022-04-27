<script lang="ts">
  import Contestant from './Contestant.svelte'
  import { stage } from './store'

  let uids: string[]
  $: {
    uids = $stage || []
  }
</script>

Number of users on stage: {uids.length}

<ul class="flex flex-wrap gap-3">
  {#each uids as uid}
    <li>
      <Contestant {uid} />
    </li>
  {/each}
</ul>
