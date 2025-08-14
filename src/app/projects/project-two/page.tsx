import Image from "next/image";
import Link from "next/link";

export default function ProjectOne() {
  return (
    <div className="min-h-screen bg-[#f8f7ee] px-6 py-14 lg:px-24 lg:py-24">
      <Link href="/" className="text-[#24543b] underline mb-8 inline-block">&larr; Back to Portfolio</Link>
      <h1 className="text-3xl font-bold text-[#24543b] mb-4">Agentic AI Writing Assistant</h1>
      <Image
        src="/projects/project1-thumb.jpg"
        alt="Agentic AI Writing Assistant"
        width={600}
        height={340}
        className="rounded-lg mb-8 object-cover"
      />
      <p className="text-[#24543b] text-lg leading-relaxed mb-6">
        A deep learning system for autonomous aircraft landing, integrating computer vision and real-time decision making.
      </p>
      <ul className="list-disc pl-5 text-[#24543b] text-base leading-relaxed mb-8">
        <li>Developed with Python, PyTorch, and OpenCV</li>
        <li>Real-time inference and robust performance</li>
        <li>Deployed on embedded hardware</li>
      </ul>
      <a
        href="https://github.com/yourusername/project-one"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-[#24543b] text-white font-semibold rounded hover:bg-[#183c2a] transition"
      >
        View on GitHub
      </a>
    </div>
  );
}