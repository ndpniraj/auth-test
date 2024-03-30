import { FC, InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  placeholder?: string;
  name: string;
}

const AuthInput: FC<AuthInputProps> = ({
  label,
  placeholder,
  value,
  name,
  ...rest
}) => {
  return (
    <div>
      <label className="text-sm text-gray-800" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="bg-none w-full p-2 border border-gray-600 rounded"
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default AuthInput;
