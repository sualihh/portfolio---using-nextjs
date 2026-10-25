import { create } from "zustand";





export const useModalStore = create<ModalStoreProps>((set) => ({
  isOpen: false,
  title: "",
  description: "",
  icon: null,
  onOpen: (data: any) =>
    set({
      isOpen: true,
      title: data.title,
      description: data.description,
      icon: data.icon,
    }),
  onClose: () => set({ isOpen: false }),
}));
