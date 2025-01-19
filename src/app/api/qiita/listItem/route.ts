import { QIITA_GET_URL, QIITA_MY_USER_ID } from "@/app/config";
import { QiitaListItem } from "@/app/types/apiResponse";
import { QiitaArticle } from "@/app/types/qiita";
import axios from "axios";
import { NextResponse } from "next/server";

type ErrorResponse = {
  error: string;
};

// GETリクエストハンドラ
export const GET = async (): Promise<NextResponse> => {
  try {
    const response = await axios.get<QiitaArticle[]>(QIITA_GET_URL, {
      params: {
        query: `user:${QIITA_MY_USER_ID}`
      }
    });

    // 必要なデータに加工
    const processedData: QiitaListItem[] = response.data.map((item) => ({
      id: item.id,
      url: item.url,
      title: item.title,
      tags: item.tags.map((tag: any) => tag.name), // タグ名だけ抽出
      likeCount: item.likes_count,
      createdAt: item.created_at,
      updatedAt: item.updated_at
    }));

    return NextResponse.json(processedData);
  } catch (err) {
    const errorResponse: ErrorResponse = { error: "取得に失敗しました" };
    return NextResponse.json(errorResponse, { status: 500 });
  }
};
