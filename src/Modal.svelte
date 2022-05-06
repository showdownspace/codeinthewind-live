<script lang="ts">
  import { contestantSubmission } from './store'
  import Prism from 'prismjs'
  import { getIframeDataFromSubmission } from './PreviewIframeContent'
  import PreviewIframe from './PreviewIframe.svelte'
  export let uid: string
  export let index: number
  $: submissionStore = contestantSubmission(uid)
  $: data = getIframeDataFromSubmission($submissionStore)
</script>

<div
  class="fixed z-10 inset-0 overflow-y-auto"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
  on:click
>
  <div class="bg-sky-900 p-8 w-full h-full">
    <h1 class="text-3xl">Spectating Contestant <code>#{index + 1}</code></h1>

    <div class="flex justify-center mt-4 gap-4 p-8">
      <div class="bg-black flex-auto relative">
        <div class="absolute inset-0 overflow-auto p-8">
          <pre wrap="wrap">{@html Prism.highlight(
              $submissionStore?.html || '(No data received)',
              Prism.languages.html,
            )}</pre>
          <div class="h-px bg-gray-700 my-12" />
          <pre wrap="wrap">{@html Prism.highlight(
              $submissionStore?.css || '',
              Prism.languages.css,
            )}</pre>
        </div>
      </div>
      <div
        class="flex-none w-[540px] h-[720px] pointer-events-none select-none relative"
      >
        <PreviewIframe html={data.html} css={data.css} />
      </div>
    </div>
  </div>
</div>
