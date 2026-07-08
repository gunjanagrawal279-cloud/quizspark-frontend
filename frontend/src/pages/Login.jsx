import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      console.log(data);

      if(response.ok){
        alert("Login Successful 🎉");

        // token save
        localStorage.setItem("token", data.token);

        // quiz page open
        navigate("/quiz");
      }
      else{
        alert(data.message || "Login Failed");
      }

    } catch(error){
      console.log(error);
      alert("Server not connected");
    }
  };


  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Welcome Back 👋</h1>
        <p>Login to continue your Quiz Journey</p>

        <form onSubmit={handleLogin}>

          <input 
            type="email" 
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

        </form>

        <p className="bottom-text">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;