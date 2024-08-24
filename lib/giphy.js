const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
const BASE_URL = "https://api.giphy.com/v1/gifs";

export const searchGifs = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=10`
  );
  const data = await response.json();
  return data.data;
};
