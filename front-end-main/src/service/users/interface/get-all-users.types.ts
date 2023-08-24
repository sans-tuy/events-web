export interface GetUsersTypeResponse {
  uuid: string;
  name: string;
  email: string;
  role: "admin" | "visitor";
  profil_image: string;
  url: string;
}
