import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    setPage(1);

    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: 1,
      });
      setResults(data.items);
      setHasMore(data.items.length > 0 && data.total_count > data.items.length);
    } catch {
      setError("Looks like we cant find the user(s).");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: nextPage,
      });
      setResults((prev) => [...prev, ...data.items]);
      setPage(nextPage);
      setHasMore(data.items.length > 0);
    } catch {
      setError("Error loading more results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-2xl shadow-md flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Advanced GitHub User Search
        </h2>

        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location (e.g. Lagos)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Loading / Error */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Results */}
      <div className="mt-6 grid gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h3 className="text-lg font-bold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
              {/* Placeholder - repo count & location will need extra fetch */}
              <p className="text-sm text-gray-500">
                Location & repos require extra user detail fetch
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {hasMore && !loading && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
