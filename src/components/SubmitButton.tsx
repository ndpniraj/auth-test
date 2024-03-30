import { FC } from "react";
import { useFormStatus } from "react-dom";

interface SubmitBtnProps {
  value?: string;
}

const SubmitBtn: FC<SubmitBtnProps> = ({ value }) => {
  const { pending } = useFormStatus();
  return (
    <div>
      {pending ? (
        <p>Please wait...</p>
      ) : (
        <input
          type="submit"
          value={value}
          className="bg-none w-full p-2 rounded outline-none bg-blue-600 text-white cursor-pointer hover:shadow-md transition-all"
        />
      )}
    </div>
  );
};

export default SubmitBtn;
