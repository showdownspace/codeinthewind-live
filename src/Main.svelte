<script>
  import App from './App.svelte'
  import { accessState, signInWithToken } from './authentication'

  function login() {
    const token = prompt('token')
    if (token) {
      signInWithToken(token).catch((error) => {
        console.error(error)
        alert(String(error))
      })
    }
  }
</script>

{#if $accessState === 'authorized'}
  <App />
{:else}
  <div class="p-6">
    Access state: {$accessState}
    <div class="mt-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={() => login()}>Authenticate</button
      >
    </div>
  </div>
{/if}
