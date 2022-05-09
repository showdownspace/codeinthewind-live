<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { contestantProfile, contestantSubmission } from './store'
  import Prism from 'prismjs'
  import { getIframeDataFromSubmission } from './PreviewIframeContent'
  import PreviewIframe from './PreviewIframe.svelte'
  export let uid: string
  export let index: number | undefined = undefined
  let revealName = false
  let resizing: { lastX: number } | undefined
  const dispatch = createEventDispatcher()
  $: submissionStore = contestantSubmission(uid)
  $: profileStore = contestantProfile(uid)
  $: data = getIframeDataFromSubmission($submissionStore)
  let width = 540

  const toggleName = () => {
    revealName = !revealName
  }
  $: name =
    (revealName && $profileStore.name) ||
    (index != undefined ? `Contestant ${index + 1}` : 'User')
</script>

<div
  class="absolute z-10 inset-0 overflow-y-auto"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <div class="bg-gradient-to-b from-slate-800 to-slate-700 p-8 w-full h-full">
    <h1 class="text-5xl text-center">
      Spectating <button on:click={toggleName}>
        <strong>{name}</strong>
      </button>
    </h1>
    <button
      class="absolute top-8 right-8 w-8 h-8"
      on:click={() => dispatch('close')}
    >
      <div class="bg-white h-[2px] absolute inset-x-0 top-1/2 rotate-45" />
      <div class="bg-white h-[2px] absolute inset-x-0 top-1/2 -rotate-45" />
    </button>

    <div class="flex justify-center mt-4 p-8">
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
        class="flex-none w-4 cursor-ew-resize {resizing ? 'bg-sky-400' : ''}"
        on:mousedown={(e) => (resizing = { lastX: e.clientX })}
      />
      <div
        class="flex-none h-[720px] {resizing
          ? 'pointer-events-none select-none'
          : ''}  relative"
        style="width: {width}px"
      >
        <PreviewIframe html={data.html} css={data.css} />
      </div>
    </div>
  </div>
</div>

<svelte:body
  on:mousemove={(e) => {
    if (resizing) {
      width += resizing.lastX - e.clientX
      resizing.lastX = e.clientX
    }
  }}
  on:mouseup={() => (resizing = undefined)} />
