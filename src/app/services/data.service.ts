import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProjects() {
    return [
      { name: 'Portfolio App', description: 'Personal website built with Angular', tech: ['Angular', 'TypeScript'] },
      // Add more
    ];
  }

  getSkills() {
    return {
      expert: ['Angular', 'TypeScript'],
      intermediate: ['Node.js', 'Firebase'],
      beginner: ['Docker', 'CI/CD']
    };
  }

  getExperience() {
    return [
      { role: 'Web Developer', company: 'ABC Corp', duration: 'Jan 2022 - Present', responsibilities: ['Built apps', 'Fixed bugs'] },
      // Add more
    ];
  }

  getEducation() {
    return [
      { degree: 'B.Tech in CS', institution: 'XYZ University', year: '2023' }
    ];
  }
}
