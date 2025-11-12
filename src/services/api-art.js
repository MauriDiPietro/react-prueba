import axios from "axios";

const URL = "https://collectionapi.metmuseum.org/public/collection/v1";

export const getArts = async (q = "painting", limit = 12) => {
  try {
    const responseNoLimit = await axios.get(`${URL}/search`, {
      params: { q, hasImages: true },
    });
    const responseLimit =
      responseNoLimit.data && responseNoLimit.data.objectIDs
        ? responseNoLimit.data.objectIDs.slice(0, limit)
        : [];
    return responseLimit;
  } catch (error) {
    throw new Error(error);
  }
};

export const getArtById = async (id) => {
  try {
    const response = await axios.get(`${URL}/objects/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
