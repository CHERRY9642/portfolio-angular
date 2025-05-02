import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationTimeline = [
    {
      year: '2015-2020',
      title: 'High School',
      institution: 'ZP High School',
      location: 'Karasanapalle(V),Chittoor(D),AP(State)',
      percentage: '95%',
      description: 'Completed secondary education with strong fundamentals in math and science.'
    },
    {
      year: '2020-2022',
      title: 'Intermediate',
      institution: 'Sri Vivekananda Junior College',
      location: 'Palamaneru,Chittoor(D),AP(State)',
      percentage: '76.9%',
      description: 'Specialized in MPC stream with a focus on mathematics and computer science.'
    },
    {
      year: '2022 - Present',
      title: 'Bachelor of Technology',
      institution: 'Sri Venkateswara College of Engineering Technology',
      location: ',Chittoor(D),Andhra Pradesh(State)',
      percentage: '8.5 CGPA (ongoing)',
      description: 'Pursuing Information Technology Engineering with projects in web and AI.'
    }
  ];
}
