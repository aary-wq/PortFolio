import infeanetLogo from "./assets/infeanet.avif";
import iconLogo from "./assets/logo.png";

const experiences = [
    {
      logo: infeanetLogo,
      position: "Python Intern",
      company: "Infeanet Digital Media",
      duration: "2022",
      description: "Learned core concepts in Python as well as gained experience in Python Programming. Gained hands-on experience by applying Python concepts in practical programming tasks."
    },
    {
      logo: iconLogo,
      position: "Website Secretary",
      company: "INDUS CONNECT",
      duration: "2024 - Present",
      description: "Managing and maintaining the organization's website, implementing new features, and ensuring optimal performance. Leading the web development team for various club events."
    }
  ];

  const achievements = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 2l1.88 1.88"></path>
        <path d="M14.12 3.88L16 2"></path>
        <path d="M9 7h6"></path>
        <path d="M10 11h4"></path>
        <path d="M11 15h2"></path>
        <path d="M4 13h2"></path>
        <path d="M18 13h2"></path>
        <path d="M6 19l1.5-1.5"></path>
        <path d="M16.5 17.5L18 19"></path>
        <rect x="8" y="5" width="8" height="14" rx="4"></rect>
      </svg>
      
      ),
      competition: "Bugfather",
      position: "2nd Runner Up",
      description: "Identified critical bugs in DSA related code snippets",
      year: "2025"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      competition: "CodeFlix",
      position: "2nd Runner Up",
      description: "Built a full-stack streaming platform with real-time features",
      year: "2025"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      competition: "AISSMS Techathon",
      position: "4th Position",
      description: "Developed a solution for disaster relief and coordination",
      year: "2025"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      competition: "ISIH",
      position: "Top 40",
      description: "Pitched innovative an Alumni Connection Platform to connect alumni and students",
      year: "2025"
    }
  ];
   const publications = {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          <path d="M8 7h8"></path>
          <path d="M8 11h8"></path>
          <path d="M8 15h5"></path>
        </svg>
      ),
      title: "Research Publications",
      description: "Published multiple research papers at prestigious international conferences including IEEE, Springer, etc. The conferences included iCare-2024, ISAECT-2025, rTIME- 2025. Topics covered include machine learning applications, Internet of Things, and Intelligent Computing."
    };

  export { experiences, achievements ,publications };