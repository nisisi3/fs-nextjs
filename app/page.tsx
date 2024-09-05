import Counter from "@/components/counter";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export const metadata: Metadata = {
  title: "Schmev's Site",
  description: "I am the bone of my swords",
};

export default async function Home() {
  // const session = await getServerSession();
  // if (!session) {
  //   return <p>You must be signed in...</p>;
  // }

  return (
    <main>
      <Counter />
    </main>
  );
}
