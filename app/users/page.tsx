import UserCard from "@/components/user-card";
import { prisma } from "@/libs/prisma";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="grid grid-cols-3 place-items-center items-start">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
