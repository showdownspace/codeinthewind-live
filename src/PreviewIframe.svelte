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
    const doc = iframe?.contentDocument
    if (doc) {
      const body = doc.querySelector('#htmlbody')
      if (body) body.innerHTML = html
      const style = doc.querySelector('#cssstyle')
      if (style) style.innerHTML = css
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
