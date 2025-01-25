import { QIITA_GET_URL, QIITA_MY_USER_ID } from "@/app/config";
import { QiitaListItem } from "@/app/types/apiResponse";
import { QiitaArticle, QiitaTag } from "@/app/types/qiita";
import axios from "axios";
import { NextResponse } from "next/server";

type ErrorResponse = {
  error: string;
};

export const GET = async (): Promise<NextResponse> => {
  try {
    const response = await axios.get<QiitaArticle[]>(QIITA_GET_URL, {
      params: {
        query: `user:${QIITA_MY_USER_ID}`,
      },
    });

    const processedData: QiitaListItem[] = response.data.map((item) => ({
      id: item.id,
      url: item.url,
      title: item.title,
      tags: item.tags.map((tag: QiitaTag) => tag.name),
      likeCount: item.likes_count,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
    }));

    return NextResponse.json(processedData);
  } catch (err) {
    console.error("API fetch error:", err);
    const errorResponse: ErrorResponse = { error: "取得に失敗しました" };
    return NextResponse.json(errorResponse, { status: 500 });
  }
};
