"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function Page() {
  const [theme, setTheme] = useState("");

  function handleClick() {
    const getTheme = Cookies.get("theme");
    if (getTheme === "dark") {
      Cookies.set("theme", "light");
    } else {
      Cookies.set("theme", "dark");
    }
    setTheme(Cookies.get("theme"));
  }

  useEffect(() => {
    const getTheme = Cookies.get("theme");
    if (getTheme) {
      setTheme(getTheme);
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="pb-2 font-semibold text-xl">Your theme is now: {theme}</div>
        <button onClick={handleClick} className="px-5 py-3 bg-green-800 text-white rounded-md ">Click here to set cockie</button>
      </div>
    </main>
  );
}

export default Page;
