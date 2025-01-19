import { FC } from "react";
import AppLoading from "./components/(shared)/App/AppLoading";
const Loading: FC = () => {
  return (
    <div className="fixed z-20 flex h-full w-full items-center justify-center bg-stone-400">
      <AppLoading />
    </div>
  );
};

export default Loading;
