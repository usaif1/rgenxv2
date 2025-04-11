// factory function
import { requestFactory } from "@/api/service";

import { commonErrorHandler } from "@/utils/helper";

const endpoints = {
  getAllDoctors: "/doctors/getdoctors",
};

export const doctorsAPI = {
  fetchAllDoctors: async function () {
    const response = await requestFactory.get({
      url: endpoints.getAllDoctors,
      onError: () => commonErrorHandler("Failed to fetch doctors"),
    });

    if (response.success) {
      return response.data;
    }
  },
};
