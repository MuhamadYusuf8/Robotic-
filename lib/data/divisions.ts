import { Microscope, Clapperboard, Megaphone, Users, MonitorSpeaker, Shield } from 'lucide-react';

export interface Division {
  id: string;
  name: string;
  shortName: string;
  description: string;
  fullDescription: string;
  focusAreas: string[];
  color: string;
  icon: string; // lucide icon name
}

export const divisions: Division[] = [
  {
    id: 'board-of-directors',
    name: 'Board of Directors',
    shortName: 'BoD',
    description: 'The executive body overseeing PURTC\'s strategic direction, administration, and financial management.',
    fullDescription:
      'The Board of Directors is the executive body of PURTC, overseeing the club\'s strategic direction, administration, and financial management. Consisting of the Chairperson, Vice Chairpersons, Secretary, and Treasurer teams, the BoD ensures that every aspect of the organization runs smoothly and that PURTC continues to grow as a leading technology community at President University.',
    focusAreas: ['Strategic Planning', 'Organizational Leadership', 'Administration', 'Financial Management', 'Club Governance'],
    color: '#00c4ff',
    icon: 'Shield',
  },
  {
    id: 'communication',
    name: 'Communication',
    shortName: 'Comm',
    description: 'Managing external communications and PURTC social media.',
    fullDescription:
      'The Communication division is the voice of PURTC to the outside world. We manage all external communications, social media, public relations, and build bridges between PURTC and the campus community as well as external partners. If you enjoy writing, communicating, and building relationships, Comm is your division.',
    focusAreas: ['Social Media Management', 'Public Relations', 'Copywriting', 'External Partnership', 'Brand Voice'],
    color: '#10b981',
    icon: 'Megaphone',
  },
  {
    id: 'hrd',
    name: 'Human Resource Development',
    shortName: 'HRD',
    description: 'Member development — recruitment, onboarding, and member coaching.',
    fullDescription:
      'Human Resource Development is the backbone of the PURTC organization. This division ensures every member grows and develops optimally — from fair recruitment processes, new member onboarding, continuous coaching, to building a positive and inclusive organizational culture.',
    focusAreas: ['Recruitment', 'Member Development', 'Training & Coaching', 'Organizational Culture', 'Talent Management'],
    color: '#ec4899',
    icon: 'Users',
  },
  {
    id: 'technology-research',
    name: 'Technology Research',
    shortName: 'TR',
    description: 'Research and exploration of cutting-edge technology — robotics, AI, IoT, and hardware/software innovation.',
    fullDescription:
      'The Technology Research division is the innovation heart of PURTC. We explore, research, and develop cutting-edge technology solutions ranging from robotics, artificial intelligence, Internet of Things, to hardware and software innovation. TR is the place for those who want to build something that has never existed before.',
    focusAreas: ['Robotics', 'Artificial Intelligence', 'IoT', 'Embedded Systems', 'Hardware Development'],
    color: '#00c4ff',
    icon: 'Microscope',
  },
  {
    id: 'program-production',
    name: 'Program & Production',
    shortName: 'PnP',
    description: 'Designing and managing club programs — from workshops, training, to competitions.',
    fullDescription:
      'Program & Production is the driving engine of PURTC activities. This division designs, organizes, and executes all club programs from regular Weekly Training, intensive workshops, to competition participation. If you enjoy designing meaningful learning experiences, PnP is your place.',
    focusAreas: ['Event Management', 'Workshop Design', 'Competition', 'Program Development', 'Project Management'],
    color: '#7c3aed',
    icon: 'Clapperboard',
  },
  {
    id: 'multimedia-design',
    name: 'Multimedia & Design',
    shortName: 'MTDD',
    description: 'Visual and digital content production — graphic design, video, activity documentation.',
    fullDescription:
      'Multimedia & Design is the creative face of PURTC. This division is responsible for all visual and digital content production — from stunning graphic designs, event videography, to professional documentation of every program. If you have an artistic soul and love telling stories through visuals, MTDD is waiting for you.',
    focusAreas: ['Graphic Design', 'Video Production', 'Photography', 'Motion Graphics', 'Content Creation'],
    color: '#f59e0b',
    icon: 'MonitorSpeaker',
  },
];

export { Microscope, Clapperboard, Megaphone, Users, MonitorSpeaker, Shield };
