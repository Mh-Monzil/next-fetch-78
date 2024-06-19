import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Your Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const {email, password} = credentials;
        if(email){
            const currentUser = users.find(user => user.email === email)
            if(currentUser.password === password){
                return currentUser;
            }
        }
        return null;
      },
    }),
  ],
}

const handler = NextAuth(authOptions);

const users = [
    {
        id: 1,
        name: "monzil",
        email: "monzil246@gmail.com",
        password: "123456"
    },
    {
        id: 2,
        name: "fahim",
        email: "mhmonzil@gmail.com",
        password: "abcdef"
    },
]

export { handler as GET, handler as POST };
