import Image from "next/image";
import topIcon from "../public/assets/topIcon.png";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <div className="m-auto flex w-11/12 flex-col gap-2 py-2">
        <h2 className="text-center text-xl font-bold md:text-3xl">Welcome!</h2>
        <section>
          <div className="m-auto mb-1 w-8/12 max-w-xl">
            <Image src={topIcon} alt="トップページのアイコン" />
          </div>
          <p className="text-xs md:text-center md:text-xl">
            エンジニア2年目の技術ブログ。 主にフロントエンドに関することを投稿しています。
          </p>
        </section>
        <div className="w-full border-t-2 border-stone-300" />
        <section>
          <h3 className="flex items-center gap-1 px-4 md:text-2xl">
            <span className="i-mdi-alert-circle text-xl" />
            最新の投稿一覧
          </h3>
          {/* ここにAPI取得想定の投稿一覧 - title。直近1ヶ月以内に編集、または新規投稿されているもののみ */}
        </section>
        <div className="w-full border-t-2 border-stone-300" />
        <section>
          <h3 className="flex items-center gap-1 px-4 md:text-2xl">
            <span className="i-mdi-clipboard-text text-xl" />
            過去の投稿一覧
          </h3>
          {/* ここにAPI取得想定の投稿カード一覧をgridLayoutで作成する。順番は投稿順とする。paginationも20件ずつぐらいで考えてみる */}
        </section>
        <div className="w-full border-t-2 border-stone-300" />
      </div>
    </>
  );
}
