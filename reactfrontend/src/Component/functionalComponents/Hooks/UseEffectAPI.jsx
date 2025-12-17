import axios from "axios";
import { useState, useEffect } from "react";

const UseEffectAPI = () => {
  const [postsparameter, setPostsParameter] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPostsParameter(res.data);
      })
      .catch(() => {
        console.log("Can't fetch from the API");
      });
  }, []);

  return (
    <div>
      <h2>UseEffectAPI Component</h2>
      <p>It is going to fetch data from JSON typicode placeholder</p>

      <ol>
        <p>The API values fetched:</p>

        {postsparameter.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};
export default UseEffectAPI;