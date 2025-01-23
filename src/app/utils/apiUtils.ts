import { httpClient } from "../lib/httpClient";

export const serverFetchData = async <T>(path: string): Promise<T> => {
  try {
    const baseURL = process.env.API_BASE_URL;
    if (!baseURL) {
      throw new Error("API_BASE_URL is not set in the environment variables.");
    }

    const response = await httpClient.get(`${baseURL}${path}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error);
    throw error;
  }
};
