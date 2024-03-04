import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';

interface UserState {
  authenticated: boolean;
  setAuth: (auth: boolean) => void;
}

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        authenticated: false,
        setAuth: (v: boolean): void => set(() => ({ authenticated: v })),
      }),
      {
        name: 'user-storage',
      }
    )
  )
);

export default useUserStore;
