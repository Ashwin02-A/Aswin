import prof1 from '../images/hey.png';
import prof2 from '../images/roller_skating_wave.png';
import prof3 from '../images/grin_smile.png';
import prof4 from '../images/hi.png';
import prof5 from '../images/hey_how.png';
import prof6 from '../images/envelope_greeting.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, Download, Code, Database, Globe } from 'lucide-react';

const Home = () => {
  // const skills = [
  //   { name: 'JavaScript', level: 90 },
  //   { name: 'React', level: 90 },
  //   { name: 'Node.js', level: 90 },
  //   { name: 'Python', level: 90 },
  //   { name: 'TypeScript', level: 90 },
  //   { name: 'SQL', level: 90 },
  //   { name: 'Java', level: 90 },
  //   { name: '.NET', level: 70 },
  //   { name: 'Android Development', level: 80 },
  //   { name: 'Linux Commands', level: 65 },
  //   { name: 'Microsoft Office & Google Suite', level: 100 },
  //   { name: 'Typing Skill with 80 WPM', level: 100 },
  // ];

  const skills = [
  {
    name: "JavaScript",
    level: 90,
    role: "Frontend / Backend Developer",
    description: "Strong ES6+, async programming, DOM manipulation, and API integration."
  },
  {
    name: "React",
    level: 90,
    role: "Frontend Developer",
    description: "Building reusable components, hooks, routing, and state management."
  },
  {
    name: "Node.js",
    level: 90,
    role: "Backend Developer",
    description: "REST APIs, authentication, middleware, and server-side logic."
  },
  {
    name: "Python",
    level: 90,
    role: "Backend / ML Engineer",
    description: "Flask, automation scripts, data handling, and ML fundamentals."
  },
  {
    name: "TypeScript",
    level: 90,
    role: "Frontend Developer",
    description: "Type-safe React apps with scalable architecture."
  },
  {
    name: "SQL",
    level: 90,
    role: "Database Developer",
    description: "Complex queries, joins, optimization, and relational design."
  },
  {
    name: "Java",
    level: 90,
    role: "Backend Developer",
    description: "OOP, Spring Boot, REST APIs, and enterprise applications."
  },
  {
    name: ".NET",
    level: 70,
    role: "Backend Developer",
    description: "C#, ASP.NET fundamentals, and API development."
  },
  {
    name: "Android Development",
    level: 80,
    role: "Mobile App Developer",
    description: "Android apps with Firebase integration."
  },
  {
    name: "Linux Commands",
    level: 65,
    role: "System / DevOps Support",
    description: "File systems, permissions, networking, and server basics."
  },
  {
    name: "Microsoft Office & Google Suite",
    level: 100,
    role: "Business / Data Support",
    description: "Advanced Excel, documentation, presentations, and reporting."
  },
  {
    name: "Typing Skill (80 WPM)",
    level: 100,
    role: "Productivity",
    description: "Fast and accurate typing for development and documentation."
  }
];


  const prof_image = {
  // prof_image1: "src/images/profile_image.jpg",
  prof_image3: prof1,
  prof_image4: prof2,
  prof_image5: prof3,
  prof_image2: prof4,
  prof_image6: prof5,
  prof_image7: prof6
};

  const images = Object.values(prof_image);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);


  
  const resume =
    {
      resume: "src/images/ASWIN_A.pdf"
    };

  const linkedin =
  {
    linkedin : "https://www.linkedin.com/in/aswinanto"
  };

  const github =
  {
    github: "https://github.com/Ashwin02-A"
  };

  const mail = 
  {
    mail: "aswinanto02@gmail.com"
  };
  const highlights = [
    { icon: Code, title: 'Software Development', description: 'Full-stack development with modern technologies' },
    { icon: Globe, title: 'Web Development', description: 'Responsive and interactive web applications' },
    { icon: Database, title: 'Database Management', description: 'Design and optimization of database systems' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                  Hi, I'm <span className="gradient-text">Aswin A</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
                  Software Developer & Web Developer
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                  Passionate about creating innovative solutions and building scalable applications 
                  that make a difference. Specialized in full-stack development with a focus on 
                  modern web technologies.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 animate-pulse-glow">
                    View My Work
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="hover-lift">
                <a 
                                            href={resume.resume} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2" >
                      <Download className="mr-2" size={16} />
                              Download Resume
                              </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover-lift"> <a href={github.github} target='_blank' rel='noopener noreferrer' >
                  <Github size={24} />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover-lift"> <a href={linkedin.linkedin} target='_blank' rel='noopener noreferrer' >
                  <Linkedin size={24} />
                  </a>
                </Button>
                
                <Button variant="ghost" size="icon" className="hover-lift"> <a href={mail.mail} target='_blank' rel='noopener noreferrer'>

                
                  <Mail size={24} />
                  </a>
                  
                </Button>
              </div>
            </div>

            {/* Profile Image / Animation */}
            <div className="flex justify-center animate-fade-in-right">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full animate-float"></div>
                <div className="absolute inset-8 bg-transparent rounded-full flex items-center justify-center">
                  <img
                    src={images[currentIndex]}
                    className="rounded-full bg-blue-9"
                    alt="Profile"
                  />
                </div>
                {/* <div className="absolute inset-8 bg-card rounded-full flex items-center justify-center"> */}
                  {/* <Code size={120} className="text-primary" /> */}
                  {/* <img src="src/images/profile_image.jpg" className="rounded-full bg-blue-9" alt="" /> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Technical Skills</h2>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    {/* <span className="text-primary font-bold">{skill.level}%</span> */}
                  {/* </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="h-3 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
          </div> */} 
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Header */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
                {/* <span className="text-sm font-bold text-primary">
                  {skill.level}%
                </span> */}
              </div>

              {/* Progress Bar */}
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Hover Tooltip */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-black/80 px-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {skill.role}
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={highlight.title} className="p-8 text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Courses Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">5 Months+</div>
              <div className="text-muted-foreground">Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Certificates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
