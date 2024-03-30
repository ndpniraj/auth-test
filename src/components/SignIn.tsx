"use client";

import { FC } from "react";
import AuthFormContainer from "./AuthFormContainer";
import AuthInput from "./AuthInput";
import SubmitBtn from "./SubmitButton";
import { createNewUser, signInUser } from "@/action";
import { useFormState } from "react-dom";

interface FormErrorProps {
  errors?: string[];
}

const FormError: FC<FormErrorProps> = ({ errors }) => {
  if (!errors?.length) return null;

  return (
    <div className="p-2">
      {errors.map((err) => {
        return (
          <p className="text-tiny text-red-400 list-item" key={err}>
            {err}
          </p>
        );
      })}
    </div>
  );
};

const SignIn = () => {
  const [state, formAction] = useFormState(signInUser, {
    success: false,
  });

  return (
    <AuthFormContainer
      linkOne={{ href: "#", label: "Have trouble", title: "Forget Password" }}
      linkTwo={{
        href: "#",
        label: "Need an Account",
        title: "Sign Up",
      }}
      title="Sign in"
      action={formAction}
    >
      <div>
        <AuthInput
          name="email"
          type="text"
          label="Email"
          placeholder="john@email.com"
        />
        <FormError errors={state.errors?.email} />
      </div>

      <div>
        <AuthInput
          name="password"
          type="password"
          label="Password"
          placeholder="********"
        />
        <FormError errors={state.errors?.password} />
      </div>
      <SubmitBtn value="Sign in" />
    </AuthFormContainer>
  );
};

export default SignIn;
