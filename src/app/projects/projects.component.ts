import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveLink: string;
  githubLink: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: '🚀 GrabIt — E-commerce Platform',
      description: 'A fully functional modern e-commerce platform with elegant product filtering, real-time updates, and a seamless checkout experience.',
      features: [
        'Real-time cart management using RxJS',
        'Mobile-first responsive glassmorphism UI',
        'Optimized lazy-loaded product views'
      ],
      techStack: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'Node.js'],
      liveLink: '#',
      githubLink: '#',
      imageUrl: 'https://placehold.co/600x400/0a0a0a/38bdf8?text=GrabIt+Store'
    },
    {
      title: '🚀 Crypto Tracker Dashboard',
      description: 'A real-time cryptocurrency tracking application featuring live updating charts, market trends analysis, and user portfolio management.',
      features: [
        'Live data fetching from CoinGecko API',
        'Interactive financial charts',
        'Persistent dark mode and user settings'
      ],
      techStack: ['Angular', 'Chart.js', 'REST API', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
      imageUrl: 'https://placehold.co/600x400/0a0a0a/c084fc?text=Crypto+Tracker'
    },
    {
      title: '🚀 Food Delivery Web App',
      description: 'An interactive food ordering interface offering restaurant menus, an interactive cart system, and real-time order tracking visuals.',
      features: [
        'Smooth page transitions and micro-animations',
        'Advanced state management',
        'Location-based sorting and filtering'
      ],
      techStack: ['Angular', 'CSS Animations', 'Firebase'],
      liveLink: '#',
      githubLink: '#',
      imageUrl: 'https://placehold.co/600x400/0a0a0a/2dd4bf?text=Food+Delivery'
    }
  ];
}
