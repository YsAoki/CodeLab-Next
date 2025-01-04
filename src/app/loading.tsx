import { FC } from "react";
const Loading: FC = () => {
  return (
    <div className="fixed z-20 flex h-full w-full items-center justify-center bg-stone-400">
      <p className="flex items-center gap-1 text-xl">
        loading...
        <span className="i-svg-spinners-clock text-4xl" />
      </p>
    </div>
  );
};

export default Loading;
