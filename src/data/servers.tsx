
import React from 'react';

export interface ServerType {
  id: string;
  name: string;
  type: 'STDIO' | 'HTTP SSE';
  version: string;
  description: string;
  author: string;
  rating: number;
  installed: boolean;
  icon: React.ReactNode;
  isOfficial: boolean;
  tags: string[];
}

export const servers: ServerType[] = [
  {
    id: '1',
    name: 'AWS Toolkit',
    type: 'STDIO',
    version: '2.1.0',
    description: 'Tools for working with AWS services, including Lambda, EC2, S3, and more. Provides seamless integration with the AWS ecosystem.',
    author: 'AWS Community',
    rating: 4,
    installed: true,
    isOfficial: true,
    tags: ['Cloud', 'DevOps', 'Infrastructure'],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-700">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      </div>
    ),
  },
  {
    id: '2',
    name: 'Docker Assistant',
    type: 'HTTP SSE',
    version: '1.5.0',
    description: 'Helps manage Docker containers and images. Provides an intuitive interface for container management and deployment.',
    author: 'Docker Community',
    rating: 4,
    installed: false,
    isOfficial: false,
    tags: ['DevOps', 'Containers', 'Infrastructure'],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-700">
          <path d="M22 13V8a2 2 0 0 0-2-2h-8.93a2 2 0 0 1-1.66-.9l-.47-.7a2 2 0 0 0-1.66-.9H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h7"/>
          <path d="M16 16h.01"/>
          <path d="M19 16h.01"/>
          <path d="M13 16h.01"/>
          <path d="M13 19h.01"/>
          <path d="M16 19h.01"/>
          <path d="M19 19h.01"/>
        </svg>
      </div>
    ),
  },
  {
    id: '3',
    name: 'Frontend Dev Tools',
    type: 'HTTP SSE',
    version: '3.2.1',
    description: 'Utilities for frontend development, including code generators, component libraries, and design tools.',
    author: 'Web Dev Team',
    rating: 4,
    installed: false,
    isOfficial: true,
    tags: ['Web', 'UI/UX', 'Frontend', 'Development'],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-700">
          <rect width="20" height="14" x="2" y="3" rx="2"/>
          <line x1="8" x2="16" y1="21" y2="21"/>
          <line x1="12" x2="12" y1="17" y2="21"/>
        </svg>
      </div>
    ),
  },
  {
    id: '4',
    name: 'Kubernetes Helper',
    type: 'STDIO',
    version: '0.9.5',
    description: 'Tools for working with Kubernetes clusters, including deployment, scaling, and monitoring capabilities.',
    author: 'K8s Community',
    rating: 4,
    installed: false,
    isOfficial: false,
    tags: ['DevOps', 'Cloud', 'Infrastructure', 'Containers'],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-700">
          <circle cx="12" cy="12" r="3"/>
          <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7"/>
        </svg>
      </div>
    ),
  },
];
