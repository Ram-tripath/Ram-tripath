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
            <li>Developed RBAC for connections and variables, and integrated Kibana for logs in Airflow UI, providing out-of-the-box features not available in standard Airflow.</li>
            <li>Designed a self-upgrading Airflow platform, allowing automatic updates and enhancements, resulting in improved system performance and reliability.</li>
            <li>Developed a Slack chatbot application architecture that facilitated eﬃcient communication and interaction with users, responding to queries and requests promptly and eﬀectively.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Backend Developer @ Quadeye Securities</h3>
          <p className="text-sm text-gray-400">Apr 2021 – May 2022</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Troubleshot and resolved trading strategy errors, and enhanced operational processes with Python and Bash automation scripts, resulting in improved performance.</li>
          <li>Managed critical trading strategy operations in multiple regions, including the USA, Japan, China, and Australia, during market hours, maintaining high standards of performance and ensuring smooth execution of trades.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Cloud Engineer @ Ericsson India</h3>
          <p className="text-sm text-gray-400">Dec 2019 – Apr 2021</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Nexenta Cloud Healthcheck -INDIA | AUSTRALIA | CHINA | THAILAND Designed an automated health-check activity of Nexenta Cloud storage from a remote server and analyse the output to give status and feedback of Nexenta Cloud Storage services deployed.</li>
          <li>Packet Drop Counter Automation - INDIA | CHINA Automated packet drop counting in virtual machines deployed in a cloud infrastructure using a Python program, providing accurate counts at predefined intervals.</li>
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

      {/* Certifications */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-md">
          <li>Oracle Cloud - 2019 Certified Architect Associate</li>
          <li>Oracle Cloud - 2020 Certified Associate</li>
          <li>Virtual Agile Teams - International Institute for Learning</li>
          <li>Certified Network Security Specialist - International Cybersecurity Institute</li>
          <li>Python Data Structure - University of Michigan (Coursera)</li>
        </ul>
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
