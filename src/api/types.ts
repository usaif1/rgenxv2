// src/api/types.ts
import { AxiosError, AxiosRequestConfig } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiRequestConfig<D = any> extends AxiosRequestConfig<D> {
  errorCallback?: (error: ApiError) => void;
  retries?: number;
}

export interface ApiError<T = any> extends AxiosError<T> {
  isNetworkError: boolean;
  retryable: boolean;
}

export type ApiResponse<T = unknown> =
  | { success: true; data: T; status: number }
  | { success: false; error: ApiError; status: number };
