import SignIn from "@/components/SignIn";
import { FC } from "react";

interface Props {}

const page: FC<Props> = (props) => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default page;
