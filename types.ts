
export interface ServiceCard {
  title: string;
  icon: React.ReactNode;
  description: string;
  videoUrl?: string;
}

export interface StrategicPhase {
  id: string;
  title: string;
  period: string;
  description: string;
  milestones: string[];
  stats: { label: string; value: string }[];
}

export enum UserRole {
  STUDENT = 'STUDENT',
  TRAINER = 'TRAINER',
  GUEST = 'GUEST'
}
