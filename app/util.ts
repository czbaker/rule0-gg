import crypto from 'node:crypto'
import { Barlow } from 'next/font/google'

// Types/Interfaces
export interface LinkKey {
  linkKey: string
  userId: string
  active: boolean
}

export interface LoginState {
  success: boolean
  message: string
}

// Class for Google Font
export const barlow = Barlow({
  weight: '700',
  style: 'italic',
})

// Make random strings for link key
export function randomHex(length: number): string {
  const bytesNeeded: number = Math.ceil(length / 2)
  const randBytes = crypto.randomBytes(bytesNeeded)
  let randString = randBytes.toString('hex')

  if (randString.length > length) {
    randString = randString.slice(0, length)
  }

  return randString
}
