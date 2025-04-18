// // factory function
// import { requestFactory } from "@/api/service";

// // store
// import { useAuthStore } from "@/globalStore";

// // types
// import { User } from "../types/authTypes";
// import { commonErrorHandler } from "@/utils/helper";

// const { setAuthUser, stopLoader } = useAuthStore.getState();

// const endpoints = {
//   login: "/login",
// };

// export const authAPI = {
//   login: async (args: { email: string; password: string }) => {
//     const response = await requestFactory.post({
//       url: endpoints.login,
//       body: args,
//       onError: () => commonErrorHandler("Login failed"),
//       finallyCallback: () => {
//         stopLoader("auth/login");
//       },
//     });

//     if (response.success) {
//       if (!(response.data as User)?.token) {
//         commonErrorHandler("Invalid login credentials");
//         return null;
//       }

//       setAuthUser(response.data as User);
//       return response;
//     }

//     return null;
//   },
// };

import supabaseClient from "@/api/client.supabase";
import { commonErrorHandler } from "@/utils/helper";

export const authAPI = {
  signupNewUser: async function (args: { email: string; password: string }) {
    const { data, error } = await supabaseClient.auth.signUp(args);

    if (error) {
      commonErrorHandler("There was an error signin up");
      return null;
    }

    return data;
  },

  login: async (args: { email: string; password: string }) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword(args);

    if (error) {
      commonErrorHandler(error.message);
      return null;
    }

    return data;

    // const response = await requestFactory.post({
    //   url: endpoints.login,
    //   body: args,
    //   onError: () => commonErrorHandler("Login failed"),
    //   finallyCallback: () => {
    //     stopLoader("auth/login");
    //   },
    // });

    // if (response.success) {
    //   if (!(response.data as User)?.token) {
    //     commonErrorHandler("Invalid login credentials");
    //     return null;
    //   }

    //   setAuthUser(response.data as User);
    //   return response;
    // }

    return null;
  },

  logout: async function () {
    const { error } = await supabaseClient.auth.signOut({ scope: "global" });

    if (error) {
      commonErrorHandler(error.message);
      return null;
    }

    return;
  },
};
