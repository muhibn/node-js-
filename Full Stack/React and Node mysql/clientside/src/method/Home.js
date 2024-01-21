import Axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [Username, setUsername] = useState([]); // Initialize as an empty array

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get")
      .then((response) => {
        // Assuming the server responds with an object containing a 'data' property.
        const userData = response.data;
        console.log(userData);
        setUsername(userData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Add an empty dependency array to run the effect once

  return (
    <div className="home">
      {Username.map((val) => (
        <div className="Blog" key={val.use_id}>
          <h1>{val.username}</h1>
          <h2>{val.password}</h2>
        </div>
      ))}
    </div>
  );
}
