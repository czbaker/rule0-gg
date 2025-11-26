import * as admin from 'firebase-admin'

if (admin.apps.length == 0) {
  if (process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CREDENTIALS as string) {
    const decoded = Buffer.from(process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CREDENTIALS as string, 'base64').toString()
    const adminCreds = JSON.parse(decoded)
    admin.initializeApp({
      credential: admin.credential.cert(adminCreds),
    })
  }
}

const adminFirestore = admin.firestore()
const adminAuth = admin.auth()

export { adminFirestore, adminAuth }
