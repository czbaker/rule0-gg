'use client'

import { use } from 'react'
import { SessionContext } from '../stores/SessionProvider'
import TopLogo from './TopLogo'

export default function AppBar() {
  const currentUser = use(SessionContext)

  return (
    <div className="navbar sticky top-0 z-100 bg-base-300 shadow-md">
      <div className="flex-1 pl-2">
        <TopLogo />
      </div>
      <div className="mr-4 flex-none">{currentUser && currentUser.email}</div>
    </div>
  )
}
