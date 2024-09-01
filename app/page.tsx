import { getServerSession } from "next-auth";
import Image from "next/image";
export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    return <p>You must be signed in...</p>;
  }

  return (
    <main>
      <h1 className="text-xl text-pink-200">I am the bone of my sword</h1>
      <div className="flex w-max gap-4"></div>
    </main>
  );
}
