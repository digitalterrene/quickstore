import { create } from "zustand";

export const useProductsWrapper = create((set: any) => ({
  inputs: {
    email: "",
    password: "",
    access_key: "",
    security_key: "",
  },
  isGridView: true,
  showSidenav: true,
  toggleIsGridView: () =>
    set((state: any) => ({ isGridView: !state.isGridView })),
  toggleShowSidenav: () =>
    set((state: any) => ({ showSidenav: !state.showSidenav })),
  setInputs: (newInputs: any) =>
    set((state: any) => ({
      inputs: {
        ...state.inputs,
        ...newInputs,
      },
    })),
}));
export const useSidebarStates = create((set: any) => ({
  showSidebar: true,
  toggleShowSidebar: () =>
    set((state: any) => ({ showSidebar: !state.showSidebar })),
}));
