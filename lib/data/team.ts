export type MemberRole = 'bod' | 'secretary' | 'treasurer' | 'hrd' | 'communication' | 'pnp' | 'multimedia' | 'tr';

export interface TeamMember {
  name: string;
  position: string;
  batch: number;
  major: string;
  role: MemberRole;
  isHead?: boolean;
  isViceHead?: boolean;
}

export const leadership: TeamMember[] = [
  { name: 'Excel Viryan', position: 'Chairperson', batch: 2024, major: 'Informatics', role: 'bod', isHead: true },
  { name: 'Moreno Dwi Putra', position: 'Vice Chairperson 1', batch: 2024, major: 'Informatics', role: 'bod', isViceHead: true },
  { name: 'Dimas Dwika Putra', position: 'Vice Chairperson 2', batch: 2024, major: 'Mechanical Engineering', role: 'bod', isViceHead: true },
];

export const secretaryTeam: TeamMember[] = [
  { name: 'Cut Kheysa Sakbania', position: 'Senior Secretary', batch: 2024, major: 'Informatics', role: 'secretary', isHead: true },
  { name: 'Antya Putri Bramanditya', position: 'Junior Secretary', batch: 2025, major: 'Informatics', role: 'secretary' },
  { name: 'Najwa Aufi Maulaya Havidz', position: 'Junior Secretary', batch: 2025, major: 'Mechanical Engineering', role: 'secretary' },
];

export const treasurerTeam: TeamMember[] = [
  { name: 'Naisila Badriyah Kamil', position: 'Senior Treasurer', batch: 2024, major: 'Accounting', role: 'treasurer', isHead: true },
  { name: 'Putri Mahardika Dewi', position: 'Junior Treasurer', batch: 2025, major: 'Informatics', role: 'treasurer' },
  { name: 'Atin Al Auliya Rianto', position: 'Junior Treasurer', batch: 2025, major: 'Informatics', role: 'treasurer' },
];

// BoD = Leadership + Secretary + Treasurer
export const bodTeam: TeamMember[] = [...leadership, ...secretaryTeam, ...treasurerTeam];

export const hrdTeam: TeamMember[] = [
  { name: 'Aisyah Nabila Rahma', position: 'Head of HRD', batch: 2024, major: 'Law', role: 'hrd', isHead: true },
  { name: 'Shofiyatur Rahmatin Nazilah', position: 'Vice Head of HRD', batch: 2024, major: 'Informatics', role: 'hrd', isViceHead: true },
  { name: 'Shofiyah', position: 'Member of HRD', batch: 2025, major: 'Informatics', role: 'hrd' },
  { name: 'Rizkha Ramadhani Hafifah', position: 'Member of HRD', batch: 2025, major: 'Informatics', role: 'hrd' },
];

export const communicationTeam: TeamMember[] = [
  { name: 'Hengky Setiawan', position: 'Head of Communication', batch: 2024, major: 'Informatics', role: 'communication', isHead: true },
  { name: 'Clarizza Revalentina Setiawan', position: 'Vice Head of Communication', batch: 2024, major: 'Informatics', role: 'communication', isViceHead: true },
  { name: 'Siu Yen Yeni', position: 'Member of Communication', batch: 2025, major: 'Informatics', role: 'communication' },
  { name: 'Firza Miftahul Ilmi', position: 'Member of Communication', batch: 2025, major: 'Informatics', role: 'communication' },
  { name: 'Siti Isyaura Putri Hapsari', position: 'Member of Communication', batch: 2025, major: 'Informatics', role: 'communication' },
  { name: 'Aura Dhealova Kholiq', position: 'Member of Communication', batch: 2025, major: 'Mechanical Engineering', role: 'communication' },
];

export const pnpTeam: TeamMember[] = [
  { name: 'Kevin Syonin', position: 'Head of Program & Production', batch: 2024, major: 'Informatics', role: 'pnp', isHead: true },
  { name: 'Anggun Amalia Dara Putri', position: 'Vice Head of Program & Production', batch: 2024, major: 'Civil Engineering', role: 'pnp', isViceHead: true },
  { name: 'Muhammad Aji Handono', position: 'Member of Program & Production', batch: 2025, major: 'Electrical Engineering', role: 'pnp' },
  { name: 'Maha Rahma Permata Az-Zahra Subekty', position: 'Member of Program & Production', batch: 2025, major: 'Informatics', role: 'pnp' },
  { name: 'Kevin Linata', position: 'Member of Program & Production', batch: 2025, major: 'Informatics', role: 'pnp' },
  { name: 'Naswa Nurul Azmi', position: 'Member of Program & Production', batch: 2025, major: 'Informatics', role: 'pnp' },
];

export const multimediaTeam: TeamMember[] = [
  { name: 'Almira Shinta Aulia', position: 'Head of Multimedia & Design', batch: 2024, major: 'Informatics', role: 'multimedia', isHead: true },
  { name: 'Azriel Winnermore Zebua', position: 'Vice Head of Multimedia & Design', batch: 2024, major: 'Informatics', role: 'multimedia', isViceHead: true },
  { name: 'Ainun Maridho Pratama', position: 'Member of Multimedia & Design', batch: 2025, major: 'Visual Communication Design', role: 'multimedia' },
  { name: 'Cahaya Rheinata', position: 'Member of Multimedia & Design', batch: 2025, major: 'Informatics', role: 'multimedia' },
  { name: 'Az-zahra Anastasya Kusnendi', position: 'Member of Multimedia & Design', batch: 2024, major: 'Accounting', role: 'multimedia' },
  { name: 'Jhavendrew Stancio Albion', position: 'Member of Multimedia & Design', batch: 2025, major: 'Mechanical Engineering', role: 'multimedia' },
];

export const techResearchTeam: TeamMember[] = [
  { name: 'Briant Jasper', position: 'Head of Technology Research', batch: 2024, major: 'Informatics', role: 'tr', isHead: true },
  { name: 'Jihan Azaria Bibi', position: 'Vice Head of Technology Research', batch: 2024, major: 'Informatics', role: 'tr', isViceHead: true },
  { name: 'Rahsya Benova Akbar', position: 'Member of Technology Research', batch: 2025, major: 'Informatics', role: 'tr' },
  { name: 'Yesi Nurfitriyani', position: 'Member of Technology Research', batch: 2025, major: 'Informatics', role: 'tr' },
  { name: 'Muhammad Yusuf', position: 'Member of Technology Research', batch: 2025, major: 'Informatics', role: 'tr' },
  { name: 'Muhammad Ghifari', position: 'Member of Technology Research', batch: 2025, major: 'Informatics', role: 'tr' },
  { name: 'Fioni Tandiani', position: 'Member of Technology Research', batch: 2025, major: 'Information System', role: 'tr' },
];

export const allDivisionHeads = [
  { name: 'Aisyah Nabila Rahma', division: 'Human Resource Development', role: 'hrd' as MemberRole },
  { name: 'Hengky Setiawan', division: 'Communication', role: 'communication' as MemberRole },
  { name: 'Kevin Syonin', division: 'Program & Production', role: 'pnp' as MemberRole },
  { name: 'Almira Shinta Aulia', division: 'Multimedia & Design', role: 'multimedia' as MemberRole },
  { name: 'Briant Jasper', division: 'Technology Research', role: 'tr' as MemberRole },
];
