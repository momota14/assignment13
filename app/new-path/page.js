export async function fetchApi() {
  const res = await fetch(`http://localhost:3000/api`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function NewPage() {
  const data = await fetchApi();
  console.log(data.message);

  return (
    <div className="px-10 py-5 flex flex-col justify-center break-words w-full">
      <div className="text-center text-2xl pb-3 font-semibold">This Data fetch from Api</div>
      <div>{data.message}</div>
      <div><span className="font-semibold">Your version is:</span> {data.version}</div>
      <div><span className="font-semibold">Your token:</span>{data.token}</div>
    </div>
  );
}
