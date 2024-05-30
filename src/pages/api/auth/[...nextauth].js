// FRONTEND PROJECT, Page: Src/pages/api/auth/[...nextauth].js Does: Connecting to and receiving data from the backend

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
      } catch {
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
  async redirect({ url, baseUrl }) {
    if (url === "/") {
      return `${baseUrl}/admin/dashboard`;
    }
    return `${baseUrl}/admin/dashboard`;
  },
};

const options = {
  providers,
  callbacks,
  pages: {
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
