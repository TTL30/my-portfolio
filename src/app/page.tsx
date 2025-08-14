import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8f7ee]">
      {/* Scrollable Content FIRST in DOM */}
    <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1 lg:h-screen lg:overflow-y-auto px-6 py-14 lg:px-24 lg:py-24">
        {/* ABOUT */}
        <section className="mb-12">
          <h2 className="text-lg font-bold tracking-widest text-[#193378] mb-2">ABOUT</h2>
          <hr className="border-t border-[#bfcab3] mb-4" />
          <p className="text-[#193378] text-base leading-relaxed">
            I’m a versatile AI Engineer who thrives at the intersection of research and engineering, turning complex ideas into efficient, production-ready solutions. I work on tasks such as computer vision, speech-to-text on embedded hardware, and exploring new ways of leveraging LLMs, generative AI, and agentic AI. My curiosity and adaptability drive me to explore emerging technologies and tackle challenging problems whether in AI pipelines, data processing, or creative technology applications.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-12">
          <h2 className="text-lg font-bold tracking-widest text-[#193378] mb-2">EXPERIENCE</h2>
          <hr className="border-t border-[#bfcab3] mb-4" />

          <div className="mb-6">
            <h3 className="font-bold text-[#193378]">Artificial Intelligence Engineer</h3>
            <p className="font-semibold text-[#193378]">Airbus | Nov 2022 – Feb 2025 | Toulouse</p>
            <ul className="list-disc pl-5 text-[#193378] text-base leading-relaxed">
              <li>Enhanced autonomous aircraft landing with computer vision and machine learning.</li>
              <li>Built modular pipelines for object detection and segmentation using MLOps best practices.</li>
              <li>Optimized embedded AI models for real-time performance.</li>
              <li>Developed speech-to-text prototypes and LLM-powered tools.</li>
              <li>Collaborated with teams in France and Silicon Valley.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-[#193378]">Computer Vision Intern</h3>
            <p className="font-semibold text-[#193378]">Aubay | Apr 2022 – Oct 2022 | Paris</p>
            <ul className="list-disc pl-5 text-[#193378] text-base leading-relaxed">
              <li>Applied computer vision and ML to detect accidents in dashcam videos.</li>
              <li>Managed large datasets and trained RNNs for pattern recognition.</li>
              <li>Developed a Dash app for accident detection visualization.</li>
              <li>Presented results and collaborated with stakeholders.</li>
            </ul>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="mb-12">
          <h2 className="text-lg font-bold tracking-widest text-[#193378] mb-2">FEATURED PROJECTS</h2>
          <hr className="border-t border-[#bfcab3] mb-6" />
          <div className="flex flex-col gap-8">
            {/* Project 1 */}
            <a
              href="/projects/project-one"
              className="flex items-center gap-6 bg-white rounded-xl shadow hover:shadow-lg transition p-4 group"
            >
              <Image
                src="/projects/project-one/slide2.jpg"
                alt="Acco Campaign Thumbnail"
                width={120}
                height={120}
                className="rounded-lg object-cover w-28 h-28"
              />
              <div>
                <h3 className="font-bold text-[#193378] text-xl mb-1">Agentic AI Writing Assistant</h3>
                <p className="text-[#193378] text-base">
                  Revamped Acco’s brand with a bold, engaging campaign for global impact.
                </p>
              </div>
            </a>
            {/* Project 2 */}
            <a
              href="/projects/project-two"
              className="flex items-center gap-6 bg-white rounded-xl shadow hover:shadow-lg transition p-4 group"
            >
              <Image
                src="/projects/project2-thumb.jpg"
                alt="Luna Direction Thumbnail"
                width={120}
                height={120}
                className="rounded-lg object-cover w-28 h-28"
              />
              <div>
                <h3 className="font-bold text-[#193378] text-xl mb-1">Luna Direction</h3>
                <p className="text-[#193378] text-base">
                  Crafted Luna’s creative direction to elevate brand identity and audience connection.
                </p>
              </div>
            </a>
            {/* Project 3 */}
            <a
              href="/projects/project-three"
              className="flex items-center gap-6 bg-white rounded-xl shadow hover:shadow-lg transition p-4 group"
            >
              <Image
                src="/projects/project3-thumb.jpg"
                alt="Smart Grid Simulator Thumbnail"
                width={120}
                height={120}
                className="rounded-lg object-cover w-28 h-28"
              />
              <div>
                <h3 className="font-bold text-[#193378] text-xl mb-1">Smart Grid Simulator</h3>
                <p className="text-[#193378] text-base">
                  Multi-agent simulation platform for smart meter networks, enabling advanced data analysis and KPI optimization.
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-12">
          <h2 className="text-lg font-bold tracking-widest text-[#193378] mb-2">EDUCATION</h2>
          <hr className="border-t border-[#bfcab3] mb-4" />
          <div className="mb-6">
            <h3 className="font-bold text-[#193378]">Double degree in AI & Data Science</h3>
            <p className=" text-[#193378]">CentraleSupélec | 2021 – 2022 | Metz</p>
          </div>
          <div>
            <h3 className="font-bold text-[#193378]">Master's degree in Computer Science</h3>
            <p className="text-[#193378]">ECE - Ecole Centrale d’Electronique | 2017 – 2021 | Paris</p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-12">
          <h2 className="text-lg font-bold tracking-widest text-[#193378] mb-2">SKILLS</h2>
          <hr className="border-t border-[#bfcab3] mb-4" />
          <div className="space-y-6">
            <div>
              <span className="font-bold text-[#193378]">Programming:</span>
              <span className="text-[#193378]"> Python, C++, HTML/CSS/JavaScript and SQL.</span>
            </div>
            <div>
              <span className="font-bold text-[#193378]">AI &amp; Data Science:</span>
              <span className="text-[#193378]"> Machine Learning, Deep Learning, Computer Visiom, Speech-to-Text, LLMs, Agentic AI.</span>
            </div>
            <div>
              <span className="font-bold text-[#193378]">Mlops &amp; frameworks:</span>
              <span className="text-[#193378]">PyTorch, OpenCV, Dash, Streamlit, W&amp;B, Aim, AWS </span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="mb-12">
          <h2 className="text-lg font-bold tracking-widest text-[#193378] mb-2">CONTACT</h2>
          <hr className="border-t border-[#bfcab3] mb-4" />
          <ul className="text-[#193378] text-base leading-relaxed mb-8">
            <li>Email: <a href="mailto:tiagotlpro@gmail.com" className="underline hover:text-[#1d3c2b]">tiagotlpro@gmail.com</a></li>
            <li>Phone: <a href="tel:+33778955700" className="underline hover:text-[#1d3c2b]">+33 7 78 95 57 00</a></li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/tiago-teixeira-lopes-7250aa16b/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#1d3c2b]"
              >
                linkedin.com/in/tiagoteixeira
              </a>
            </li>
          </ul>
          <a
            href="/resume-Tiago-Teixeira.pdf"
            download
            className="inline-block mt-6 px-6 py-2 bg-[#193378] text-white font-semibold rounded hover:bg-[#3575fe] transition"
          >
            Download Resume (PDF)
          </a>
        </section>
      </div>
      {/* Profile Section SECOND in DOM */}
      <aside className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[#193378] text-white h-auto lg:h-screen lg:sticky lg:top-0 right-0 order-1 lg:order-2">
        <div className="flex flex-col items-center px-8 py-12 lg:py-0">
          <h1 className="text-7xl font-bold mb-8 text-center text-[#f9f7eb]">Tiago Teixeira</h1>
          <div className="w-60 h-60 overflow-hidden mb-8 shadow-lg">
            <Image
              src="/profile3.png"
              alt="Profile"
              width={240}
              height={240}
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-3xl font-semibold text-center mb-4  text-[#f9f7eb]">
            Artificial Intelligence <br /> Engineer
          </h2>
        </div>
      </aside>
    </div>
  );
}