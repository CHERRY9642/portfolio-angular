import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Smart Education (SIH-2023)',
      description: 'Worked on an education-related project during the Smart India Hackathon 2023.',
      experience: 'Developed solutions using IoT, data analytics, and education platforms.'
    },
    {
      title: 'Dam Monitoring System (SIH-2024)',
      description: 'Contributed to a dam monitoring project during the Smart India Hackathon 2024.',
      experience: 'Worked on real-time data collection and monitoring solutions using sensors.'
    },
    {
      title: 'Crane Monitoring System (Dynamic Hackathon)',
      description: 'Developed a system to monitor crane data in real-time for the Dynamic Hackathon.',
      experience: 'Used IoT sensors and data logging techniques for live crane monitoring.'
    },
    {
      title: 'Crop Monitoring System (ImpactX)',
      description: 'Created a crop monitoring system using IoT sensors for ImpactX.',
      experience: 'Integrated IoT sensors for soil moisture, temperature, and humidity monitoring.'
    }
  ];

  certificates = [
    {
      certificate: 'Basics of Python - Infosys'
    },
    {
      certificate: 'Deep Learning - Coursera'
    },
    {
      certificate: 'Basics of C - Coursera'
    },
    {
      certificate: 'UI/UX Design - L&T'
    },
    {
      certificate: 'Data Science - ADC'
    },
    {
      certificate: 'Introduction to SQL - edX'
    }
  ];
}
