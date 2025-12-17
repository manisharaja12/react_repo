import { useEffect, useState } from "react";
import axios from "axios";

const FakeImageAPI = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setImgUrl(`https://picsum.photos/300?random=${Math.random()}`);
  }, []);

  return (
    <div>
      <h2>Random Fake Image</h2>
      <img src={imgUrl} alt="fake" />
    </div>
  );
};

export default FakeImageAPI;