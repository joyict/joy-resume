import { ResumeData } from '../types';

// English version with Jorrit's real information
export const resumeDataEn: ResumeData = {
  name: "Jorrit Harmanny",
  title: "Senior DevOps Engineer / Senior System Administrator",
  summary: "Senior DevOps Engineer / System Administrator with over 8 years of experience in infrastructure automation, cloud solutions, and software development. Experienced in IT modernization, CI/CD pipelines, and custom development. Specialized in cloud/on-premise architecture, infrastructure as code, and process automation. Focus on scalability, security, and efficiency improvement.",
  
  contact: {
    email: "jorrit@joy-ict.nl",
    phone: "+31624497032",
    location: "Kampen, Netherlands",
    website: "https://joy-ict.nl",
    linkedin: "https://linkedin.com/in/jorrit-harmanny",
    github: "https://github.com/jorrit-harmanny"
  },
  
  education: [
    {
      institution: "Boot.dev",
      degree: "Full-stack Backend Developer",
      field: "Software Development",
      startDate: "2025",
      endDate: "Present",
      description: "Advanced backend development training focusing on modern software engineering practices."
    },
    {
      institution: "SoloLearn",
      degree: "Python Certification",
      field: "Python starter + Core",
      startDate: "2021",
      endDate: "2022",
      description: "Comprehensive Python programming certification covering core concepts and advanced topics."
    },
    {
      institution: "Vijfhart",
      degree: "Linux Server Administrator Certification",
      field: "LPI101 & LPI102",
      startDate: "2018",
      endDate: "2018",
      description: "Professional Linux system administration certification covering server management and networking."
    }
  ],
  
  experience: [
    {
      company: "JOY ICT",
      position: "Founder / Owner",
      startDate: "Apr 2017",
      endDate: "Present",
      description: "Independent software consultancy specialized in DevOps and software development. Services include cloud solutions, infrastructure automation, and custom software development.",
      achievements: [
        "Built successful consultancy business serving multiple enterprise clients",
        "Delivered cloud migration projects reducing operational costs by 40%",
        "Implemented Infrastructure as Code solutions improving deployment reliability",
        "Developed custom automation tools increasing team productivity"
      ]
    },
    {
      company: "Hedge",
      position: "Senior DevOps Engineer",
      startDate: "Apr 2022",
      endDate: "Feb 2025",
      description: "Led DevOps initiatives, implementation and maintenance of CI/CD pipelines, and management of cloud infrastructure with focus on automation and containerization.",
      achievements: [
        "Designed and implemented high-availability Kubernetes cluster with Kustomize and Operators",
        "Set up GitLab CI/CD + GitHub Actions pipeline for Windows applications",
        "Implemented automated version management and release notes generation",
        "Added unit tests and rollback functionality for error-free deployments"
      ]
    },
    {
      company: "Hermess BV",
      position: "Software Developer / Senior DevOps Engineer",
      startDate: "Apr 2021",
      endDate: "Mar 2022",
      description: "Modernized IT infrastructure through cloud migration and security improvements. Developed Python solutions for oceanographic and meteorological data processing.",
      achievements: [
        "Containerized legacy applications with Docker",
        "Implemented automated scalability with Kubernetes Horizontal Pod Autoscaler",
        "Set up monitoring and logging with Prometheus, Grafana, and ELK Stack",
        "Developed Python solutions for scientific data processing"
      ]
    },
    {
      company: "Evangelische Omroep (EO)",
      position: "System Administrator",
      startDate: "Sep 2017",
      endDate: "Apr 2021",
      description: "Management and maintenance of post-production infrastructure. Implementation of remote work functionality and workflow automation. Coordination with suppliers and internal teams.",
      achievements: [
        "Transitioned Unix-based systems to Windows editing platform for 100+ workstations",
        "Implemented CloudUX and new media asset management workflow",
        "Designed and implemented high-performance NAS/SAN storage infrastructure (200TB+ storage)",
        "Network optimization with Cisco & Juniper (10GBe Fiberchannel)"
      ]
    },
    {
      company: "Verhoek Europe",
      position: "Data Analyst",
      startDate: "Jan 2015",
      endDate: "Dec 2015",
      description: "Analysis of business data and reporting to support decision-making. Implementation of data-driven solutions.",
      achievements: [
        "Developed automated reporting systems reducing manual work by 60%",
        "Created data visualization dashboards for executive decision-making",
        "Implemented data quality processes improving accuracy by 35%",
        "Streamlined data collection processes across multiple departments"
      ]
    }
  ],
  
  skillCategories: [
    {
      category: "DevOps & Tools",
      skills: [
        { name: "CI/CD", level: 5 },
        { name: "Infrastructure as Code", level: 5 },
        { name: "GitHub Actions", level: 5 },
        { name: "GitLab CI/CD", level: 5 },
        { name: "Terraform", level: 3 },
        { name: "Ansible", level: 5 },
        { name: "Jenkins", level: 3 }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 4 },
        { name: "Azure", level: 4 },
        { name: "Google Cloud", level: 4 },
        { name: "Kubernetes", level: 5 },
        { name: "Docker", level: 5 },
        { name: "VMware ESXi", level: 5 },
        { name: "Proxmox", level: 5 }
      ]
    },
    {
      category: "System Administration",
      skills: [
        { name: "Linux", level: 5 },
        { name: "Windows Server", level: 5 },
        { name: "Active Directory", level: 4 },
        { name: "DNS/DHCP", level: 5 },
        { name: "Network Management", level: 4 }
      ]
    },
    {
      category: "Development & Automation",
      skills: [
        { name: "PowerShell", level: 5 },
        { name: "Bash", level: 5 },
        { name: "Python", level: 5 },
        { name: "TypeScript", level: 3 },
        { name: "Node.js", level: 3 },
        { name: "React", level: 3 }
      ]
    },
    {
      category: "Monitoring & Security",
      skills: [
        { name: "Prometheus", level: 4 },
        { name: "Grafana", level: 4 },
        { name: "PRTG", level: 5 },
        { name: "SSL/TLS", level: 5 },
        { name: "Firewall Configuration", level: 4 },
        { name: "IAM", level: 4 },
        { name: "VPN (Tailscale)", level: 5 }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "MySQL", level: 4 },
        { name: "PostgreSQL", level: 4 },
        { name: "MongoDB", level: 3 },
        { name: "Redis", level: 3 },
        { name: "NAS/SAN Storage", level: 5 }
      ]
    }
  ],
  
  projects: [
    {
      name: "Post-Production Infrastructure Transformation",
      description: "Transitioned Unix-based systems to Windows editing platform for 100+ workstations. Implemented CloudUX and new media asset management workflow with high-performance NAS/SAN storage infrastructure (200TB+ storage).",
      technologies: ["Windows Server", "CloudUX", "NAS/SAN", "Cisco", "Juniper", "10GBe Fiberchannel"],
      highlights: [
        "Successfully migrated 100+ workstations from Unix to Windows editing platform with zero data loss",
        "Designed and implemented 200TB+ high-performance NAS/SAN storage infrastructure",
        "Deployed CloudUX media asset management system improving workflow efficiency by 50%",
        "Migrated network infrastructure from FiberChannel to dual 10GBe Copper connections per editset for real-time video editing",
        "Coordinated with multiple vendors and internal teams to ensure seamless transition",
        "Implemented redundant backup systems ensuring 99.9% uptime for critical production workflows"
      ]
    },
    {
      name: "Cloud Migration & Infrastructure Modernization",
      description: "Migrated on-premise servers to Google Cloud & Kubernetes. Implemented Ansible & Terraform for Infrastructure as Code. Enhanced security with SSL/TLS, firewall configuration, and IAM/VPN (Tailscale).",
      technologies: ["Google Cloud", "Kubernetes", "Ansible", "Terraform", "SSL/TLS", "Tailscale"],
      highlights: [
        "Migrated 15+ on-premise servers to Google Cloud Platform reducing operational costs by 40%",
        "Implemented Infrastructure as Code using Terraform and Ansible for reproducible deployments",
        "Established secure VPN connectivity using Tailscale for remote team access",
        "Configured comprehensive SSL/TLS encryption and firewall rules enhancing security posture",
        "Set up automated backup and disaster recovery procedures with 99.99% data integrity",
        "Implemented IAM policies and role-based access control for enhanced security compliance"
      ]
    },
    {
      name: "Enterprise Kubernetes Migration",
      description: "Designed and implemented high-availability Kubernetes cluster with Kustomize and Operators. Containerized legacy applications with Docker and implemented automated scalability with monitoring and logging.",
      technologies: ["Kubernetes", "Docker", "Kustomize", "Prometheus", "Grafana", "ELK Stack"],
      highlights: [
        "Architected and deployed high-availability Kubernetes cluster across multiple availability zones",
        "Containerized 20+ legacy applications using Docker with optimized multi-stage builds",
        "Implemented Kubernetes Operators and Kustomize for advanced application lifecycle management",
        "Set up comprehensive monitoring stack with Prometheus, Grafana, and ELK for real-time insights",
        "Configured Horizontal Pod Autoscaler reducing resource costs by 30% during low-traffic periods",
        "Achieved 99.9% uptime with automated failover and self-healing infrastructure"
      ]
    },
    {
      name: "CI/CD Pipeline for Windows Applications",
      description: "Set up GitLab CI/CD + GitHub Actions pipeline for Windows applications with automated version management, release notes generation, unit tests, and rollback functionality.",
      technologies: ["GitLab CI/CD", "GitHub Actions", "Windows", "PowerShell", "Automated Testing"],
      highlights: [
        "Designed and implemented dual CI/CD pipeline using GitLab CI/CD and GitHub Actions",
        "Automated version management and semantic versioning for consistent release cycles",
        "Integrated automated unit testing with 90%+ code coverage requirements",
        "Implemented automated release notes generation from commit messages and pull requests",
        "Built rollback functionality enabling instant reversion to previous stable versions",
        "Reduced deployment time from 4 hours to 15 minutes with zero-downtime deployments"
      ]
    }
  ],
  
  languages: [
    { language: "Dutch", proficiency: "Native" },
    { language: "English", proficiency: "Professional" },
    { language: "German", proficiency: "Professional" },
    { language: "French", proficiency: "Basic" }
  ]
};

