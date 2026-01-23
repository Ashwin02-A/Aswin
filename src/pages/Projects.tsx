
import React from 'react';
import stoream from '../images/Stoream.png';
import shcapp from '../images/social_media.png';
import prison from '../images/prison_ministry.png';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Star, GitFork, Languages } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stoream",
      description: "A full-stack e-commerce platform built with React, Node.js, and Php Mysql.  Built an OTT platform for movie upload, streaming, and management. Improved user experience with secure access and dynamic content delivery",
      technologies: ["ReactJS", "NodeJS", "Html", "Tailwind", "Php", "Mysql","Razorpay API"],
      githubLink: "https://github.com/Ashwin02-A/Prison_Ministry",
      liveLink: "/Aswin/src/images/BP231033_Stoream.pdf",
      stars: 24,
      forks: 8,
      image: stoream,
      status: "Completed"
    },
    {
      id: 2,
      title: "SHC Social Media",
      description: " Enabled college management to share updates, with a like feature for student interaction. Improved communication and engagement through consistent post sharing",
      technologies: ["XML", "Java", "Firebase"],
      githubLink: "https://github.com/aswin-a/task-manager",
      liveLink: "/Aswin/src/images/BP231033_SHC.pdf",
      stars: 18,
      forks: 5,
      image: shcapp,
      status: "Completed"
    },
    {
      id: 3,
      title: "Prison Ministry",
      description: " Built a web application for the Project to manage volunteers, users, and admin efficiently. Introduced innovative role-based features to streamline workflow",
      technologies: ["Html5", "Css3", "Javascript", "Php", "Mysql"],
      githubLink: "https://github.com/aswin-a/weather-dashboard",
      liveLink: "/Aswin/src/images/AU200517_Prison_Ministry.pdf",
      stars: 15,
      forks: 3,
      image: prison,
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Code className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work, from web applications to innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-lift animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Project Image */}
                <div className="lg:col-span-5">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img 
                      src={`${project.image}?w=600&h=400&fit=crop&crop=entropy`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge 
                      className={`absolute top-4 left-4 ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-7 p-8">
                  <div className="space-y-6">
                    {/* Title and Stats */}
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-3">
                        {project.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star size={16} className="text-yellow-500" />
                          <span>{project.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork size={16} />
                          <span>{project.forks}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        {/* <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <Github size={18} />
                          <span>View Code</span>
                        </a> */}
                        {project.liveLink && (
                        
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <ExternalLink size={18} />
                            <span>View Document</span>
                          </a>
                      )}
                      </Button>
                      
                      {/* {project.liveLink && (
                        <Button variant="outline" asChild className="hover-lift">
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <ExternalLink size={18} />
                            <span>View Document</span>
                          </a>
                        </Button>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        {/* <div className="mt-16 text-center animate-fade-in">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-2xl font-bold gradient-text mb-4">Explore More Projects</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Check out my GitHub profile for more projects and contributions to open source
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a 
                href="https://github.com/aswin-a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github size={20} />
                <span>Visit GitHub Profile</span>
              </a>
            </Button>
          </Card>
        </div> */}

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <Card className="p-6 hover-lift animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Completed Projects</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">57</div>
            <div className="text-muted-foreground">GitHub Stars</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">16</div>
            <div className="text-muted-foreground">Forks</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="text-muted-foreground">Technologies Used</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
