import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between w-full bg-white px-10 py-5 shadow-md">
      <div className="text-2xl font-semibold">Logo</div>
      <div className="flex gap-3">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/old-path">Old path</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
