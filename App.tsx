import React, { useState } from 'react';
import { Linkedin, Mail, Globe, Calendar, MapPin, Briefcase, GraduationCap, Phone, Github, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById('resume-content');
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('jorrit-harmanny-resume.pdf');
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div id="resume-content">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://www.joy-ict.nl/jorrit-harmanny.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">Jorrit Harmanny</h1>
              <p className="text-xl mb-4 text-emerald-100">Senior Software Developer</p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://www.linkedin.com/in/jorrit-h-5246bba3/"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a href="https://github.com/joyictnl"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition">
                  <Github size={20} />
                  GitHub
                </a>
                <a href="https://www.joy-ict.nl"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition">
                  <Globe size={20} />
                  Website
                </a>
                <a href="mailto:jorrit@joy-ict.nl"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition">
                  <Mail size={20} />
                  Email
                </a>
                <a href="tel:+31624497032"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition">
                  <Phone size={20} />
                  Phone
                </a>
                  <button
                    onClick={generatePDF}
                    disabled={isGenerating}
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-full transition"
                  >
                    {isGenerating ? (
                      <>Generating...</>
                    ) : (
                      <>
                        <Download size={20} />
                        Download CV
                      </>
                    )}
                  </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      

      <main className="container mx-auto px-4 max-w-5xl py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Name:</span> Jorrit Harmanny
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Location:</span> Kampen, Netherlands
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Nationality:</span> Dutch
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> jorrit@joy-ict.nl
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +31624497032
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Briefcase className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">DevOps Engineer</h3>
                  <p className="text-gray-600">Hedge</p>
                  <div className="flex items-center gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <Calendar size={16} />
                      Apr 2022 - Present
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <MapPin size={16} />
                      Utrecht, Netherlands
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Leading DevOps initiatives, implementing and maintaining CI/CD pipelines, and managing cloud infrastructure.
                Specializing in automation, containerization, and infrastructure as code practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Briefcase className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Founder / Owner</h3>
                  <p className="text-gray-600">JOY ICT</p>
                  <div className="flex items-center gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <Calendar size={16} />
                      Apr 2017 - Present
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <MapPin size={16} />
                      Kampen, Netherlands
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Running an independent software consultancy, providing DevOps and development services to clients.
                Specializing in cloud solutions, infrastructure automation, and custom software development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Briefcase className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Software Developer</h3>
                  <p className="text-gray-600">Hermess BV</p>
                  <div className="flex items-center gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <Calendar size={16} />
                      Apr 2021 - Present
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <MapPin size={16} />
                      Emmeloord, Netherlands
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Initially employed full-time, now continuing as a freelance developer through JOY ICT.
                Developing and maintaining enterprise software solutions, focusing on scalability and performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Briefcase className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">System Administrator</h3>
                  <p className="text-gray-600">Evangelische Omroep (EO)</p>
                  <div className="flex items-center gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <Calendar size={16} />
                      Sep 2017 - Apr 2021
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <MapPin size={16} />
                      Hilversum, Netherlands
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Managed and maintained IT infrastructure, implemented automation solutions, and provided technical support.
                Focused on system reliability, security, and process improvement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Briefcase className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Data Analyst</h3>
                  <p className="text-gray-600">Verhoek Europe</p>
                  <div className="flex items-center gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <Calendar size={16} />
                      Jan 2015 - Dec 2015
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <MapPin size={16} />
                      Genemuiden, Netherlands
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Analyzed business data and created reports to support decision-making processes.
                Implemented data-driven solutions to improve operational efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              // Development
              'TypeScript', 'React', 'Node.js', 'Python',
              // DevOps & Infrastructure
              'CI/CD', 'Ansible', 'Kubernetes', 'Docker',
              // Cloud & Services
              'Azure', 'GCP', 'AWS',
              // Scripting & Automation
              'Bash', 'PowerShell', 'YAML',
              // Version Control & Tools
              'Git', 'GitHub Actions', 'GitLab CI',
              // Methodologies & Practices
              'Agile', 'DevOps', 'Infrastructure as Code',
              // Architecture
              'Webhosting', 'Web Design', 'System Design', 'API Design',
              // Security & Networking
              'Network Security', 'Security Software', 'SSL/TLS', 'VPN'
            ].map((skill) => (
              <span key={skill} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Education & Courses taken</h2>
          <div className="space-y-6">
    

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <GraduationCap className="text-emerald-600" size={24} />
                </div>
                <div>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="font-medium text-gray-800">Kubernetes Course</p>
                      <p className="text-gray-600">Kumina</p>
                      <p className="text-gray-500 text-sm flex items-center gap-2">
                        <Calendar size={16} />
                        2024
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Python Programming</p>
                      <p className="text-gray-600">Python for Beginners & Python Core</p>
                      <p className="text-gray-500 text-sm flex items-center gap-2">
                        <Calendar size={16} />
                        2021-2022
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Linux Server Administrator Certification</p>
                      <p className="text-gray-600">Vijfhart - LPI101 and LPI102</p>
                      <p className="text-gray-500 text-sm flex items-center gap-2">
                        <Calendar size={16} />
                        2018
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

      {/* Footer - outside of resume-content */}
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4 max-w-5xl text-center text-gray-600">
          <p>© {new Date().getFullYear()} Jorrit Harmanny. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;