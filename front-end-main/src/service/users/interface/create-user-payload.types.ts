export interface UserCreatePayload {
  name: string;
  email: string;
  password: string;
  confPassword: string;
  role: string;
  profil_image: fileUpload;
}

export interface fileUpload extends File {
  preview: string;
}
