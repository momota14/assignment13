"use client"
import axios from "axios";
import { useEffect, useState } from "react";


// export async function fetchApi() {
//   const res = await fetch(
//     process.env.NODE_ENV === "development"
//       ? `http://localhost:3000/api`
//       : `/api`
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const baseURL = process.env.NODE_ENV === "development" ? `http://localhost:3000/api` : `https://assignment13-lime.vercel.app/api`;

export default  function NewPage() {
  const [data, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [])

  // console.log(data)

  return (
    <div className="px-10 py-5 flex flex-col justify-center break-words w-full">
      <div className="text-center text-2xl pb-3 font-semibold">
        This Data fetch from Api
      </div>
      <div>{data?.message}</div>
      <div>
        <span className="font-semibold">Your version is:</span> {data?.version}
      </div>
      <div>
        <span className="font-semibold">Your token:</span>
        {data?.token}
      </div>
    </div>
  );
}
