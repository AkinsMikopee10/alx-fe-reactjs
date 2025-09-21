import axios from "axios";

// Create an Axios instance with base URL
const api = axios.create({
  baseURL: "https://api.github.com/",
});

// Function to fetch a GitHub user by username
export const fetchUserData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
