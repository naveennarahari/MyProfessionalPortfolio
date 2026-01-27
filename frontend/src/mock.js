// Mock data for Narahari Naveen's Portfolio

export const personalInfo = {
  name: "Narahari Naveen",
  title: "Engineering Manager | Architecture Leader",
  tagline: "Building Scalable & Compliant Platforms in Investment Banking Tech",
  yearsOfExperience: "13+",
  location: "Greater Bengaluru Area",
  email: "naraharinaveenqa@gmail.com",
  phone: "+91-8970322333",
  linkedin: "https://www.linkedin.com/in/narahari-naveen",
  summary: "Engineering Manager and backend architecture leader with over 13 years of experience in banking and financial services technology. Expert in building resilient, auditable, and regulatory-ready platforms that transform tech debt into competitive advantage. Leading cross-functional teams to deliver mission-critical investment banking applications across the Forex trade lifecycle."
};

export const keyMetrics = [
  { label: "Years Experience", value: "13+", icon: "briefcase" },
  { label: "Team Members Led", value: "17+", icon: "users" },
  { label: "Daily Transactions", value: "1M+", icon: "activity" },
  { label: "System Availability", value: "99.9%", icon: "shield" }
];

export const experiences = [
  {
    id: 1,
    company: "Societe Generale Global Solution Centre",
    role: "Chapter Manager",
    duration: "April 2024 - Present",
    period: "1 year 10 months",
    type: "Leadership",
    description: "Leading cross-functional engineering teams (FX Cash Front to Back, 17 members across 3 squads) with dual accountability for delivery execution and governance.",
    highlights: [
      "Ensures establishment and enforcement of quality controls and release discipline",
      "Owns critical production stability maintaining 99.9%+ system availability",
      "Drives engineering excellence through automated quality controls (SonarQube, CI/CD)",
      "Bridges business strategy and technical execution through scalable architecture designs"
    ],
    technologies: ["C#", ".NET Core", "Microservices", "CI/CD", "SonarQube"]
  },
  {
    id: 2,
    company: "Societe Generale Global Solution Centre",
    role: "Lead Software Engineer / Scrum Master",
    duration: "September 2021 - March 2024",
    period: "2 years 7 months",
    type: "Technical Leadership",
    description: "Dual-owner for Agile execution and technical delivery, maintaining delivery predictability across sprints and releases.",
    highlights: [
      "Built backend solutions and reusable frameworks in C#/.NET for regulated workflows",
      "Managed delivery risk through stakeholder collaboration and requirement scoping",
      "Mentored engineers and improved engineering standards through reviews",
      "Maintained technical debt visibility for confirmations/settlements feature stream"
    ],
    technologies: ["C#", ".NET", "Agile", "Scrum", "JIRA"]
  },
  {
    id: 3,
    company: "Societe Generale Global Solution Centre",
    role: "Specialist SE",
    duration: "March 2019 - October 2021",
    period: "2 years 8 months",
    type: "Technical",
    description: "Delivered investment banking platform capabilities supporting confirmations and settlements with message-oriented middleware.",
    highlights: [
      "Improved transaction speed from ~6 sec to ~2 sec per transaction",
      "Contributed to operational resilience via monitoring (Grafana/Kibana)",
      "Enhanced release reliability through CI/CD practices (Jenkins)",
      "Integrated with microservices patterns and middleware systems"
    ],
    technologies: ["C#", ".NET", "Microservices", "Grafana", "Kibana", "Jenkins"]
  },
  {
    id: 4,
    company: "Societe Generale Global Solution Centre",
    role: "Senior Software Development Engineer",
    duration: "April 2018 - March 2019",
    period: "1 year",
    type: "Technical",
    description: "Pivoted from automation testing to full-stack backend development on mission-critical investment banking platform.",
    highlights: [
      "Processed 1M+ daily transactions supporting high-volume trading operations",
      "Maintained SWIFT regulatory compliance standards",
      "Translated complex business requirements into production-ready code",
      "Delivered iterative features within agile delivery cycles"
    ],
    technologies: ["C#", ".NET", "SWIFT", "JIRA", "Agile"]
  },
  {
    id: 5,
    company: "NTT DATA Americas",
    role: "Software Application Development Consultant",
    duration: "September 2015 - July 2016",
    period: "11 months",
    type: "Technical",
    description: "Enhanced automation frameworks for banking/remittance programs with focus on quality and delivery.",
    highlights: [
      "Improved test coverage by 95%",
      "Reduced defects by 60%",
      "Resolved technical issues during maintenance cycles",
      "Supported delivery discipline through defect tracking"
    ],
    technologies: ["UFT", "QTP", "Automation Testing"]
  },
  {
    id: 6,
    company: "IGATE",
    role: "Senior Engineer - V & V",
    duration: "May 2012 - August 2015",
    period: "3 years 4 months",
    type: "Technical",
    description: "Led quality assurance operations for retail banking applications with focus on automation.",
    highlights: [
      "Owned 200+ application test suite portfolio",
      "Migrated UFT-based testing to Selenium within 12 months",
      "Automated critical daily monitoring processes",
      "Improved cost efficiency and technical flexibility"
    ],
    technologies: ["Selenium", "UFT", "QTP", "Test Automation"]
  }
];