// Dutch version with Jorrit's real information
export const resumeDataNl: ResumeData = {
  name: "Jorrit Harmanny",
  title: "Senior DevOps Engineer / Senior Systeembeheerder",
  summary: "Senior DevOps Engineer / Systeembeheerder met meer dan 8 jaar ervaring in infrastructuurautomatisering, cloudoplossingen en softwareontwikkeling. Ervaring in IT-modernisering, CI/CD-pipelines en maatwerkontwikkeling. Gespecialiseerd in cloud-/lokale architectuur, infrastructuur als code en procesautomatisering. Focus op schaalbaarheid, beveiliging en efficiëntieverbetering.",
  
  contact: {
    email: "jorrit@joy-ict.nl",
    phone: "+31624497032",
    location: "Kampen, Nederland",
    website: "https://joy-ict.nl",
    linkedin: "https://linkedin.com/in/jorrit-harmanny",
    github: "https://github.com/jorrit-harmanny"
  },
  
  education: [
    {
      institution: "Boot.dev",
      degree: "Full-stack Backend Developer",
      field: "Softwareontwikkeling",
      startDate: "2025",
      endDate: "Heden",
      description: "Geavanceerde backend ontwikkelingstraining gericht op moderne software engineering praktijken."
    },
    {
      institution: "SoloLearn",
      degree: "Python Certificering",
      field: "Python starter + Core",
      startDate: "2021",
      endDate: "2022",
      description: "Uitgebreide Python programmeer certificering met core concepten en geavanceerde onderwerpen."
    },
    {
      institution: "Vijfhart",
      degree: "Linux Server Administrator Certificering",
      field: "LPI101 & LPI102",
      startDate: "2018",
      endDate: "2018",
      description: "Professionele Linux systeembeheer certificering voor serverbeheer en netwerken."
    }
  ],
  
  experience: [
    {
      company: "JOY ICT",
      position: "Founder / Eigenaar",
      startDate: "Apr 2017",
      endDate: "Heden",
      description: "Onafhankelijke softwareconsultancy gespecialiseerd in DevOps en softwareontwikkeling. Dienstverlening omvat cloudoplossingen, infrastructuurautomatisering en maatwerk softwareontwikkeling.",
      achievements: [
        "Succesvolle consultancy business opgebouwd met meerdere enterprise klanten",
        "Cloudmigratie projecten uitgevoerd met 40% kostenbesparing",
        "Infrastructure as Code oplossingen geïmplementeerd voor betere deployment betrouwbaarheid",
        "Maatwerk automatiseringstools ontwikkeld voor verhoogde teamproductiviteit"
      ]
    },
    {
      company: "Hedge",
      position: "Senior DevOps Engineer",
      startDate: "Apr 2022",
      endDate: "Feb 2025",
      description: "Leiding genomen over DevOps-initiatieven, implementatie en onderhoud van CI/CD-pipelines, en beheer van cloudinfrastructuur met focus op automatisering en containerisatie.",
      achievements: [
        "Ontwerp en implementatie van een high-availability Kubernetes cluster (Kustomize, Operators)",
        "Opzet van een GitLab CI/CD + GitHub Actions pipeline voor Windows-applicaties",
        "Geautomatiseerde versiebeheer en release-notities geïmplementeerd",
        "Unit tests en rollback-functionaliteit toegevoegd voor foutloze implementaties"
      ]
    },
    {
      company: "Hermess BV",
      position: "Softwareontwikkelaar / Senior DevOps Engineer",
      startDate: "Apr 2021",
      endDate: "Mrt 2022",
      description: "Modernisering van IT-infrastructuur via cloudmigratie en beveiligingsverbeteringen. Ontwikkeling van Python-oplossingen voor oceanografische en meteorologische gegevensverwerking.",
      achievements: [
        "Legacy-applicaties gecontaineriseerd met Docker",
        "Geautomatiseerde schaalbaarheid geïmplementeerd met Kubernetes Horizontal Pod Autoscaler",
        "Monitoring en logging opgezet met Prometheus, Grafana, ELK Stack",
        "Python-oplossingen ontwikkeld voor wetenschappelijke gegevensverwerking"
      ]
    },
    {
      company: "Evangelische Omroep (EO)",
      position: "Systeembeheerder",
      startDate: "Sep 2017",
      endDate: "Apr 2021",
      description: "Beheer en onderhoud van post-productie infrastructuur. Implementatie van remote werkfunctionaliteit en automatisering van workflows. Coördinatie met leveranciers en interne teams.",
      achievements: [
        "Transitie van Unix-gebaseerde systemen naar een Windows-editing platform voor 100+ werkstations",
        "Implementatie van CloudUX en een nieuwe media asset management workflow",
        "Ontwerp en implementatie van een high-performance NAS/SAN opslaginfrastructuur (200TB+ storage)",
        "Netwerkoptimalisatie met Cisco & Juniper (10GBe Fiberchannel)"
      ]
    },
    {
      company: "Verhoek Europe",
      position: "Data Analist",
      startDate: "Jan 2015",
      endDate: "Dec 2015",
      description: "Analyse van bedrijfsdata en rapportage ter ondersteuning van besluitvorming. Implementatie van data-gedreven oplossingen.",
      achievements: [
        "Geautomatiseerde rapportagesystemen ontwikkeld met 60% minder handmatig werk",
        "Data visualisatie dashboards gecreëerd voor executive besluitvorming",
        "Data kwaliteitsprocessen geïmplementeerd met 35% verbeterde nauwkeurigheid",
        "Gestroomlijnde data verzamelingsprocessen over meerdere afdelingen"
      ]
    }
  ],
  
  skillCategories: [
    {
      category: "DevOps & Tools",
      skills: [
        { name: "CI/CD", level: 5 },
        { name: "Infrastructure as Code", level: 5 },
        { name: "GitHub Actions", level: 5 },
        { name: "GitLab CI/CD", level: 5 },
        { name: "Terraform", level: 3 },
        { name: "Ansible", level: 5 },
        { name: "Jenkins", level: 3 }
      ]
    },
    {
      category: "Cloud & Infrastructuur",
      skills: [
        { name: "AWS", level: 4 },
        { name: "Azure", level: 4 },
        { name: "Google Cloud", level: 4 },
        { name: "Kubernetes", level: 5 },
        { name: "Docker", level: 5 },
        { name: "VMware ESXi", level: 5 },
        { name: "Proxmox", level: 5 }
      ]
    },
    {
      category: "Systeembeheer",
      skills: [
        { name: "Linux", level: 5 },
        { name: "Windows Server", level: 5 },
        { name: "Active Directory", level: 4 },
        { name: "DNS/DHCP", level: 5 },
        { name: "Netwerkbeheer", level: 4 }
      ]
    },
    {
      category: "Development & Automatisering",
      skills: [
        { name: "PowerShell", level: 5 },
        { name: "Bash", level: 5 },
        { name: "Python", level: 5 },
        { name: "TypeScript", level: 3 },
        { name: "Node.js", level: 3 },
        { name: "React", level: 3 }
      ]
    },
    {
      category: "Monitoring & Security",
      skills: [
        { name: "Prometheus", level: 4 },
        { name: "Grafana", level: 4 },
        { name: "PRTG", level: 5 },
        { name: "SSL/TLS", level: 5 },
        { name: "Firewall Configuratie", level: 4 },
        { name: "IAM", level: 4 },
        { name: "VPN (Tailscale)", level: 5 }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "MySQL", level: 4 },
        { name: "PostgreSQL", level: 4 },
        { name: "MongoDB", level: 3 },
        { name: "Redis", level: 3 },
        { name: "NAS/SAN Storage", level: 5 }
      ]
    }
  ],
  
  projects: [
    {
      name: "Transformatie van Post-Productie Infrastructuur",
      description: "Transitie van Unix-gebaseerde systemen naar een Windows-editing platform voor 100+ werkstations. Implementatie van CloudUX en een nieuwe media asset management workflow met high-performance NAS/SAN opslaginfrastructuur (200TB+ storage).",
      technologies: ["Windows Server", "CloudUX", "NAS/SAN", "Cisco", "Juniper", "10GBe Fiberchannel"],
      highlights: [
        "Succesvolle migratie van 100+ werkstations van Unix naar Windows editing platform zonder dataverlies",
        "Ontwerp en implementatie van 200TB+ high-performance NAS/SAN opslaginfrastructuur",
        "CloudUX media asset management systeem geïmplementeerd met 50% workflow efficiëntieverbetering",
        "Migratie van netwerkinfrastructuur van FiberChannel naar dubbele 10GBe Copper verbindingen per editset voor real-time video editing",
        "Coördinatie met meerdere leveranciers en interne teams voor naadloze transitie",
        "Redundante backup systemen geïmplementeerd met 99.9% uptime voor kritieke productie workflows"
      ]
    },
    {
      name: "Cloudmigratie & Infrastructuurmodernisering",
      description: "Migratie van on-premise servers naar Google Cloud & Kubernetes. Implementatie van Ansible & Terraform voor Infrastructure as Code. Security verbeteringen met SSL/TLS, firewallconfiguratie en IAM/VPN (Tailscale).",
      technologies: ["Google Cloud", "Kubernetes", "Ansible", "Terraform", "SSL/TLS", "Tailscale"],
      highlights: [
        "Migratie van 15+ on-premise servers naar Google Cloud Platform met 40% kostenbesparing",
        "Infrastructure as Code geïmplementeerd met Terraform en Ansible voor reproduceerbare deployments",
        "Veilige VPN-connectiviteit opgezet met Tailscale voor remote team toegang",
        "Uitgebreide SSL/TLS encryptie en firewall regels geconfigureerd voor verbeterde security",
        "Geautomatiseerde backup en disaster recovery procedures opgezet met 99.99% data integriteit",
        "IAM policies en role-based access control geïmplementeerd voor verbeterde security compliance"
      ]
    },
    {
      name: "Enterprise Kubernetes Migratie",
      description: "Ontwerp en implementatie van een high-availability Kubernetes cluster (Kustomize, Operators). Legacy-applicaties containeriseren met Docker en geautomatiseerde schaalbaarheid met monitoring en logging.",
      technologies: ["Kubernetes", "Docker", "Kustomize", "Prometheus", "Grafana", "ELK Stack"],
      highlights: [
        "Architectuur en deployment van high-availability Kubernetes cluster over meerdere availability zones",
        "Containerisatie van 20+ legacy applicaties met Docker en geoptimaliseerde multi-stage builds",
        "Kubernetes Operators en Kustomize geïmplementeerd voor geavanceerd applicatie lifecycle management",
        "Uitgebreide monitoring stack opgezet met Prometheus, Grafana en ELK voor real-time inzichten",
        "Horizontal Pod Autoscaler geconfigureerd met 30% kostenbesparing tijdens lage-traffic periodes",
        "99.9% uptime bereikt met geautomatiseerde failover en self-healing infrastructuur"
      ]
    },
    {
      name: "CI/CD-pipeline voor Windows-applicaties",
      description: "Opzet van een GitLab CI/CD + GitHub Actions pipeline voor Windows-applicaties met geautomatiseerde versiebeheer, release-notities, unit tests en rollback-functionaliteit voor foutloze implementaties.",
      technologies: ["GitLab CI/CD", "GitHub Actions", "Windows", "PowerShell", "Automated Testing"],
      highlights: [
        "Ontwerp en implementatie van dubbele CI/CD pipeline met GitLab CI/CD en GitHub Actions",
        "Geautomatiseerd versiebeheer en semantic versioning voor consistente release cycli",
        "Geïntegreerde geautomatiseerde unit testing met 90%+ code coverage vereisten",
        "Geautomatiseerde release notes generatie uit commit berichten en pull requests",
        "Rollback functionaliteit gebouwd voor instant terugkeer naar vorige stabiele versies",
        "Deployment tijd gereduceerd van 4 uur naar 15 minuten met zero-downtime deployments"
      ]
    }
  ],
  
  languages: [
    { language: "Nederlands", proficiency: "Moedertaal" },
    { language: "Engels", proficiency: "Professioneel" },
    { language: "Duits", proficiency: "Professioneel" },
    { language: "Frans", proficiency: "Basis" }
  ]
};

// Default export for backward compatibility
export default resumeDataEn;