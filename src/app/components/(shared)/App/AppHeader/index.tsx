import { BACK_GROUND_PRIMARY } from "@/app/constants/style";
import { formatYYYYMMDDWithSlash } from "@/app/utils/dateFormat";
import dayjs from "dayjs";
import { FC } from "react";

const AppHeader: FC = () => {
  const currentDate = formatYYYYMMDDWithSlash(dayjs());
  return (
    <div>
      <header className={`fixed z-10 h-9 w-full shadow ${BACK_GROUND_PRIMARY}`}>
        <div className="m-auto flex h-full w-11/12 items-center justify-between">
          <h1 className="text-xl font-medium">Bit by Bit Code Lab</h1>
          <p className="text-xl font-medium">{currentDate}</p>
        </div>
      </header>
      {/* header fixed対策のブロック */}
      <div className="h-9" />
    </div>
  );
};

export default AppHeader;
