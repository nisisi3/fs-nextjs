import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={
            image ??
            "https://media.discordapp.net/attachments/978346129504739439/980672949432508416/elwine_crop.png?ex=66d5d89b&is=66d4871b&hm=556dadc5311644c95f8167f369b91fe17ef6d9a8bf311717fb387154bd8962d7&=&format=webp&quality=lossless&width=308&height=279"
          }
          alt={`${name}'s profile`}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          <Link className="text-[#35e668] underline" href={`/users/${id}`}>
            {name}
          </Link>
        </h2>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
