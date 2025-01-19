import axios from "axios";
import Image from "next/image";
import topIcon from "../public/assets/topIcon.png";
import QiitaCardWrapper from "./components/(shared)/ui/QiitaCardWrapper";
import { QiitaListItem } from "./types/apiResponse";
import { getEngineerYears } from "./utils/dateFormat";

const fetchQiitaListItems = async (): Promise<QiitaListItem[]> => {
  try {
    const response = await axios.get("http://localhost:3000/api/qiita/listItem");
    return response.data;
  } catch (error) {
    console.error("Error fetching Qiita list items:", error);
    return [];
  }
};
export default async function Home() {
  const qiitaListItems = await fetchQiitaListItems();

  return (
    <div className="m-auto flex w-11/12 flex-col gap-2 py-2">
      <h2 className="text-center text-xl font-bold md:text-3xl">Welcome!</h2>
      <section>
        <div className="m-auto mb-1 w-8/12 max-w-xl">
          <Image src={topIcon} alt="トップページのアイコン" />
        </div>
        <p className="text-center text-xs md:text-xl">フロントエンドエンジニア{getEngineerYears()}年目の自主制作物</p>
      </section>
      <div className="w-full border-t-2 border-stone-300" />
      <section>
        <h3 className="flex items-center gap-1 px-4 md:text-2xl">
          <span className="i-mdi-alert-circle text-xl" />
          このサイトの作成経緯について
        </h3>
        <p>Qiitaの記事は個人制作のポートフォリオになるのでは？そんな思いつきと、</p>
        <p>NextJsとTailWindCSSの学習がてら、ちょっとしたバックエンドAPI作って動かしてみようという考えで作成しました。</p>
        <p>個人的にアウトプットで投稿したQiita記事のリンク集です。</p>
      </section>
      <div className="w-full border-t-2 border-stone-300" />
      <section>
        <h3 className="mb-3 flex items-center gap-1 px-4 md:text-2xl">
          <span className="i-mdi-clipboard-text text-xl" />
          投稿一覧
        </h3>
        <QiitaCardWrapper qiitaListItems={qiitaListItems} />
      </section>
      <div className="w-full border-t-2 border-stone-300" />
    </div>
  );
}
