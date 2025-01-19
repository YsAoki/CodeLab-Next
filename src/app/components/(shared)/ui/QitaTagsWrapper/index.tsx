import { ComponentPropsWithoutRef, FC } from "react";

type Props = {
  tags: string[];
} & ComponentPropsWithoutRef<"ul">;

const QiitaTagsWrapper: FC<Props> = ({ tags, ...other }) => {
  return (
    <ul className="flex flex-wrap gap-1" {...other}>
      {tags.map((tag, index) => (
        <li key={index} className="bg-stone-600 px-2 py-1 text-sm text-white md:text-base">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default QiitaTagsWrapper;
