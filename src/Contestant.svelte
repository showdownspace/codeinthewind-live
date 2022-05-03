<script lang="ts">
  import { contestantPresence, contestantSubmission, Submission } from './store'
  export let uid: string
  export let index: number

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
  $: presence = $presenceStore
</script>

<div class="relative w-[264px] h-[352px] overflow-hidden rounded" on:click>
  <div class="absolute inset-0 rounded overflow-hidden">
    <iframe
      bind:this={iframe}
      on:load={onload}
      sandbox="allow-same-origin"
      {srcdoc}
      class="w-[540px] h-[720px] pointer-events-none select-none absolute top-0 left-0 origin-top-left [transform:scale(49%)]"
      title="Preview"
    />
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
