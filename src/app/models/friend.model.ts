export interface Friend {
  name: string;
  status: 'Online' | 'Snoozing' | 'In-Game';
  statusDetail?: string;
  link: string;
  icon: string;
}
