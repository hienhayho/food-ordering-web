import { User } from "@/app/models/User";
import mongoose from "mongoose";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  secret: process.env.SECRET_KEY,
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          id: 'credentials',
          credentials: {
            username: { label: "Email", type: "email", placeholder: "test@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const email: string = credentials?.email;
            const password: string = credentials?.password;

            mongoose.connect(process.env.MONGO_URL);
            const user = await User.findOne({email});
            const passwordOk = user && bcrypt.compareSync(password, user.password)

            console.log(passwordOk)

            if (passwordOk) { 
              return user;
            }

            return null
          }
        })
      ]
})

export { handler as GET, handler as POST }