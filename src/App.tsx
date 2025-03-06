import React, { useState } from 'react';
import { Linkedin, Mail, Globe, Calendar, MapPin, Briefcase, GraduationCap, Phone, Github, Download, ChevronDown } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [format, setFormat] = useState<'pdf' | 'pdf-compressed' | 'docx'>('pdf');

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById('resume-content');
      if (!element) return;

      const isCompressed = format === 'pdf-compressed';
      
      // Add temporary class to force better page breaks
      element.classList.add('generating-pdf');
      
      // Wait for any pending state updates/renders
      await new Promise(resolve => setTimeout(resolve, 100));

      // Calculate dimensions
      const a4Width = 210; // mm
      const a4Height = 297; // mm
      const pageHeight = element.offsetHeight * (a4Width / element.offsetWidth);
      const pageCount = Math.ceil(pageHeight / a4Height);

      const canvas = await html2canvas(element, {
        scale: isCompressed ? 1.5 : 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        imageTimeout: 0,
        height: element.scrollHeight,
        windowHeight: element.scrollHeight,
        onclone: (doc, clonedElement) => {
          // Remove the Promise wrapper - handle synchronously
          clonedElement.style.height = `${element.scrollHeight}px`;
          clonedElement.style.position = 'relative';
          clonedElement.style.transform = 'none';
          
          // Force better page breaks
          const sections = clonedElement.querySelectorAll('section');
          sections.forEach(section => {
            section.style.pageBreakInside = 'avoid';
            section.style.breakInside = 'avoid';
          });

          // Ensure each job card stays together
          const jobCards = clonedElement.querySelectorAll('.experience-section > div');
          jobCards.forEach(card => {
            card.style.pageBreakInside = 'avoid';
            card.style.breakInside = 'avoid';
          });

          // Add spacing between experience items
          const lastExperienceItem = clonedElement.querySelector('.experience-section > div:last-child');
          if (lastExperienceItem) {
            lastExperienceItem.style.marginBottom = '40px';
          }

          // Force skills section to start on new page
          const skillsSection = clonedElement.querySelector('.skills-grid')?.parentElement;
          if (skillsSection) {
            skillsSection.style.pageBreakBefore = 'always';
            skillsSection.style.marginTop = '20px';
          }
        }
      });

      const imgQuality = isCompressed ? 0.85 : 1.0;
      const imgFormat = isCompressed ? 'JPEG' : 'PNG';
      const imgData = canvas.toDataURL(`image/${imgFormat.toLowerCase()}`, imgQuality);

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = a4Width;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      for (let page = 0; page < pageCount; page++) {
        if (page > 0) {
          pdf.addPage();
        }
        const position = -page * a4Height;
        pdf.addImage(imgData, imgFormat, 0, position, imgWidth, imgHeight);
      }

      pdf.save(`jorrit-harmanny-resume${isCompressed ? '-compressed' : ''}.pdf`);
      element.classList.remove('generating-pdf');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateWord = async () => {
    setIsGenerating(true);
    try {
      const doc = new Document({
        sections: [{
          properties: {},
          children: [
            // Header with proper spacing
            new Paragraph({
              spacing: { after: 200 },
              children: [
                new TextRun({
                  text: "Jorrit Harmanny",
                  size: 36,
                  bold: true,
                }),
                new TextRun({
                  text: "Senior DevOps Engineer",
                  size: 28,
                  break: 1,
                  color: "666666"
                }),
              ]
            }),

            // Contact Info
            new Paragraph({
              spacing: { before: 200, after: 400 },
              children: [
                new TextRun({
                  text: "Email: jorrit@joy-ict.nl | Phone: +31624497032 | Location: Kampen, Netherlands",
                  size: 24,
                }),
              ]
            }),

            // Languages
            new Paragraph({
              spacing: { before: 200 },
              children: [
                new TextRun({
                  text: "Languages: ",
                  bold: true,
                }),
                new TextRun("Dutch (Native), English (Professional), German (Professional), French (Basic)"),
              ]
            }),

            // Professional Summary with header
            new Paragraph({
              spacing: { before: 400, after: 200 },
              children: [
                new TextRun({
                  text: "Professional Summary",
                  size: 28,
                  bold: true,
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun(
                  "Senior DevOps Engineer with over 8 years of experience in infrastructure automation, cloud solutions, and software development. " +
                  "Proven track record in modernizing IT infrastructure, implementing CI/CD pipelines, and developing custom solutions. " +
                  "Specializing in cloud architecture, infrastructure as code, and process automation with a focus on scalability and security."
                )
              ]
            }),

            // Experience section
            new Paragraph({
              spacing: { before: 400, after: 200 },
              children: [
                new TextRun({
                  text: "Professional Experience",
                  size: 28,
                  bold: true,
                })
              ]
            }),

            // Add all jobs with proper formatting
            ...[
              {
                title: "Founder / Owner",
                company: "JOY ICT",
                period: "Apr 2017 - Present",
                location: "Kampen, Netherlands",
                description: "Running an independent software consultancy, providing DevOps and development services to clients. Specializing in cloud solutions, infrastructure automation, and custom software development."
              },
              {
                title: "DevOps Engineer",
                company: "Hedge",
                period: "Apr 2022 - Feb 2025",
                location: "Utrecht, Netherlands",
                description: "Leading DevOps initiatives, implementing and maintaining CI/CD pipelines, and managing cloud infrastructure. Specializing in automation, containerization, and infrastructure as code practices."
              },
              {
                title: "Software Developer",
                company: "Hermess BV",
                period: "Apr 2021 - Mar 2022",
                location: "Emmeloord, Netherlands",
                description: "Modernized IT infrastructure through cloud migration and security improvements. Developed Python-based solutions for oceanographic and meteorological data processing and analysis. Implemented automation workflows for marine environmental data services and satellite data processing."
              },
              {
                title: "System Administrator",
                company: "Evangelische Omroep (EO)",
                period: "Sep 2017 - Apr 2021",
                location: "Hilversum, Netherlands",
                description: "Part of the team that led a major enterprise-wide migration project transitioning the post-production environment to a new editing suite. Key achievements included implementing new storage infrastructure, server deployments, and workflow optimization. Provided comprehensive training to editorial staff while maintaining 24/7 system uptime and security protocols."
              },
              {
                title: "Data Analyst",
                company: "Verhoek Europe",
                period: "Jan 2015 - Dec 2015",
                location: "Genemuiden, Netherlands",
                description: "Analyzed business data and created reports to support decision-making processes. Implemented data-driven solutions to improve operational efficiency."
              }
            ].map(job => [
              new Paragraph({
                spacing: { before: 200 },
                children: [
                  new TextRun({ text: `${job.title} - ${job.company}`, bold: true }),
                  new TextRun({ text: ` (${job.period})`, italics: true }),
                  new TextRun({ text: `\n${job.location}`, size: 20 }),
                ]
              }),
              new Paragraph({
                children: [new TextRun(job.description)]
              }),
            ]).flat(),

            // Skills section with categories
            new Paragraph({
              spacing: { before: 400, after: 200 },
              children: [
                new TextRun({
                  text: "Technical Skills",
                  size: 28,
                  bold: true,
                })
              ]
            }),

            ...[
              {
                category: "Cloud & Infrastructure",
                skills: ["AWS", "Azure", "Docker", "GCP", "Kubernetes", "Proxmox", "VMware ESXi"]
              },
              {
                category: "Development & Automation",
                skills: ["TypeScript", "Python", "React", "Node.js", "Ansible", "Shell scripting"]
              },
              {
                category: "DevOps & Tools",
                skills: ["CI/CD", "Infrastructure as Code", "Git", "GitHub", "GitLab", "Jenkins", "Terraform"]
              },
              {
                category: "Monitoring & Security",
                skills: ["Prometheus", "Grafana", "PRTG", "Security Audits", "SSL/TLS", "Firewall Configuration"]
              },
              {
                category: "Databases & Storage",
                skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "NAS/SAN Storage"]
              },
              {
                category: "System Administration",
                skills: [
                  "Linux Administration",
                  "Windows Server",
                  "Active Directory",
                  "DNS",
                  "DHCP",
                  "Network Management",
                  "Workstation Management (Windows/Linux/macOS)"
                ]
              }
            ].map(category => [
              new Paragraph({
                spacing: { before: 200 },
                children: [new TextRun({ text: category.category, bold: true })]
              }),
              new Paragraph({
                children: [new TextRun(category.skills.join(", "))]
              }),
            ]).flat(),

            // Education & Certifications
            new Paragraph({
              spacing: { before: 400 },
              children: [
                new TextRun({
                  text: "Education & Certifications",
                  size: 28,
                  bold: true,
                })
              ]
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: "Kubernetes Course - Kumina (2024)",
                  bold: true,
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Python Programming - Python for Beginners & Python Core (2021-2022)",
                  bold: true,
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Linux Server Administrator Certification - Vijfhart - LPI101 and LPI102 (2018)",
                  bold: true,
                })
              ]
            }),

            // Key Projects
            new Paragraph({
              spacing: { before: 400, after: 200 },
              children: [
                new TextRun({
                  text: "Key Projects",
                  size: 28,
                  bold: true,
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Cloud Migration & Infrastructure Modernization\n",
                  bold: true,
                }),
                new TextRun(
                  "Led complete infrastructure modernization projects for multiple clients, including cloud migrations, " +
                  "security improvements, and implementation of modern DevOps practices."
                )
              ]
            }),
          ]
        }]
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, "jorrit-harmanny-resume.docx");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerate = async () => {
    if (!isGenerating) {
      try {
        if (format === 'pdf' || format === 'pdf-compressed') {
          await generatePDF();
        } else {
          await generateWord();
        }
      } catch (error) {
        console.error('Error generating document:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div id="resume-content">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://www.joy-ict.nl/jorrit-harmanny.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-200"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">Jorrit Harmanny</h1>
              <p className="text-xl mb-4 text-emerald-100">Senior DevOps Engineer</p>
              <div className="flex flex-col gap-6">
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
                </div>
                
                <div className="flex items-center gap-2 relative">
                  <div className="absolute -top-6 left-0 text-emerald-100 text-sm whitespace-nowrap">
                    Choose format to download
                  </div>
                  <div className="relative">
                    <select 
                      value={format}
                      onChange={(e) => setFormat(e.target.value as 'pdf' | 'pdf-compressed' | 'docx')}
                      className="bg-white/10 text-white pl-3 pr-8 py-2 rounded-full cursor-pointer appearance-none"
                      title="Select download format"
                    >
                      <option value="pdf" className="bg-emerald-700 text-white">PDF Format (High Quality)</option>
                      <option value="pdf-compressed" className="bg-emerald-700 text-white">PDF Format (Compressed)</option>
                      <option value="docx" className="bg-emerald-700 text-white">Word Format</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-white" />
                  </div>
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-full transition"
                    title={`Download resume as ${format.toUpperCase()}`}
                  >
                    {isGenerating ? (
                      <>Generating...</>
                    ) : (
                      <>
                        <Download size={20} />
                        Download {format.toUpperCase()}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      

      <main className="container mx-auto px-4 max-w-5xl py-12">
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
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
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Languages:</span> Dutch (Native), English (Professional), German (Professional), and French (Basic)
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Professional Summary</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <p className="text-gray-600">
            Senior DevOps Engineer with over 8 years of experience in infrastructure automation, cloud solutions, and software development. 
            Proven track record in modernizing IT infrastructure, implementing CI/CD pipelines, and developing custom solutions. 
            Specializing in cloud architecture, infrastructure as code, and process automation with a focus on scalability and security.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12 experience-section">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
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

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
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
                      Apr 2022 - Feb 2025
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



            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
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
                      Apr 2021 - Mar 2022 
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <MapPin size={16} />
                      Emmeloord, Netherlands
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Modernized IT infrastructure through cloud migration and security improvements. 
                Developed Python-based solutions for oceanographic and meteorological data processing and analysis. 
                Implemented automation workflows for marine environmental data services and satellite data processing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
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
                Have been part of the team that did a major enterprise-wide migration project transitioning the post-production environment to a new editing suite.
                Key achievements included implementing new storage infrastructure, server deployments, and workflow optimization.
                Provided comprehensive training to editorial staff while maintaining 24/7 system uptime and security protocols.
                Specialized in automation solutions and technical support for the media production environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
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
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 skills-grid"> {/* Added skills-grid class */}
            {[
              {
                category: "Cloud & Infrastructure",
                skills: ['AWS', 'Azure', 'Docker', 'GCP', 'Kubernetes', 'Proxmox', 'VMware ESXi',]
              },
              {
                category: "Development & Automation",
                skills: ['TypeScript', 'Python', 'React', 'Node.js', 'Ansible', 'Shell scripting']
              },
              {
                category: "DevOps & Tools",
                skills: ['CI/CD', 'Infrastructure as Code', 'Git', 'GitHub', 'GitLab', 'Jenkins', 'Terraform']
              },
              {
                category: "Monitoring & Security",
                skills: ['Prometheus', 'Grafana', 'PRTG', 'Security Audits', 'SSL/TLS', 'Firewall Configuration']
              },
              {
                category: "Databases & Storage",
                skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'NAS/SAN Storage']
              },
              {
                category: "System Administration",
                skills: [
                  'Linux Administration',
                  'Windows Server',
                  'Active Directory',
                  'DNS',
                  'DHCP',
                  'Network Management',
                  'Workstation Management (Windows/Linux/macOS)'
                ]
              }
            ].map((category) => (
              <div key={category.category} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold mb-4 text-emerald-700">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Education & Courses taken</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <GraduationCap className="text-emerald-600" size={24} />
                </div>
                <div>
                  <div className="space-y-4">
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

        {/* Key Projects Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Key Projects</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cloud Migration & Infrastructure Modernization</h3>
              <p className="text-gray-600">
                Led complete infrastructure modernization projects for multiple clients, including cloud migrations, 
                security improvements, and implementation of modern DevOps practices.
              </p>
            </div>
            {/* Add more project cards as needed */}
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