export const projects = [
  {
    id: 1,
    name: "X-One Conf and Settlements",
    client: "Societe Generale",
    domain: "Investment Banking – Global Forex Markets",
    duration: "Since Sep 2016",
    description: "Front-to-back office trade application for generating Confirmations (CLS, SWIFT MT300, Web, Email) and Settlements (MT103) for Forex Trades worldwide.",
    impact: [
      "Manages CLS and SWIFT messaging systems globally",
      "Processes high-volume transactions with 99.9%+ availability",
      "Designed scalable Web API for external clients",
      "Implemented ISO 20022 SWIFT migration (MT to MX)"
    ],
    technologies: [".NET Core 3.0", "C# 8.1", "TIBCO", "WebSphere MQ", "NATS", "Web API", "Microservices", "Oracle DB"],
    methodology: "Agile"
  },
  {
    id: 2,
    name: "Backend Performance Optimization",
    client: "Societe Generale",
    domain: "Investment Banking – Global Forex Markets",
    duration: "Mar 2019 – Oct 2021",
    description: "Critical performance optimization initiative for investment banking platform experiencing major slowness in backend functions.",
    impact: [
      "Improved transaction processing speed from ~6 sec to ~2 sec (67% reduction)",
      "Enhanced system throughput and user experience significantly",
      "Implemented code optimization and architectural improvements",
      "Maintained operational resilience through monitoring improvements"
    ],
    technologies: ["C#", ".NET", "Grafana", "Kibana", "Jenkins", "Microservices"],
    methodology: "Agile"
  },
  {
    id: 3,
    name: "X-One CBO Historization",
    client: "Societe Generale",
    domain: "Investment Banking – Global Forex Markets",
    duration: "Mar 2022 – Dec 2024",
    description: "Enterprise data archiving solution handling billions of records from source to live database with zero downtime.",
    impact: [
      "Archives billions of data records weekly with zero downtime",
      "Implements microservices architecture with OCP DB",
      "Ensures audit-ready data retention and compliance",
      "Maintains operational continuity during archival operations"
    ],
    technologies: ["C#.NET", "Microservices", "Oracle DB", "OCP DB"],
    methodology: "Agile"
  },
  {
    id: 4,
    name: "Mission-Critical Trading Platform Development",
    client: "Societe Generale",
    domain: "Investment Banking – Multi-Asset Trading",
    duration: "Apr 2018 – Mar 2019",
    description: "Developed core components for mission-critical multi-asset investment banking platform processing over 1M daily transactions under strict SWIFT regulatory compliance.",
    impact: [
      "Successfully processed 1M+ daily transactions reliably",
      "Maintained SWIFT regulatory compliance standards",
      "Translated complex business requirements into production-ready code",
      "Delivered iterative features within agile delivery cycles"
    ],
    technologies: ["C#", ".NET", "SWIFT", "JIRA", "Message-Oriented Middleware"],
    methodology: "Agile"
  },
  {
    id: 5,
    name: "Automated Testing Infrastructure",
    client: "Societe Generale",
    domain: "Investment Banking Technology",
    duration: "Aug 2016 – Mar 2018",
    description: "Architected and deployed comprehensive automated testing infrastructure for critical trading platform, driving technology modernization and cost savings.",
    impact: [
      "Eliminated 100+ manual test execution cycles",
      "Reduced regression testing time by 70%",
      "Achieved ~3K€ in annual license cost savings",
      "Migrated 100+ legacy automation scripts to open-source Java Selenium framework"
    ],
    technologies: ["UFT", "QTP", "Selenium", "Java", "Test Automation"],
    methodology: "Agile"
  },
  {
    id: 6,
    name: "Banking QA Operations & Modernization",
    client: "IGATE (U.S. Retail Banking)",
    domain: "Banking and Financial Services",
    duration: "May 2012 – Aug 2015",
    description: "Led quality assurance operations for 200+ application test suite portfolio, driving automation modernization and operational excellence for U.S. retail banking customers.",
    impact: [
      "Owned 200+ application test suite portfolio with weekly regression cycles",
      "Migrated entire UFT-based testing infrastructure to Selenium within 12 months",
      "Automated critical daily monitoring processes for systematic verification",
      "Improved cost efficiency, technical flexibility, and team productivity"
    ],
    technologies: ["Selenium", "UFT", "QTP", "Test Automation", "Banking Applications"],
    methodology: "Agile"
  }
];

