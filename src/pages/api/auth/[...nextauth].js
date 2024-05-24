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
        const user = await axios.post(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/login`,
          {
            user: {
              username: credentials.username,
              password: credentials.password,
            },
          },
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );

        if (user) {
          return { status: "success", data: user };
        } else {
          return { status: "error", message: message };
        }
      } catch (e) {
        const errorMessage = e.response.data.message;
        throw new Error(errorMessage + "&username=" + credentials.username);
      }
    },
  }),
];

const callbacks = {
  async jwt(token, user) {
    if (user) {
      token.accessToken = user.data.token;
    }

    return token;
  },

  async session(session, token) {
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
