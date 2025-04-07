// requestFactory.ts
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import apiClient from "./client";

/**
 * Optional error callback: receives the thrown AxiosError.
 */
type ErrorCallback = (error: AxiosError) => void;

/**
 * A "Result" type that can be one of two possibilities:
 * - { success: true; data: T }
 * - { success: false; error: AxiosError }
 */
export type RequestResult<T> =
  | { success: true; data: T }
  | { success: false; error: AxiosError };

/**
 * The interface describing our request factory methods.
 */
export interface RequestFactory {
  get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig,
    onError?: ErrorCallback
  ): Promise<RequestResult<T>>;

  post<T = unknown, B = unknown>(
    url: string,
    body: B,
    config?: AxiosRequestConfig,
    onError?: ErrorCallback
  ): Promise<RequestResult<T>>;

  // Add put/patch/delete if needed...
}

// requestFactory.ts
export const requestFactory: RequestFactory = {
  /**
   * GET factory function
   */
  async get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig,
    onError?: ErrorCallback
  ): Promise<RequestResult<T>> {
    try {
      const response: AxiosResponse<T> = await apiClient.get<T>(url, config);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      onError?.(axiosError);
      return {
        success: false,
        error: axiosError,
      };
    }
  },

  /**
   * POST factory function
   */
  async post<T = unknown, B = unknown>(
    url: string,
    body: B,
    config?: AxiosRequestConfig,
    onError?: ErrorCallback
  ): Promise<RequestResult<T>> {
    try {
      const response: AxiosResponse<T> = await apiClient.post<T>(
        url,
        body,
        config
      );
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      onError?.(axiosError);
      return {
        success: false,
        error: axiosError,
      };
    }
  },
};

export default requestFactory;
