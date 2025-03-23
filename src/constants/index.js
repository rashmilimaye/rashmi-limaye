import { address } from "framer-motion/client";
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I'm a dedicated software developer with a strong passion for Full-Stack Development, Machine Learning, Cloud Computing, and Automation. Continuously exploring new technologies, I thrive on building innovative solutions and expanding my skill set to stay ahead in the ever-evolving tech landscape.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Project Intern",
    company: " DASSAULT SYSTÈMES",
    description: `Successfully achieved the highest accuracy in classifying materials for material handling by 
integrating YOLO-based object detection with an industrial robot for automated inspection and 
pick and place operations.`,
    technologies: ["Industrial Automation", "Object Detection", "Computer Vision", "Machine Learning"],
  },
  {
    year: "2024 ",
    role: "Backend Developer",
    company: "DIVERGENIC TECH. SOLUTIONS",
    description: `Designed and developed an efficient server-side logic using Django, ensuring sufficient backend 
operations and API management.`,
    technologies: ["Python","Django", "MySQL", "Postman","REST Framework"],
  },
  {
    year: "2023 - 2025",
    role: "Head of Social Media & Marketing",
    company: "INFORMATION TECHNOLOGY STUDENTS' ASSOCIATION (ITSA)",
    description: `Led the social media and marketing team, developing and executing strategic campaigns to boost engagement, expand audience reach, and enhance brand visibility. Oversaw content creation, analytics tracking, and platform management, ensuring consistent messaging and data-driven improvements across multiple channels.`,
    technologies: ["MS Excel"],
  },
  
];

export const PROJECTS = [
  {
    title: "INTEGRATED ROBOTIC SYSTEM FOR SMART MATERIAL HANDLING AND INSPECTION (DASSAULT SYSTÈMES)",
    image: project1,
    description:
      "Designed a vision based robotic system using YOLO and OpenCV to classify objects in real time, ensuring efficient material handling.",
    technologies: ["Computer Vision", "Machine Learning", "CNNs", "Robot Operating System"],
  },
  {
    title: "DATA MANAGEMENT SYSTEM USING DJANGO ",
    image: project2,
    description:
      "Developed an efficient logic for API design, testing, and debugging using the Django REST framework, enhancing system reliability and performance.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "PORTFOLIO WEBSITE",
    image: project3,
    description:
      "Developed & deployed a personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  
];

export const CONTACT = {
  address: "Pune, India",
   phoneNo: "rashmi.limaye221@gmail.com",
   email: "rashmi.limaye221@gmail.com"
};
