async function getData() {
  const res = await fetch(
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api`
      : `https://assignment13-lime.vercel.app/api`
  );
  const repo = await res.json();
  return { props: { repo } };
}

export default async function NewPage({ repo }) {
  const data = await getData();
  console.log(data);

  return (
    <div className="px-10 py-5 flex flex-col justify-center break-words w-full">
      <div className="text-center text-2xl pb-3 font-semibold">
        This Data fetch from Api
      </div>
      {/* <div>{repo?.message}</div>
      <div>
        <span className="font-semibold">Your version is:</span> {repo?.version}
      </div>
      <div>
        <span className="font-semibold">Your token:</span>
        {repo?.token}
      </div> */}
    </div>
  );
}
