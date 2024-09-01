import Post from "@/interfaces/post";
import Link from "next/link";

export default async function BlogHub() {
  const posts: Post[] = await fetch("http://127.0.0.1:3000/api/content").then(
    (r) => r.json(),
  );
  return (
    <main className="mt-12 grid grid-cols-3 place-items-center items-start gap-3">
      {posts.map(({ content, slug, title }) => (
        <div className="card w-96 bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="line-clamp-2">{content}</p>
            <div className="card-actions justify-end">
              <Link className="btn btn-primary btn-sm" href={`/blog/${slug}`}>
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
