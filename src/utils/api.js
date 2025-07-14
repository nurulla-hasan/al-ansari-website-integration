const BASE_URL = "http://10.0.60.118:5006";

export const fetcher = async (url) => {
  const res = await fetch(`${BASE_URL}${url}`);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
};
 