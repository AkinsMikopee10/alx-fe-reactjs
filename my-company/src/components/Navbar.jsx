import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      background: "purple",
      color: "#fff",
    },
    logo: {
      margin: 0,
      fontSize: "20px",
    },
    links: {
      display: "flex",
      gap: "15px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "16px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>My Company</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/about" style={styles.link}>
          About
        </Link>
        <Link to="/services" style={styles.link}>
          Services
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
