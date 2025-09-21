import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  try {
    let query = "";

    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    if (!query) query = "type:user";

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query,
        per_page: 5, // results per page
        page,
      },
    });

    return response.data; // contains { total_count, items: [] }
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
};
