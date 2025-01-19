import { QiitaListItem } from "@/app/types/apiResponse";
import { formatYYYYMMDDWithSlash } from "@/app/utils/dateFormat";
import { dateIsInBeforeOneMonth } from "@/app/utils/validation";
import dayjs from "dayjs";
import { ComponentPropsWithoutRef, FC } from "react";
import QiitaTagsWrapper from "../QitaTagsWrapper";
import TitleText from "../TitleText";

type Props = QiitaListItem & ComponentPropsWithoutRef<"a">;

const QiitaCard: FC<Props> = ({ id, url, title, tags, likeCount, createdAt, updatedAt, ...other }) => {
  return (
    <a href={url} {...other}>
      <div className="rounded-xl bg-gray-200">
        <div className="mx-auto flex w-11/12 flex-col gap-1 py-2">
          <div className="flex items-center gap-1">
            {dateIsInBeforeOneMonth(dayjs(createdAt)) && (
              <p className="flex items-center justify-center rounded-xl bg-red-500 px-2 py-0.5 text-xs text-white">NEW</p>
            )}
            {dateIsInBeforeOneMonth(dayjs(updatedAt)) && (
              <p className="flex items-center justify-center rounded-xl bg-blue-500 px-2 py-0.5 text-xs text-white">UPDATE</p>
            )}
          </div>
          <p>{formatYYYYMMDDWithSlash(dayjs(createdAt))}</p>
          <TitleText tag="h3" className="font-bold md:text-2xl">
            {title}
          </TitleText>
          <QiitaTagsWrapper tags={tags} />
          <p>
            <span>♡</span>: {likeCount}
          </p>
        </div>
      </div>
    </a>
  );
};

export default QiitaCard;
