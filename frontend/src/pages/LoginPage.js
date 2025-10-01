import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Use email as username if backend expects it
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
  "http://127.0.0.1:8000/api/auth/login/",  // or "http://localhost:8000/api/auth/login/"
  { username: email, password: password }
);

      // Save JWT tokens in localStorage
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      alert("Login successful!");
      navigate("/"); // Redirect to landing or dashboard
    } catch (err) {
      if (err.response) {
        alert("Invalid credentials! " + JSON.stringify(err.response.data));
      } else if (err.request) {
        alert("No response from server. Make sure backend is running!");
      } else {
        alert("Error: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleLogin}>
          <h2 style={styles.title}>Login</h2>
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <p style={styles.text}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    width: "350px",
    padding: "40px",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: { marginBottom: "20px" },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    backgroundColor: "#0D6EFD",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  text: {
    marginTop: "15px",
    fontSize: "14px",
  },
};

export default LoginPage;
