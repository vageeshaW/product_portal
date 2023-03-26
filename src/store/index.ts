import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {InitialProducts, InitialUsers} from './data';
import {IProduct, IState, IStateMethods, IUsers} from './types';

const rootState: IState = {
  isLoggedIn: false,
  user: {
    id: null,
    name: null,
  },
  products: InitialProducts,
  users: InitialUsers,
};

export interface IUseStore extends IState, IStateMethods {}

export const useStore = create<IUseStore>(
  persist(
    set => ({
      ...rootState,
      changeLoginStatus: (status: boolean) => set(() => ({isLoggedIn: status})),
      setUser: (id: string | null, name: string | null) =>
        set(() => ({
          user: {
            id,
            name,
          },
        })),
      clearUser: () => {
        set(() => ({
          user: {
            id: null,
            name: null,
          },
        }));
      },
      addUsers: (newUser: IUsers) => {
        set((state: IState) => ({
          users: [...state?.users, newUser],
        }));
      },
      addProduct: (newProduct: IProduct) =>
        set((state: IState) => ({
          products: {
            ...state?.products,
            newProduct,
          },
        })),
    }),

    {
      name: 'my-persisted-store',
      // By default, Zustand uses localStorage for persistence.
      // You can specify sessionStorage instead by uncommenting the line below:
      // getStorage: () => sessionStorage,
    },
  ),
);

export default useStore;
