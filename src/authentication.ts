import {
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
  User,
} from 'firebase/auth'
import { writable } from 'svelte/store'
import { auth, authStateAvailablePromise } from './firebase'

export type AccessState =
  | 'checking'
  | 'unauthenticated'
  | 'unauthorized'
  | 'error'
  | 'authorized'

export const accessState = writable('checking')

onAuthStateChanged(auth, (user) => {
  recheck(user)
})
authStateAvailablePromise.then(() => {
  recheck(auth.currentUser)
})

function recheck(user: User | null) {
  if (user) {
    user
      .getIdTokenResult()
      .then((result) => {
        accessState.set(
          result.claims.management ? 'authorized' : 'unauthorized',
        )
      })
      .catch((err) => {
        console.error(err)
        accessState.set('error')
      })
  } else {
    accessState.set('unauthenticated')
  }
}

export function signInWithToken(token: string) {
  return signInWithCustomToken(auth, token)
}

Object.assign(window, {
  signOut: () => {
    return signOut(auth)
  },
})
