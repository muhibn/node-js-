import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
    Axios.post()

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
