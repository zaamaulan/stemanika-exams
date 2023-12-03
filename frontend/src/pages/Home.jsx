import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button
        className="rounded-lg border border-zinc-600 px-8 py-4"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <p className="my-4">{count}</p>
    </div>
  );
};

export default Home;
