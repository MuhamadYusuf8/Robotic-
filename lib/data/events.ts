export interface Event {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  dateDisplay: string;
  status: 'upcoming' | 'ongoing' | 'past' | 'coming-soon' | 'pending';
  category: 'workshop' | 'training' | 'competition' | 'meeting' | 'social';
  division?: string;
  tags: string[];
  registrationUrl?: string;
  imageUrl?: string;
  highlights?: string[];
}

export interface TimelineMilestone {
  period: string;
  title: string;
  description: string;
  badge?: string;
}

export const events: Event[] = [
  {
    id: 'weekly-training-2026',
    title: 'Weekly Training',
    subtitle: 'PURTC Weekly Session',
    description:
      'PURTC\'s regular weekly program that brings members together to learn. From senior mentoring, exploring the latest technology, hands-on practice, to working on each participant\'s final project. Weekly Training is the core foundation of PURTC member skill development.',
    date: '2026-01-01',
    dateDisplay: 'Every Week',
    status: 'pending',
    category: 'training',
    division: 'Program & Production & Technology Research',
    tags: ['Regular', 'Mentoring', 'Technology', 'Project'],
    highlights: [
      'Direct mentoring from senior members',
      'Exploring the latest technology',
      'Hands-on practice & projects',
      'Discussion & sharing sessions',
    ],
  },
  {
    id: 'craft-workshop-2026',
    title: 'CRAFT Workshop',
    subtitle: 'PURTC Intensive Workshop',
    description:
      'PURTC\'s intensive workshop designed for members and President University students. CRAFT is a deep technical and non-technical skill development program, offering immersive and practical learning experiences. Topic details and dates will be announced soon.',
    date: '2026-12-31',
    dateDisplay: 'Coming Soon',
    status: 'coming-soon',
    category: 'workshop',
    division: 'Committee Workshop',
    tags: ['Workshop', 'Intensive', 'Coming Soon', 'Skill Development'],
    highlights: [
      'Multi-day intensive program',
      'Experienced instructors',
      'Completion certificate',
      'Networking with other students',
    ],
  },
  {
    id: 'future-tech-workshop',
    title: 'Future Tech Workshop',
    subtitle: 'PURTC\'s Inaugural Workshop Program',
    description:
      'The inaugural workshop organized by PURTC as the club\'s first official program. Future Tech Workshop became the initial milestone in PURTC\'s journey of organizing technology education programs for President University students.',
    date: '2025-01-01',
    dateDisplay: '2025',
    status: 'past',
    category: 'workshop',
    division: 'Committee Workshop',
    tags: ['Workshop', 'Inaugural', 'Technology', 'History'],
    highlights: [
      'PURTC\'s first workshop program',
      'Attended by founding members',
      'Organizational milestone',
    ],
  },
];

export const timeline: TimelineMilestone[] = [
  {
    period: 'October 25th',
    title: 'PURTC Founded',
    description:
      'PURTC was officially founded with 16 inaugural members. Kevin Syonin became the Founder & first Chairperson who laid the foundation of the organization.',
    badge: 'Founding',
  },
  {
    period: 'First Cabinet — Mingzhi',
    title: 'First Cabinet Formed',
    description:
      'PURTC\'s inaugural cabinet was formed with Vice Chairperson Abdillah Alghifary A. Active divisions: Program & Production, Technology Research, Multimedia, and Internal & External Relations. Total members reached 33.',
    badge: 'Cabinet I',
  },
  {
    period: '2025',
    title: 'Future Tech Workshop',
    description:
      'PURTC\'s first workshop program — Future Tech Workshop — was successfully held, becoming PURTC\'s first milestone as an actively contributing club.',
    badge: 'First Program',
  },
  {
    period: 'Current Cabinet — Ardentis',
    title: 'A New Era Under Ardentis',
    description:
      'Excel Viryan (Chairperson), Moreno Dwiputra (Vice Chair 1), and Dimas Dwika Putra (Vice Chair 2) lead a new era of PURTC. The organizational structure was expanded with Communication and HRD divisions. Total members: 39.',
    badge: 'Cabinet II',
  },
  {
    period: '2026 — Present',
    title: 'Growing & Evolving',
    description:
      'Weekly Training runs actively every week. CRAFT Workshop is in preparation. PURTC continues to grow as an active and impactful technology community at President University.',
    badge: 'Active',
  },
];
