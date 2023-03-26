export interface IUser {
  id: number;
  name: string;
}

export interface IUsers {
  id?: number;
  name: string;
  address: string;
  postCode: string;
  city: string;
  country: string;
  email: string;
  password: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  url: string;
}

export interface IState {
  isLoggedIn: boolean;
  user: IUser;
  products: IProduct[];
  users: IUsers[];
}

export interface IStateMethods {
  changeLoginStatus: (status: boolean) => void;
  setUser: (id: string | null, name: string | null) => void;
  clearUser: () => void;
  addProduct: (status: IProduct) => void;
  addUsers: (status: IUsers) => void;
}
