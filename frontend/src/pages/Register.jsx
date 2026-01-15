import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/v1/auth/register", {
      email,
      password
    });
    navigate("/login");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
        <button>Register</button>
      </form>
    </div>
  );
}
