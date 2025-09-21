import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./components/searchBar";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <SearchBar />
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About</h1>
      <p>This app lets you search for GitHub profiles using the GitHub API.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
