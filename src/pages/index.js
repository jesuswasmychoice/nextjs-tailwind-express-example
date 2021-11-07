import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 grid place-items-center h-screen w-screen">
      <Link href="/second-page">
        <button className="bg-gray-300 px-4 h-12 inline-flex items-center rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
          Second Page
        </button>
      </Link>
    </div>
  );
};