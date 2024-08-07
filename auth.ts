import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import client from "./dbGlobalPrisma";
import bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
        name: "Credentials",
        credentials:{
          email:{label:"Email", type: "email"},
          password:{label: "Password", type:"password"},
        },
        authorize: async (credentials) => {
          const email = credentials.email as string|undefined;
          const password = credentials.password as string|undefined;
  
          if (!email || !password) {
            throw new CredentialsSignin({cause: "Email and password are required"});
          }
          const user = await client.user.findUnique({
            where: { email },
          });
  
          if (!user) {
            throw new CredentialsSignin({cause: "No user found with this email"});
          }
        // const password = "user123"; // Entered by user
        // const user.password = "$2b$10$X4kv7j5ZcG2bTJNxs1b3AeHu"; // From database
          const passwordMatch = await bcrypt.compare(password, user.password);
  
          if (!passwordMatch) {
            throw new CredentialsSignin({cause: "Incorrect password"});
          }
  
          return {name: user.name, email: user.email, id: user.id};
        },
    })
  ],
  pages:{
    signIn: "/signin",
  }
});
