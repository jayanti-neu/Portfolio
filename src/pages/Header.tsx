export function Header() {
  return (
    <header className="border-4 p-4 flex justify-between items-center bg-green-100">
      <div>
        <h1 className=" italic text-4xl font-mono">My Portfolio</h1>
      </div>
      <div className="flex justify-between gap-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          About me
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Blogs
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          All Apps
        </button>
      </div>
    </header>
  );
}
