import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-green-500">
          Hola amigo's!!!, and this is my site
      </h1>
      <p className="mt-4 text-lg text-gray-400">
        my name is furqaan, not fur-quan, a self proclaimed polymath, to know more click the about button.
      </p>
    </Layout>
  );
}