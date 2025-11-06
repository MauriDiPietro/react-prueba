import { create } from "zustand";
import { getArts, getArtById } from "../services/api-art";

export const useArtStore = create((set) => ({
  arts: [],
  loading: false,
  error: false,
  getAllArts: async () => {
    set({ loading: true });
    try {
      const ids = await getArts();
      /*
      {"total":1547,"objectIDs":[437056,764091,438345]}
      */
      const promises = ids.map((id) => getArtById(id))
      // []
      const response = await Promise.all(promises)
      set({ arts: response });
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useArtStore;

