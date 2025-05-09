import { Mail, Linkedin, Phone } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen p-6 md:p-12 lg:p-20 space-y-16">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-5xl font-bold">Ram Tripathi</h1>
        <p className="text-lg">Senior Software Engineer · Bengaluru</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-300">
          <a href="mailto:ram.rounak27@gmail.com" className="flex items-center space-x-1 hover:text-white">
            <Mail className="w-4 h-4" /> <span>ram.rounak27@gmail.com</span>
          </a>
          <a href="tel:+919003737733" className="flex items-center space-x-1 hover:text-white">
            <Phone className="w-4 h-4" /> <span>+91 90037 37733</span>
          </a>
          <a href="https://linkedin.com/in/ram-kishore-tripathi-14b5374a" target="_blank" className="flex items-center space-x-1 hover:text-white" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4" /> <span>LinkedIn</span>
          </a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I’m a Senior Software Engineer specializing in backend systems, cloud automation, and data engineering tools like Apache Airflow. I've built scalable tools for data orchestration, log analytics integrations, and internal developer tools.
        </p>
        <p>
          With experience across retail tech, trading platforms, and cloud services, I focus on systems that improve operational efficiency and developer productivity.
        </p>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-semibold text-center">Experience</h2>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Senior Software Engineer @ Lowe's India</h3>
          <p className="text-sm text-gray-400">Jun 2022 – Present</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Developed RBAC for Airflow Connections & Variables</li>
            <li>Integrated Kibana logs into the Airflow UI</li>
            <li>Designed a self-upgrading Airflow platform</li>
            <li>Built Slack chatbot for query-response automation</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Backend Developer @ Quadeye Securities</h3>
          <p className="text-sm text-gray-400">Apr 2021 – May 2022</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Automated trading tasks using Python and Bash</li>
            <li>Resolved live trading errors across multiple global markets</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Cloud Engineer @ Ericsson India</h3>
          <p className="text-sm text-gray-400">Dec 2019 – Apr 2021</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Automated health check and diagnostics of Nexenta Cloud</li>
            <li>Built packet drop counter tools for virtualized networks</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <span className="bg-gray-800 p-2 rounded">Airflow</span>
          <span className="bg-gray-800 p-2 rounded">Python</span>
          <span className="bg-gray-800 p-2 rounded">Bash</span>
          <span className="bg-gray-800 p-2 rounded">ReactJS</span>
          <span className="bg-gray-800 p-2 rounded">Kubernetes</span>
          <span className="bg-gray-800 p-2 rounded">DBMS</span>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="mt-2">B.Tech in Electronics and Communication – VIT University (2015–2019) – 86.9%</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-10">
        <p>© {new Date().getFullYear()} Ram Tripathi. Built with React & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
