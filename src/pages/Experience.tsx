
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import queenbug from '../images/queenbuglogo.png';
import shc from '../images/ClgLogo.png';
const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Queenbug Technologies",
      position: "ReactJs intern Trainee",
      location: "Tirupattur, India",
      startDate: "Nov 2024",
      endDate: "Mar 2025",
      duration: "4 months",
      companyLogo: queenbug,
      description: "Leading the development of scalable web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented CI/CD pipelines and optimized application performance resulting in 40% faster load times.",
      achievements: [
        "Developed and maintained Web applications",
        "Reduced application load time by 40% through optimization",
        "Led migration of legacy systems to modern tech stack"
      ],
      technologies: ["React.js", "Node.js", "Php", "MongoDB", "TypeScript", "API Integration"],
      companyWebsite: "https://queenbug.com/"
    },
    {
      id: 2,
      company: "Sacred Heart College (Autonomous)",
      position: "Data Analyst & Technical Team",
      location: "Tirupattur, India",
      startDate: "Dec 2023",
      endDate: "Mar 2024",
      duration: "4 months",
      companyLogo: "https://drive.google.com/file/d/12Sr7WPfOgqdzy8MN4v0tU8Kdavup8Sbs/view?usp=sharing",
      description: " Contributed as part of the Data Analysis and Technical Team for the NAAC Accreditation process at Sacred Heart College, Tirupattur.",
      achievements: [
        "Data Processing with Excel ",
        "Improved skills on Productivity tools Microsoft office and Google suite",
        "Implemented modern Data analyzing techniques ",
        "Collaborated with design team on 20+ PPT creation",
        "Working on Live project to uploading and Analyzing documents"
      ],
      technologies: ["Microsoft Office", "Google Suite", "Php", "Sass", "Webpack"],
      companyWebsite: "https://shctpt.edu/"
    }
  ];

  const getCurrentStatus = (endDate: string) => {
    return endDate === "Present" ? "current" : "past";
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Briefcase className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Work Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and web technologies
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block z-10"></div>

                <Card className="lg:ml-20 overflow-hidden hover-lift">
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                        {/* Company Logo */}
                        <div className="flex-shrink-0">
                          <img 
                            src={experience.companyLogo}
                            alt={`${experience.company} logo`}
                            className="w-16 h-16 rounded-lg object-cover border-2 border-border"
                          />
                        </div>
                        
                        {/* Position & Company */}
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-1">
                            {experience.position}
                          </h2>
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {experience.company}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{experience.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{experience.startDate} - {experience.endDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Status & Duration */}
                      <div className="flex flex-col items-start lg:items-end space-y-2">
                        <Badge 
                          className={
                            getCurrentStatus(experience.endDate) === "current" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-blue-100 text-blue-800"
                          }
                        >
                          {getCurrentStatus(experience.endDate) === "current" ? "Current Role" : "Past Role"}
                        </Badge>
                        <span className="text-sm font-medium text-muted-foreground">
                          {experience.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-foreground/80">
                            <span className="text-primary text-xl leading-none">•</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Company Link */}
                    <Button variant="outline" asChild className="hover-lift">
                      <a 
                        href={experience.companyWebsite} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <ExternalLink size={16} />
                        <span>Visit Company</span>
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <Card className="p-6 hover-lift animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-muted-foreground">Months Experience</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Companies</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Technologies</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
