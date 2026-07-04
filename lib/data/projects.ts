export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  division: string;
  year: string;
  event?: string;
  achievement?: string;
  achievementType?: 'gold' | 'silver' | 'bronze' | 'finalist' | 'winner' | 'none';
  tags: string[];
  toolsUsed?: string[];
  creators?: { name: string; role: string }[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
  imageGradient: string;
}

export const projects: Project[] = [
  {
    id: 'line-follower-robot',
    name: 'Line Follower Robot',
    description:
      'An infrared sensor-based line follower robot with PID control optimized for speed and accuracy. Built as Technology Research\'s initial project for embedded systems exploration.',
    fullDescription: 'This Line Follower Robot serves as the foundational project for the Technology Research division. The goal was to build a highly responsive and accurate robot capable of navigating complex tracks using infrared sensors and a custom-tuned PID algorithm. We focused heavily on optimizing motor control loops and minimizing sensor noise to achieve the fastest track completion time possible.',
    division: 'Technology Research',
    year: '2025',
    event: 'PURTC Internal Project',
    achievement: 'Internal Showcase',
    achievementType: 'none',
    tags: ['Embedded Systems', 'C++', 'PID Control', 'Arduino'],
    toolsUsed: ['Arduino IDE', 'C++', 'Fusion 360 (Chassis Design)'],
    creators: [
      { name: 'Technology Research Team', role: 'Hardware & Software' }
    ],
    repoUrl: '#',
    imageGradient: 'from-blue-600/30 to-cyan-500/20',
  },
  {
    id: 'smart-monitoring-iot',
    name: 'Smart Room Monitoring',
    description:
      'An IoT-based room monitoring system using ESP32 with a real-time dashboard. Monitors temperature, humidity, and occupancy — as a real implementation of the smart campus concept.',
    fullDescription: 'Designed as a step towards a smart campus, this IoT project utilizes the ESP32 microcontroller to constantly monitor environmental variables like temperature, humidity, and room occupancy. Data is sent via MQTT to a real-time web dashboard where administrators can view historical trends and receive alerts if parameters exceed normal thresholds.',
    division: 'Technology Research',
    year: '2025',
    event: 'Internal Research Project',
    achievement: 'Research Prototype',
    achievementType: 'none',
    tags: ['IoT', 'ESP32', 'Dashboard', 'Real-time'],
    toolsUsed: ['ESP32', 'C++', 'MQTT', 'Node.js', 'React'],
    creators: [
      { name: 'Technology Research Team', role: 'IoT & Web Dashboard' }
    ],
    repoUrl: '#',
    imageGradient: 'from-violet-600/30 to-purple-500/20',
  },
  {
    id: 'purtc-website',
    name: 'PURTC Official Website',
    description:
      'PURTC\'s official website — the organization\'s first digital platform built with Next.js 14, Three.js, and Framer Motion. Designed as both a landing page and the foundation for the club\'s information system.',
    fullDescription: 'The official digital presence for PURTC. This website was built from scratch to showcase the club\'s vision, team, and projects. It features modern UI/UX design, interactive 3D elements powered by Three.js, and fluid animations using Framer Motion. It acts as the primary hub for all club-related information and recruitment drives.',
    division: 'Technology Research',
    year: '2026',
    event: 'PURTC Strategic Project',
    achievement: 'Official Launch',
    achievementType: 'winner',
    tags: ['Next.js', 'TypeScript', 'Three.js', 'Framer Motion'],
    toolsUsed: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    creators: [
      { name: 'PURTC Web Dev Team', role: 'Fullstack Development' }
    ],
    repoUrl: 'https://github.com/PURTC/website',
    demoUrl: 'https://purtc.com',
    imageGradient: 'from-cyan-600/30 to-blue-500/20',
  },
  {
    id: 'future-tech-workshop-2025',
    name: 'Future Tech Workshop',
    description:
      'The first workshop program successfully organized by PURTC. This event became an important milestone in PURTC\'s journey as a club that actively organizes technology education programs.',
    fullDescription: 'A comprehensive workshop aimed at introducing students to the latest trends in technology, including AI, Robotics, and IoT. The event included hands-on coding sessions, guest lectures from industry professionals, and collaborative mini-projects, marking PURTC’s successful entry into organizing large-scale educational events.',
    division: 'Program & Production',
    year: '2025',
    event: 'Future Tech Workshop',
    achievement: 'Successfully Executed',
    achievementType: 'winner',
    tags: ['Event', 'Workshop', 'Education', 'Community'],
    toolsUsed: ['Event Management', 'Public Speaking', 'Workshop Modules'],
    creators: [
      { name: 'Program & Production', role: 'Event Organizers' },
      { name: 'Communication', role: 'Marketing & PR' }
    ],
    imageGradient: 'from-amber-600/30 to-orange-500/20',
  },
];
