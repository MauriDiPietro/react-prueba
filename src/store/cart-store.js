import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  // [{name: 'sadsad', price: 2}, {name: 'sdfsdf', price}]
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  /*
[{id: 1}, {id: 2}, {id: 3}]
removeItem(2)
[{id: 1}, {id: 3}]
  */
  clear: () => set({ items: [] }),
}));

export default useCartStore;
