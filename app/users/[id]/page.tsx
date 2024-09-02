import { prisma } from "@/libs/prisma";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: user?.name };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};

  return (
    <div className="mx-auto mt-12 w-fit rounded-md bg-slate-600 p-6 text-center text-white">
      <h1 className="text-4xl font-bold">{name}</h1>
      <img
        src={
          image ??
          "https://media.discordapp.net/attachments/978346129504739439/1088682672097853481/received_142057631166034.jpg?ex=66d6923f&is=66d540bf&hm=b26ff0bf17e3bee66997a62970d74df24c483d4ffaa6d4910403b6a72ab624e6&=&format=webp&width=684&height=701"
        }
        width={300}
        alt={`${name}'s profile`}
      />
      <h3>Bio</h3>
      <p className="text-lg">{bio}</p>
    </div>
  );
}
