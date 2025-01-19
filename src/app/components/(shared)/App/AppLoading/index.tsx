import { FC } from "react";

const AppLoading: FC = () => {
  return (
    <p className="flex items-center justify-center gap-1 text-xl">
      loading...
      <span className="i-svg-spinners-clock text-4xl" />
    </p>
  );
};

export default AppLoading;
