import './index.css'
import Main from './Main.svelte'
import './vendor/prism/material-dark.css'

const app = new Main({
  target: document.getElementById('app')!,
})

export default app
