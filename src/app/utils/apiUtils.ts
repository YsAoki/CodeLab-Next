import axios from "axios";

export const serverFetchData = async <T>(path: string): Promise<T> => {
  const baseURL = process.env.API_BASE_URL; // 環境変数からベースURLを取得
  if (!baseURL) throw new Error("API_BASE_URL is not defined.");

  try {
    const fullURL = `${baseURL}${path}`;
    const response = await axios.get<T>(fullURL);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error);
    throw error;
  }
};