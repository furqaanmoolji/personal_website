import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Furqaan Moolji</title>
        <meta name="description" content="Furqaan's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex bg-background text-foreground">
        {/* Sidebar Nav */}
        <nav className="w-48 border-r border-neutral-800 p-6 space-y-4 fixed sm:relative">
          <Link href="/" className="block font-bold text-lg hover:underline">
            Furqaan
          </Link>
          <Link href="/about" className="block hover:underline">
            About
          </Link>
          <Link href="/projects" className="block hover:underline">
            Projects
          </Link>
          <Link href="/blog" className="block hover:underline">
            Blog
          </Link>
        </nav>

        {/* Content */}
        <main className="flex-1 ml-48 p-8">{children}</main>
      </div>
    </>
  );
}
