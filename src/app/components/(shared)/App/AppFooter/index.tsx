import { BACK_GROUND_PRIMARY } from "@/app/constants/style";
import { FC } from "react";

const AppFooter: FC = () => {
  return (
    <footer className="bg-stone-400 py-2 shadow">
      <p className={`h-6 text-center ${BACK_GROUND_PRIMARY}`}>-- PrivateMyNextApp --</p>
    </footer>
  );
};

export default AppFooter;
