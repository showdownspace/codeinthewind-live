<script lang="ts">
  import PreviewIframe from './PreviewIframe.svelte'
  import { getIframeDataFromSubmission } from './PreviewIframeContent'

  import { contestantPresence, contestantSubmission, Submission } from './store'
  export let uid: string
  export let index: number

  $: submissionStore = contestantSubmission(uid)
  $: presenceStore = contestantPresence(uid)

  $: presence = $presenceStore
  $: data = getIframeDataFromSubmission($submissionStore)
</script>

<div class="relative w-[264px] h-[352px] overflow-hidden rounded" on:click>
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
    Contestant #{index + 1}
  </div>
</div>
