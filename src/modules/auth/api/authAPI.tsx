import { requestFactory } from "@/api/service";

const endpoints = {
  login: "/login",
};

export const authAPI = {
  login: async (args: { email: string; password: string }) => {
    const response = await requestFactory.post(endpoints.login, args);

    if (response.success) {
      console.log("Login successful", response.data);
    }

    return null;
  },
};
