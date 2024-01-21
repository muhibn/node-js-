import { useState } from "react";
import Axios from "axios";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    try {
       await Axios.post("http://localhost:3000/api/login", {
        email: email,
        password: password,
      }).then(response=>{

        console.log(response);
        localStorage.setItem('login',JSON.stringify({
          login:true,
          token:response.data.token
        }))
      })


      console.log("Submit Successful");

    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="card-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="form-control"
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="form-control"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
