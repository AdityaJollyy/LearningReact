// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {

  const data = useLoaderData();
  // const [data, setData] = useState(0);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/AdityaJollyy")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-400/40 p-4 rounded text-3xl font-semibold">
      <div className="bg-gray-900/80 text-white p-5 rounded-2xl">Github: {data.followers} Followers</div>
      <img
        src={data.avatar_url}
        alt="github profile"
        className="w-50 h-50 rounded-full mt-8"
      />
    </div>
  );
}

export default Github;

