import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Career Catalyst. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#0D6EFD",
    color: "#fff",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif"
  }
};

export default Footer;
