import { compare, genSalt, hash } from "bcryptjs"

import { User } from "next-auth"
import { connectToDB } from "./db"

type LoginFn = (email: string, password: string) => Promise<User>


export const login: LoginFn = async ( email, password) => {
  const client = await connectToDB()

  const usersCollection = client.db().collection("users")

  const user = await usersCollection.findOne({ email: email })
   
  if (user && (await compare(password, user.password))) {
    user.password = ""
    return user as unknown as User
  } else {
    throw new Error("User not found or incorrect password")
  }
}

export async function hashPassword(psw: string) {
  return genSalt(12)
    .then(salt => {
      return hash(psw, salt)
    })
    .then(hashedPsw => hashedPsw)
    .catch(err => console.error(err.message))
}