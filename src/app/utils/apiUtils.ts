import { httpClient } from "../lib/httpClient";

export const serverFetchData = async <T>(path: string): Promise<T> => {
  try {
    const response = await httpClient.get<T>(path);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error);
    throw error;
  }
};
