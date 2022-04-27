<script lang="ts">
  import { contestantSubmission } from './store'
  export let uid: string
  $: submissionStore = contestantSubmission(uid)
  $: submission = $submissionStore
  $: srcdoc = `<!DOCTYPE html><html><head><meta charset="utf-8">
<base href="https://codeinthewind-editor.showdown.space/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>${submission?.compiledCss}</${''}style>
<${''}/head>
<body>${submission?.html || '(Loading...)'}<${''}/body>
<${''}/html>`
</script>

<div class="relative">
  <iframe
    sandbox="allow-same-origin"
    {srcdoc}
    class="w-[540px] h-[720px]"
    title="Preview"
  />
  <div class="absolute bottom-0 left-0 bg-sky-700 px-3 py-2">
    {uid}
  </div>
</div>
