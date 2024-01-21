import { useState } from "react";
import Axios from 'axios'; // Use 'axios' instead of 'Axios' (lowercase 'a')

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

  
      const response = await Axios.post('http://localhost:3001/api/login', {
        username: username,
        password: password,
      }).then(()=>{
          console.log("Submit Successfuly ");
      }).catch((err)=> {

      console.log("Error:", err);
      });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          id="username"
          required
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label>Password</label>
        <input
          type="password"
          required
          id="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
