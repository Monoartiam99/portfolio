import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiMongodb 
} from 'react-icons/si';

const techData = [
  { id: 1, name: 'React', icon: <FaReact className="text-blue-400" /> },
  { id: 2, name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { id: 3, name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { id: 4, name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { id: 5, name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { id: 6, name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
];


export default function TechStack() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Tech Stack</h2>
      <div style={styles.grid}>
        {techData.map((tech) => (
          <div key={tech.id} style={styles.card}>
            <div style={styles.iconWrapper}>{tech.icon}</div>
            <span style={styles.name}>{
}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
