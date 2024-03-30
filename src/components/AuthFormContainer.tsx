import { FC, FormHTMLAttributes, ReactNode } from "react";

interface AuthFormContainerProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  title: string;
  linkOne: { label?: string; href: string; title: string };
  linkTwo: { label?: string; href: string; title: string };
}

const AuthFormContainer: FC<AuthFormContainerProps> = ({
  linkOne,
  linkTwo,
  children,
  title,
  ...rest
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-md p-10 w-96 space-y-6" {...rest}>
        <h1 className="text-3xl text-gray-800">{title}</h1>
        {children}

        <div className="text-sm text-gray-800 mt-10 space-y-2">
          <div>
            {linkOne.label ? (
              <span className="mr-1">{linkOne.label}</span>
            ) : null}
            <a
              className="uppercase underline text-blue-500"
              href={linkOne.href}
            >
              {linkOne.title}
            </a>
          </div>

          <div>
            {linkTwo.label ? (
              <span className="mr-1">{linkTwo.label}</span>
            ) : null}
            <a
              className="uppercase underline text-blue-500"
              href={linkTwo.href}
            >
              {linkTwo.title}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthFormContainer;
