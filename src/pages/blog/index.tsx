// ✅ NO fs import at top level
import Link from "next/link";
import Layout from "@/components/Layout";

interface PostMeta {
  title: string;
  date: string;
  slug: string;
  description: string;
}

interface BlogPageProps {
  posts: PostMeta[];
}

export default function Blog({ posts }: BlogPageProps) {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="border p-4 rounded-lg hover:bg-neutral-800 transition">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-gray-400">{post.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

// ✅ ONLY import fs here (server-side)
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      slug: data.slug,
      description: data.description,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
