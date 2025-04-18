// client
import supabaseClient from "@/api/client.supabase";
import { useDoctorStore } from "@/globalStore";

// utils
import { commonErrorHandler } from "@/utils/helper";

const { setCurrentDoctor } = useDoctorStore.getState();

export const doctorsAPI = {
  fetchCurrentDoctorDetails: async function () {
    const { data, error } = await supabaseClient.from("doctors").select("*");

    if (error) {
      return commonErrorHandler("Error fetching doctor details");
    }

    setCurrentDoctor(data[0]);

    return data;
  },
};
