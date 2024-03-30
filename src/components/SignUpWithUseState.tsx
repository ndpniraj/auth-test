"use client";

import { ChangeEventHandler, FC, useState } from "react";
import AuthFormContainer from "./AuthFormContainer";
import AuthInput from "./AuthInput";
import SubmitBtn from "./SubmitButton";

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

const SignUpWithUseState = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <AuthFormContainer
      linkOne={{ href: "#", label: "Have trouble", title: "Forget Password" }}
      linkTwo={{
        href: "#",
        label: "Already have an Account",
        title: "Sign In",
      }}
      title="Sign up"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(userInfo);
      }}
    >
      <div>
        <AuthInput
          name="name"
          type="text"
          label="Name"
          placeholder="John Doe"
          onChange={handleChange}
        />
      </div>
      <div>
        <AuthInput
          name="email"
          type="text"
          label="Email"
          placeholder="john@email.com"
          onChange={handleChange}
        />
      </div>

      <div>
        <AuthInput
          name="password"
          type="password"
          label="Password"
          placeholder="********"
          onChange={handleChange}
        />
      </div>
      <SubmitBtn value="Sign up" />
    </AuthFormContainer>
  );
};

export default SignUpWithUseState;
