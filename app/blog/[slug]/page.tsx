import Post from "@/interfaces/post";

interface Props {
  params: { slug: string };
}

export const generateStaticParams = async ({ params }: Props) => {
  const res = await fetch(`http://127.0.0.1:3000/api/content`);
  const posts: Post[] = await res.json();
  return posts.map((post) => ({ slug: post.slug }));
};

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch("http://127.0.0.1:3000/api/content").then(
    (r) => r.json(),
  );
  const post = posts.find((p) => p.slug === params.slug)!;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
