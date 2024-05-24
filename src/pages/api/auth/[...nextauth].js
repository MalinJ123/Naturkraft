import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const providers = [
  CredentialsProvider({
    name: "Credentials",
    authorize: async (credentials) => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/credentials`,
          {
            username: credentials.username,
            password: credentials.password,
          },
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );

        const user = response.data;
        if (user) {
          return user;
        } else {
          return null;
        }
      } catch (e) {
        console.error("Error in authorize:", e);
        return null;
      }
    },
  }),
];

const callbacks = {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.username = user.username;
      token.accessToken = user.token;
    }
    return token;
  },

  async session({ session, token }) {
    session.user.id = token.id;
    session.user.username = token.username;
    session.accessToken = token.accessToken;
    return session;
  },
};

const options = {
  providers,
  callbacks,
  pages: {
    error: "/login",
  },
};

const authHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
