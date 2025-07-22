import Layout from "@/components/Layout";
import Link from "next/link";


const projects = [
  {
    title: "Misti Companion App",
    description: "iOS app for a smart nebuliser device with real-time tracking and AWS backend.",
    tech: ["Flutter", "AWS Lambda", "DynamoDB"],
    link: "https://github.com/furqaanmoolji/misti-app",
  },
  {
    title: "Flappy Bird AI",
    description: "AI agent trained with NEAT to play Flappy Bird autonomously.",
    tech: ["Python", "Pygame", "NEAT"],
    link: "https://github.com/furqaanmoolji/flappy-bird-ai",
  },
  {
    title: "Job Match Platform",
    description: "Web app that matches job seekers with listings using FastText embeddings.",
    tech: ["Flask", "FastText", "JavaScript"],
    link: "https://github.com/furqaanmoolji/job-matcher",
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-3xl space-y-10">
        <h1 className="text-3xl font-bold">projects</h1>
        <p>here are some projects i have worked on lately</p>
        {projects.map((proj, i) => (
          <div key={i} className="border border-neutral-700 rounded-md p-4 hover:border-white transition">
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p className="text-sm text-gray-400 mt-1">{proj.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              {proj.tech.join(" • ")}
            </div>
            <Link
              href={proj.link}
              target="_blank"
              className="text-blue-400 hover:underline text-sm mt-2 inline-block"
            >
              View on GitHub →
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
