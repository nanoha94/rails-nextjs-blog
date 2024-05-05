import { Post } from "./types/post";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/v1/posts", {
    cache: "no-store",
  });
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main>
      main
      {/* <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </main>
  );
}
