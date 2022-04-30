<script lang="ts">
  import { contestantPresence, contestantSubmission, Submission } from './store'
  export let uid: string
  let iframe: HTMLIFrameElement
  $: submissionStore = contestantSubmission(uid)
  $: presenceStore = contestantPresence(uid)

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

<div class="contestant" on:click>
  <iframe
    bind:this={iframe}
    on:load={onload}
    sandbox="allow-same-origin"
    {srcdoc}
    class="w-full h-full pointer-events-none select-none"
    title="Preview"
  />
  <div class="absolute bottom-0 left-0 bg-sky-700 px-3 py-2">
    [{$presenceStore}] {uid}
  </div>
</div>

<style lang="postcss">
  .contestant {
    @apply relative;
    aspect-ratio: 3 / 4;
    scale: 2;
  }
</style>
