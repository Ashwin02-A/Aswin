
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Languages, 
  Heart, 
  Target,
  Download,
  Github,
  Linkedin,
  Globe
} from 'lucide-react';

const PersonalInfo = () => {
  const personalDetails = {
    fullName: "Aswin A",
    email: "aswinanto02@gmail.com",
    phone: "+91 9344302906",
    location: "Chennai, Tamil Nadu, India",
    dateOfBirth: "October 02, 2003",
    nationality: "Indian",
    linkedIn: "https://linkedin.com/in/aswinanto",
    github: "https://github.com/aswin-a",
    // portfolio: "https://ashwin02-a.github.io/Aswin-Portfolio/"
    portfolio: "#"
  };


  const prof_image = 
  {
    prof_image1: "src/images/profile_image.jpg"
  }

  const resume = 
  {
    resume:"src/images/ASWIN_A.pdf"
  };

  const languages = [
    { name: "Tamil", proficiency: "Native" },
    { name: "English", proficiency: "Fluent" },
    { name: "Malayalam", proficiency: "Basic" }
  ];

  const interests = [
    "Web Development", "Open Source", "Machine Learning", "Mobile Development",
    "Cloud Computing", "DevOps", "UI/UX Design", "Photography",
    "Travel", "Reading", "Fitness", "Music"
  ];

  const achievements = [
    {
      title: "Participated in HackerRank",
      description: "Participated in HackerRank Quiz and Solving innovative software Programs and Pseudo Code",
      year: "2025"
    },
    {
      title: "Contribution for NAAC Accreditation ",
      description: "First place in 48-hour coding hackathon with team of 4 developers",
      year: "2024"
    },
    {
      title: "Participated and Winner in BOSCON'24",
      description: "Participated and Won the Overall Champions Trophy in BOSCOn'24 Technical Symposium at Yelagiri Don Bosco College",
      year: "2023"
    },
    {
      title: "Event Coordinator for SPACE'23 Symposium ",
      description: "Event Coordinator for SPACE'23 Technical Symposium in Sacred Heart College(Autonomous)",
      year: "2022"
    }
  ];

  const careerObjective = "Passionate and dedicated Full Stack Developer with expertise in modern web technologies seeking challenging opportunities to contribute to innovative projects. Committed to continuous learning and staying updated with latest industry trends while delivering high-quality, scalable solutions.";

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
          
            <User className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Personal Information</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my background, interests, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <Card className="p-6 text-center hover-lift animate-fade-in">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <img src={prof_image.prof_image1} className="rounded-full bg-blue-9" />
                <User size={64} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold gradient-text mb-2">{personalDetails.fullName}</h2>
              <p className="text-muted-foreground mb-4">Full Stack Developer</p>
              <div className="flex justify-center space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={personalDetails.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={personalDetails.linkedIn} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={16} />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={personalDetails.portfolio} target="_blank" rel="noopener noreferrer">
                    <Globe size={16} />
                  </a>
                </Button>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Mail className="mr-2 text-primary" size={20} />
                Contact Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-muted-foreground" />
                  <span className="text-sm">{personalDetails.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-muted-foreground" />
                  <span className="text-sm">{personalDetails.phone}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-muted-foreground mt-1" />
                  <span className="text-sm">{personalDetails.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar size={16} className="text-muted-foreground" />
                  <span className="text-sm">{personalDetails.dateOfBirth}</span>
                </div>
              </div>
            </Card>

            {/* Languages */}
            <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Languages className="mr-2 text-primary" size={20} />
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{language.name}</span>
                    <Badge variant="secondary">{language.proficiency}</Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Download CV */}
            <Button className="w-full animate-fade-in" style={{ animationDelay: '0.3s' }}>
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

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Career Objective */}
            <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="mr-3 text-primary" size={24} />
                Career Objective
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {careerObjective}
              </p>
            </Card>

            {/* Achievements */}
            <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="mr-3 text-primary" size={24} />
                Key Achievements
              </h3>
              <div className="grid gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6 py-2">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{achievement.title}</h4>
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interests & Hobbies */}
            <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Heart className="mr-3 text-primary" size={24} />
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-center py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Personal Values */}
            <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6">Personal Values & Work Philosophy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary">Core Values</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Continuous learning and growth</li>
                    <li>• Quality and attention to detail</li>
                    <li>• Collaboration and teamwork</li>
                    <li>• Innovation and creativity</li>
                    <li>• Integrity and transparency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary">Work Philosophy</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• User-centered design approach</li>
                    <li>• Clean, maintainable code</li>
                    <li>• Agile development practices</li>
                    <li>• Performance optimization</li>
                    <li>• Knowledge sharing</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <Card className="p-6 hover-lift animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">22</div>
            <div className="text-muted-foreground">Years Old</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Languages Spoken</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">GitHub Contributions</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Learning Mindset</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
