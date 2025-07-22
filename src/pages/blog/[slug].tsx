import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "@/components/Layout";

interface BlogPostProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    date: string;
  };
}

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{frontMatter.date}</p>
        <article className="prose prose-invert">
          <MDXRemote {...source} />
        </article>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const filenames = fs.readdirSync(postsDir);

  const paths = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      params: { slug: data.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const postPath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
