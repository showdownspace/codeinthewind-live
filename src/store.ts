import {
  child,
  DatabaseReference,
  DataSnapshot,
  onValue,
  ref,
} from 'firebase/database'
import { memoize } from 'lodash-es'
import { database } from './firebase'

const roomRef = ref(database, 'rooms/citw')
const configRef = child(roomRef, 'config')
const stageRef = child(configRef, 'stage')
const allProfilesRef = child(roomRef, 'profiles')

function firebaseStore<T>(
  ref: DatabaseReference,
  converter: (f: DataSnapshot) => T,
  defaultValue: T,
): SvelteStore<T> {
  return {
    subscribe: (set) => {
      let alreadySet = false
      const unsubscribe = onValue(ref, (snapshot) => {
        set(converter(snapshot))
        alreadySet = true
      })
      if (!alreadySet) {
        set(defaultValue)
      }
      return unsubscribe
    },
  }
}

export const stage = firebaseStore(
  stageRef,
  (snapshot) => {
    const users: string[] = []
    snapshot.forEach((item) => {
      users.push(item.val())
    })
    return users
  },
  [],
)

export const allUsers = firebaseStore(
  allProfilesRef,
  (snapshot) => {
    const users: string[] = []
    snapshot.forEach((item) => {
      users.push(item.key!)
    })
    return users
  },
  [],
)

export type Submission = {
  html: string
  css: string
  compiledCss: string
}

export const contestantSubmission = memoize((uid: string) => {
  const submissionRef = child(roomRef, `publicSubmissions/${uid}/data`)
  return firebaseStore<Submission | undefined>(
    submissionRef,
    (snapshot) => {
      try {
        if (!snapshot.val()) {
          return
        }
        const data = JSON.parse(String(snapshot.val()))
        if (!data) {
          return
        }
        return {
          html: String(data.html),
          css: String(data.css),
          compiledCss: String(data.compiledCss),
        }
      } catch (error) {
        return {
          html: 'ERROR: ' + error,
          css: '',
          compiledCss: '',
        }
      }
    },
    undefined,
  )
})

type Presence = 'online' | 'offline'

export const contestantPresence = memoize(
  (uid: string): SvelteStore<Presence> => {
    const presenceRef = child(roomRef, `presence/${uid}`)
    let lastTime = 0
    return {
      subscribe: (set) => {
        const update = () => {
          set(new Date().getTime() < lastTime + 60000 ? 'online' : 'offline')
        }
        update()
        const unsubscribe = onValue(presenceRef, (snapshot) => {
          lastTime = +snapshot.val() || 0
        })
        const interval = setInterval(update, 3000)
        return () => {
          unsubscribe()
          clearInterval(interval)
        }
      },
    }
  },
)

export interface ContestantProfile {
  name?: string
}

export const contestantProfile = memoize(
  (uid: string): SvelteStore<ContestantProfile> => {
    const profileRef = child(roomRef, `profiles/${uid}`)
    return firebaseStore<ContestantProfile>(
      profileRef,
      (snapshot) => {
        const name = snapshot.child('name').val()
        return { name: name || undefined }
      },
      {},
    )
  },
)

export const refImage = firebaseStore(
  child(configRef, 'refImage'),
  (snapshot): string => {
    return snapshot.val() || 'https://via.placeholder.com/540x720'
  },
  'https://via.placeholder.com/540x720',
)

export const namesRevealed = firebaseStore(
  child(configRef, 'namesRevealed'),
  (snapshot): boolean => {
    return !!snapshot.val()
  },
  false,
)
