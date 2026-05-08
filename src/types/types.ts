export interface NavbarProps {
  label: string;
  href: string;
}

export interface ExperienceProps {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
  current: boolean;
}
