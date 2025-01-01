import { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"div">;

const Inner: FC<Props> = ({ children, ...other }) => {
  return (
    <div className="auto-0 w-[95%] py-4" {...other}>
      {children}
    </div>
  );
};

export default Inner;
