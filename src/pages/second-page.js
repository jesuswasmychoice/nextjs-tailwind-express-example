import Link from "next/link";

export default function A() {
  return (
    <div className="bg-gray-100 grid place-items-center h-screen w-screen">
      <p className="h-16">Second Page</p>
      <Link href="/">
        <button className="bg-gray-300 px-4 h-12 inline-flex items-center rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
          Go Back
        </button>
      </Link>
    </div>
  );
};