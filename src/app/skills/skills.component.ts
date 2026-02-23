import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '🦕' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Tailwind CSS', icon: '🌬️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '📦' },
    { name: 'VS Code', icon: '💻' },
  ];
}
