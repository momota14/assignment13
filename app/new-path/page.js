"use client"
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'

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
    if(getTheme.exist()){
      setTheme(getTheme)
    }
  },[])

  return (
    <main className="min-h-screen">
      <div>Your theme is now: {theme}</div>
      <button onClick={handleClick}>Click here to set cockie</button>
    </main>
  );
}

export default Page