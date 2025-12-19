import { FaReact, FaNodeJs, FaDatabase, FaBrain, FaCode, FaTools, FaStar } from "react-icons/fa";

const skillsData = [
    {
      category: "Frontend Development",
      icon: <FaReact />,
      color: "#61dafb",
      skills: [
        "React", "JavaScript", "HTML5", "CSS3", 
        "Bootstrap", "Material UI", "Tailwind CSS"
      ]
    },
    {
      category: "Backend Development",
      icon: <FaNodeJs />,
      color: "#68a063",
      skills: [
        "Node.js", "Express.js", "Python", 
        "REST APIs", "EJS Templates", "JavaScript"
      ]
    },
    {
      category: "Databases & Storage",
      icon: <FaDatabase />,
      color: "#4db33d",
      skills: [
        "MongoDB", "MySQL", "Oracle", "Cloudinary"
      ]
    },
    {
      category: "Data Science & ML",
      icon: <FaBrain />,
      color: "#ff6f00",
      skills: [
        "Python", "Power BI", "OpenCV", 
        "Jupyter", "NumPy", "YOLO", "Matplotlib"
      ]
    },
    {
      category: "Programming Languages",
      icon: <FaCode />,
      color: "#f472b6",
      skills: [
        "Java", "C & C++", "Python", "Assembly", "JavaScript"
      ]
    },
    {
      category: "Development Tools",
      icon: <FaTools />,
      color: "#a78bfa",
      skills: [
        "Git", "GitHub", "Hopscotch","AWS", 
        "VS Code", "Vercel", "Render"
      ]
    },
    {
      category: "Other Skills",
      icon: <FaStar />,
      color: "#38bdf8",
      skills: [
        "Operating Systems", "OOP", "Computer Networks", 
        "Android", "Data Structures", "Problem Solving"
      ]
    }
  ];

  export {skillsData};