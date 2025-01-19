import { QiitaListItem } from "@/app/types/apiResponse";
import { ComponentPropsWithoutRef, FC } from "react";
import QiitaCard from "../QiitaCard";

type Props = { qiitaListItems: QiitaListItem[] } & ComponentPropsWithoutRef<"ul">;

const QiitaCardWrapper: FC<Props> = ({ qiitaListItems, ...other }) => {
  return (
    <ul className="flex flex-col gap-2" {...other}>
      {qiitaListItems.map((item) => (
        <li key={item.id}>
          <QiitaCard {...item} />
        </li>
      ))}
    </ul>
  );
};

export default QiitaCardWrapper;
