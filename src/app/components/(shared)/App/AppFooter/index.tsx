import { BACK_GROUND_PRIMARY } from "@/app/constants/style";
import { FC } from "react";

const AppFooter: FC = () => {
  return (
    <div>
      <footer className="fixed bottom-0 flex h-10 w-full items-center justify-center bg-stone-400 shadow">
        <p className={`text-center ${BACK_GROUND_PRIMARY}`}>-- PrivateMyNextApp --</p>
      </footer>
      <div className="h-10" />
    </div>
  );
};

export default AppFooter;
