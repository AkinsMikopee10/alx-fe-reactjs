const Footer = () => {
  const styles = {
    footer: {
      marginTop: "40px",
      padding: "20px",
      background: "purple",
      color: "#fff",
      textAlign: "center",
    },
    logo: {
      width: "50px",
      height: "50px",
      marginBottom: "10px",
    },
    text: {
      fontSize: "14px",
      color: "#bbb",
    },
  };

  return (
    <footer style={styles.footer}>
      {/* Example logo image */}
      <img
        src="https://via.placeholder.com/50"
        alt="Company Logo"
        style={styles.logo}
      />
      <p style={styles.text}>
        © {new Date().getFullYear()} My Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
