export interface App {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  status: 'online' | 'offline' | 'maintenance';
  color: string;
}

// Add your apps here
export const apps: App[] = [
  {
    id: 'reading-list',
    name: 'Reading List',
    description: 'Track your books, manage your reading progress, and discover new reads.',
    url: 'http://myapp.dev.local',
    icon: '📚',
    status: 'online',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'mission-realestate',
    name: 'mission-realestate',
    description: 'Mission: Review Nashville Homes',
    url: 'http://dev.local:3001/mission-realestate/realestate_review',
    icon: '🏠',
    status: 'online',
    color: 'from-orange-500 to-amber-600',
  },
  // Add more apps below:
  // {
  //   id: 'app-name',
  //   name: 'App Name',
  //   description: 'App description',
  //   url: 'http://app.local:3000',
  //   icon: '🚀',
  //   status: 'online',
  //   color: 'from-blue-500 to-cyan-600',
  // },
];
