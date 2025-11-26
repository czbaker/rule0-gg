'use client'

import { onAuthStateChanged, type User } from 'firebase/auth'
import { createContext, useState, useEffect, ReactNode } from 'react'
import { fbAuth } from '../firebase/firebase'

const SessionContext = createContext<User | null>(null)

const SessionProvider = ({ children }: { children: ReactNode }) => {
  // This should handle current state of who is logged in.
  const [currentUser, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(fbAuth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return <SessionContext value={currentUser}>{children}</SessionContext>
}

export { SessionProvider, SessionContext }
