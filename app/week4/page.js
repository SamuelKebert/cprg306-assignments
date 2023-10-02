import NewItem from "./new-item";
import Link from "next/link"; 

export default function Page() {
  return (
    <main>
      <Link href="/" className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Home</Link>
      <NewItem />
    </main>
  );
}