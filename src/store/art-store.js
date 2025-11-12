import { create } from "zustand";
import { getArts, getArtById } from "../services/api-art";

const useArtStore = create((set, get) => ({
  arts: [],
  art: null,
  loading: false,
  error: false,
  errorArt: false,
  search: "",
  setSearch: (value) => set({ search: value }),
  resultSearch: [],
  page: 1,
  setPage: (value) => set({ page: value }),
  totalPages: 0,
  setTotalPages: (value) => set({ totalPages: value }),
  getAllArts: async () => {
    set({ loading: true });
    try {
      if (get().search !== "") {
        set({
          arts: get().arts.filter((art) => art.title.includes(get().search) || art.artistDisplayName.includes(get().search)),
        });
      } else {
        const ids = await getArts();
        /*
        {"total":1547,"objectIDs":[437056,764091,438345]}
        */
        const promises = ids.map((id) => getArtById(id));
        //[<Promise>]
        const response = await Promise.all(promises);

        set({ arts: response });
      }
      get().setTotalPages(Math.ceil(get().arts.length / 6))
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  getArtById: async (id) => {
    set({ loading: true });
    try {
      const response = await getArtById(id);
      set({ art: response });
    } catch (error) {
      set({ errorArt: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useArtStore;
