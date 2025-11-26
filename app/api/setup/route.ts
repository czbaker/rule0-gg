import { adminAuth, adminFirestore } from '@/app/firebase/firebase-admin'
import { LinkKey, randomHex } from '@/app/util'
import { UserRecord } from 'firebase-admin/auth'

export async function GET() {
  const listUsers = await adminAuth.listUsers()
  const numUsers = listUsers.users.length

  const adminEmail = process.env.RULE0_ADMIN_EMAIL as string
  const adminPassword = process.env.RULE0_ADMIN_PASSWORD as string

  if (numUsers == 0) {
    await adminAuth
      .getUserByEmail(adminEmail)
      .then(() => {
        return new Response('Admin user already exists, aborting...', { status: 400 })
      })
      .catch(async () => {
        console.log('Initializing default user creation')
        const adminUser: UserRecord = await adminAuth.createUser({
          email: adminEmail,
          password: adminPassword,
          disabled: false,
          emailVerified: true,
        })
        const keyDoc: LinkKey = {
          linkKey: randomHex(16),
          userId: adminUser.uid,
          active: true,
        }
        await adminFirestore.collection('link-keys').add(keyDoc)
        await adminAuth.setCustomUserClaims(adminUser.uid, { admin: true })
        return new Response(`Default user created for app!`, { status: 200 })
      })
    return new Response(`Default user created for app!`, { status: 200 })
  } else {
    return new Response('No need to do this, already have a new user', { status: 400 })
  }
}