export const skills = {
  leadership: [
    "Engineering Team Leadership",
    "Cross-functional Team Management",
    "Agile & Scrum Methodologies",
    "Stakeholder Management",
    "Technical Architecture",
    "Project Management",
    "Risk Management",
    "Mentoring & Coaching"
  ],
  technical: [
    "C# / .NET Core / .NET Framework",
    "Microservices Architecture",
    "ASP.NET Web API",
    "Oracle Database / SQL",
    "SWIFT / CLS Integration",
    "Message-Oriented Middleware (TIBCO, MQ)",
    "CI/CD (Jenkins, Git, Gerrit)",
    "Monitoring (Grafana, Kibana, SonarQube)"
  ],
  domain: [
    "Investment Banking Technology",
    "Forex Trade Lifecycle",
    "Regulatory Compliance (SWIFT, ISO 20022)",
    "Payment Systems Integration",
    "Trade Confirmations & Settlements",
    "Financial Services Platform",
    "Audit-Ready Systems",
    "Tech Governance"
  ]
};

export const certifications = [
  {
    name: "ISTQB Foundation Level",
    issuer: "ISTQB",
    year: "2013"
  },
  {
    name: "ITIL Foundation Level",
    issuer: "ITIL",
    year: "2013"
  },
  {
    name: "C# Basic Certification",
    issuer: "HackerRank",
    year: "2024"
  },
  {
    name: "ChatGPT and LangChain: The Complete Developer's Masterclass",
    issuer: "Online Course",
    year: "2024"
  }
];

export const education = {
  degree: "Bachelor of Technology (B.Tech.)",
  field: "Electrical & Electronics Engineering",
  institution: "Jawaharlal Nehru Technological University, Anantapur",
  year: "2011",
  percentage: "73%"
};

export const achievements = [
  "Employee of the Year Nomination 2023-24 at Societe Generale – X-One FXC",
  "Successfully delivered ISO 20022 SWIFT migration (MT to MX) for global compliance",
  "Reduced transaction processing time by 67% (6 sec to 2 sec)",
  "Led 17-member cross-functional team across 3 squads",
  "Maintained 99.9%+ system availability for mission-critical platforms"
];