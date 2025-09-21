import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : undefined,
  },
});

// Fetch a user by username
export const fetchUser = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
