import { httpClient } from "../lib/httpClient";

export const serverFetchData = async <T>(path: string): Promise<T> => {
  try {
    const response = await httpClient.get(path);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error);
    // エラーをスローして呼び出し元でハンドリング可能に
    throw error;
  }
};
