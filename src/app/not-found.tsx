"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col flex-wrap gap-1 p-2 md:gap-2 md:text-2xl">
      <h2 className="text-xl font-semibold md:text-2xl">ページが見つかりませんでした</h2>
      <p className="text-sm md:text-base">
        指定されたURL: <span className="font-mono">{pathname}</span>
      </p>
      <p className="md:text-2xl">
        トップページに{" "}
        <a href="/" className="text-blue-500 underline" aria-label="トップページに戻る">
          戻る
        </a>
      </p>
    </div>
  );
};

export default NotFound;
