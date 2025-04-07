// factory function
import { requestFactory } from "@/api/service";

// store
import { useAuthStore } from "@/globalStore";

// types
import { User } from "../types/authTypes";

const { setAuthUser, stopLoader } = useAuthStore.getState();

const endpoints = {
  login: "/login",
};

export const authAPI = {
  login: async (args: { email: string; password: string }) => {
    const response = await requestFactory.post({
      url: endpoints.login,
      body: args,
      finallyCallback: () => {
        stopLoader("auth/login");
      },
    });

    if (response.success) {
      setAuthUser(response.data as User);
      return response;
    }

    return null;
  },
};
