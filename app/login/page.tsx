'use client'

import { useActionState } from 'react'
import { fbAuth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { barlow, type LoginState } from '../util'

async function handleLogin(prevState: LoginState | null, formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    await signInWithEmailAndPassword(fbAuth, email, password)
    return { success: true, message: `Yay, it worked!` }
  } catch (error) {
    console.log(error)
    return { success: false, message: 'nope' }
  }
}

export default function Login() {
  const [formState, formAction] = useActionState(handleLogin, null)

  return (
    <div className="card w-3xl rounded-xl border border-neutral-700 bg-base-300 p-4">
      <span className={`${barlow.className} text-3xl text-center mb-6`}>Login</span>
      <form action={formAction}>
        <span className="text-sm text-left mb-1">Login:</span>
        <input type="email" autoComplete="email" name="email" className="input mb-4 w-full" />
        <span className="text-sm text-left mb-1">Password:</span>
        <input type="password" autoComplete="password" name="password" className="input mb-4 w-full" />
        <div className="grid grid-cols-2 gap-4">
          <button className="btn btn-block btn-primary">Login</button>
          <button className="btn btn-block btn-primary">Reset</button>
        </div>
      </form>
      {formState?.success === false && <div>{formState?.message as string}</div>}
    </div>
  )
}
