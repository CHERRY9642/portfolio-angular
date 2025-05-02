import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  skills = [
    {
      name: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python']
    },
    {
      name: 'Frameworks',
      items: ['Angular', 'React', 'Node.js']
    },
    {
      name: 'Databases',
      items: ['MySQL', 'MongoDB', 'Firebase']
    }
  ];
}
