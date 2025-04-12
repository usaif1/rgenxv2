// factory function
import { requestFactory } from "@/api/service";

// store
import { useAuthStore } from "@/globalStore";

// types
import { User } from "../types/authTypes";
import { commonErrorHandler } from "@/utils/helper";

const { setAuthUser, stopLoader } = useAuthStore.getState();

const endpoints = {
  login: "/login",
};

export const authAPI = {
  login: async (args: { email: string; password: string }) => {
    const response = await requestFactory.post({
      url: endpoints.login,
      body: args,
      onError: () => commonErrorHandler("Login failed"),
      finallyCallback: () => {
        stopLoader("auth/login");
      },
    });

    if (response.success) {
      if (!(response.data as User)?.token) {
        commonErrorHandler("Invalid login credentials");
        return null;
      }

      setAuthUser(response.data as User);
      return response;
    }

    return null;
  },
};
