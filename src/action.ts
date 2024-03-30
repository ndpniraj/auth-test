"use server";

import { z } from "zod";
import { signIn } from "../auth";
import { CredentialsSignin } from "next-auth";

const userSchema = z.object({
  name: z.string().trim().min(3, "Name must be 3 chars long!"),
  email: z.string().email("Email is invalid!"),
  password: z
    .string()
    .min(8, "Password is too short!")
    .max(20, "Password is too long!")
    .regex(
      /^(?=.*\d)(?=.*[A-Z])(?=.*\W)[a-zA-Z\d\W]+$/,
      "Password must include alpha numeric with special chars!"
    ),
});

export interface SignUpErrors {
  errors?: { email?: string[]; password?: string[]; name?: string[] };
  success: boolean;
}

export const createNewUser = async (
  data: SignUpErrors,
  formData: FormData
): Promise<SignUpErrors> => {
  const result = userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (result.success) {
    // now you can sign up or create new user inside your database
    console.log(result.data);
    return { success: true };
  }

  return {
    success: false,
    errors: result.error.flatten().fieldErrors,
  };
};

const signInSchema = z.object({
  email: z.string().email("Email is invalid!"),
  password: z.string(),
});

export const signInUser = async (
  data: SignUpErrors,
  formData: FormData
): Promise<SignUpErrors> => {
  const result = signInSchema.safeParse({
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (result.success) {
    // now you can sign up or create new user inside your database
    try {
      await signIn("credentials", { ...result.data });
    } catch (error) {
      if (error instanceof CredentialsSignin) {
        console.log("error message: ", error.message);
        console.log("error code: ", error.code);
        console.log("error cause: ", error.cause);
      } else {
        // console.log("from action: ", error);
      }
      return { success: false };
    }
    return { success: true };
  }

  return {
    success: false,
    errors: result.error.flatten().fieldErrors,
  };
};
