import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/libs/prisma";
import { ProfileForm } from "@/components/profile-form";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("api/auth/signin");
  }

  const currentUserEmail = session?.user?.email!;
  console.log(session?.user);

  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });

  return (
    <>
      <h1>Dashboard</h1>
      <ProfileForm user={user} />
    </>
  );
}
