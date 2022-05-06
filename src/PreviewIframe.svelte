<script lang="ts">
  import PreviewIframeContent from './PreviewIframeContent'

  export let html: string
  export let css: string
  let iframe: HTMLIFrameElement

  const srcdoc = PreviewIframeContent

  function onload() {
    inject(html, css)
  }
  function inject(html: string, css: string) {
    if (iframe) {
      iframe.contentDocument.body.innerHTML = html
      iframe.contentDocument.querySelector('#cssstyle').innerHTML = css
    }
  }

  $: inject(html, css)
</script>

<iframe
  bind:this={iframe}
  on:load={onload}
  sandbox="allow-same-origin"
  {srcdoc}
  class="absolute top-0 left-0 w-full h-full bg-white"
  title="Preview"
/>
