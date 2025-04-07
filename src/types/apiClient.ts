// requestFactory.ts
import { AxiosRequestConfig, AxiosError } from "axios";

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
}
