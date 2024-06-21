import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
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
        const { email, password } = credentials;
        if (email) {
          console.log(email);
          const db = await connectDB();
          const currentUser = await db.collection('users').findOne({email});
          console.log(currentUser);
          // const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

// const users = [
//   {
//     id: 1,
//     name: "monzil",
//     email: "monzil246@gmail.com",
//     type: "admin",
//     password: "123456",
//     image: "https://picsum.photos/200/300"
//   },
//   {
//     id: 2,
//     name: "fahim",
//     email: "mhmonzil@gmail.com",
//     type: "user",
//     password: "abcdef",
//     image: "https://picsum.photos/200/300"
//   },
// ];

export { handler as GET, handler as POST };
