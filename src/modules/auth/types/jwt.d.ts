// types/jwt-decode.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtPayload } from "jwt-decode";

declare module "jwt-decode" {
  interface JwtPayload {
    // Add your custom claims
    userFirstName: string;
    userLastName: string;
    userId: string;
  }
}
