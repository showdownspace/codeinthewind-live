<script lang="ts">
  import { contestantSubmission, Submission } from './store'
  import Prism from 'prismjs'
  export let uid: string
  export let index: number
  let iframe: HTMLIFrameElement
  $: submissionStore = contestantSubmission(uid)

  const srcdoc = `<!DOCTYPE html><html><head><meta charset="utf-8">
<base href="https://codeinthewind-editor.showdown.space/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<${''}style id="cssstyle">.bg-white{background:white}</${''}style>
<${''}/head>
<body class="bg-white">(Loading...)<${''}/body>
<${''}/html>`

  function onload() {
    inject($submissionStore)
  }
  function inject(submission: Submission) {
    if (iframe && submission) {
      iframe.contentDocument.body.innerHTML = submission.html
      iframe.contentDocument.querySelector('#cssstyle').innerHTML =
        submission.compiledCss
    }
  }

  $: inject($submissionStore)
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
              $submissionStore.html,
              Prism.languages.html,
            )}</pre>
          <div class="h-px bg-gray-700 my-12" />
          <pre wrap="wrap">{@html Prism.highlight(
              $submissionStore.css,
              Prism.languages.css,
            )}</pre>
        </div>
      </div>
      <iframe
        bind:this={iframe}
        on:load={onload}
        sandbox="allow-same-origin"
        {srcdoc}
        class="flex-none w-[540px] h-[720px] pointer-events-none select-none"
        title="Preview"
      />
    </div>
  </div>
</div>
