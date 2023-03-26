export interface ILoginInput {
  userName: string;
  password: string;
}

export interface IResponse {
  success: string;
  message: string;
  data?: any;
}
