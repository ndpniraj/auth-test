import NextAuth, { CredentialsSignin, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

class CustomError extends CredentialsSignin {
  code = "custom_error";
}

const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials, request) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email === "john@email.com" && password === "123") {
          return { id: "123", name: "john@email.com" };
        } else {
          throw new CustomError("Provide valid data");
        }
      },
    }),
  ],
  trustHost: false,
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
