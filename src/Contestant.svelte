<script lang="ts">
  import PreviewIframe from './PreviewIframe.svelte'
  import { getIframeDataFromSubmission } from './PreviewIframeContent'

  import {
    contestantPresence,
    contestantProfile,
    contestantSubmission,
  } from './store'
  export let uid: string
  export let index: number | undefined = undefined
  export let namesRevealed: boolean = false
  export let namePrefix: string = 'Contestant'

  $: submissionStore = contestantSubmission(uid)
  $: presenceStore = contestantPresence(uid)

  $: presence = $presenceStore
  $: data = getIframeDataFromSubmission($submissionStore)
  $: profileStore = contestantProfile(uid)
  $: name =
    (namesRevealed && $profileStore.name) ||
    (index != undefined ? `${namePrefix} ${index + 1}` : 'User')
</script>

<div
  class="relative w-[264px] h-[352px] overflow-hidden rounded shadow-lg"
  on:click
>
  <div class="absolute inset-0 rounded overflow-hidden">
    <div
      class="absolute top-0 left-0 w-[540px] h-[720px] origin-top-left [transform:scale(49%)]  pointer-events-none select-none"
    >
      <PreviewIframe html={data.html} css={data.css} />
    </div>
  </div>
  <div
    class="absolute bottom-0 left-0 bg-sky-700 px-3 py-2 rounded-tr overflow-hidden"
  >
    <span
      class="align-middle inline-block w-3 h-3 {presence === 'offline'
        ? 'bg-red-500'
        : 'bg-green-400'} rounded-full"
    />
    {name}
  </div>
</div>
