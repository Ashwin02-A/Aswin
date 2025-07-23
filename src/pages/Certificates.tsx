
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Award, Calendar, ExternalLink, Eye, Download } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      id: 1,
      title: "Internship Trainee",
      issuer: "Queenbug Technologies",
      issueDate: "March 2025",
      // credentialId: "AWS-CDA-2024-001",
      description: "Comprehensive certification covering MERN Stack Development, NodeJS architecture, security best practices, and cloud deployment strategies. Demonstrates expertise in developing and maintaining Applications developed in MERN Stack.",
      skills: ["ReactJS", "API Gateway", "NodeJs", "CORS", "JSON", "Php", "Mysql"],
      certificateImage: "/src/images/intern_certificate.png",
      verificationLink: "https://aws.amazon.com/verification/credentials",
      category: "MERN Stack",
      level: "Internship"
    },
    {
      id: 2,
      title: "Offer Letter",
      issuer: "Queenbug Technologies",
      issueDate: "November 2024",
      credentialId: "GA-CERT-2024-789",
      description: "Officially Joined Intern Trainee at Queenbug Technologies to demonstrating proficiency in web Developing, and data analysis. Covers advanced MERN Stack Development with Cyber Security techniques, and conversion tracking.",
      skills: ["MERN Stack", "Cyber Security", "Cyber Foriegnces"],
      certificateImage: "src/images/intern_offletter.jpg",
      verificationLink: "https://skillshop.exceedlms.com/student/collection/287804",
      category: "Offer Letter",
      level: "Fundamental"
    },
    {
      id: 3,
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      issueDate: "January 2024",
      credentialId: "META-REACT-2024-456",
      description: "Advanced React certification covering modern React patterns, hooks, context API, performance optimization, and testing strategies. Includes hands-on projects and real-world application development.",
      skills: ["React", "JavaScript", "Hooks", "Redux", "Testing", "Performance Optimization"],
      certificateImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      verificationLink: "https://coursera.org/verify/professional-cert",
      category: "Frontend Development",
      level: "Advanced"
    },
    {
      id: 4,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      issueDate: "December 2023",
      credentialId: "MONGO-DEV-2023-123",
      description: "Professional certification in MongoDB database design, development, and administration. Covers document modeling, aggregation pipelines, indexing strategies, and performance tuning.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation", "Indexing", "Performance Tuning"],
      certificateImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      verificationLink: "https://university.mongodb.com/certification",
      category: "Database",
      level: "Professional"
    },
    {
      id: 5,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      issueDate: "November 2023",
      credentialId: "FCC-JS-2023-987",
      description: "Comprehensive certification covering fundamental programming concepts, ES6+ features, algorithms, data structures, and problem-solving techniques using JavaScript.",
      skills: ["JavaScript", "Algorithms", "Data Structures", "ES6+", "Problem Solving", "Functional Programming"],
      certificateImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      verificationLink: "https://freecodecamp.org/certification/verify",
      category: "Programming",
      level: "Fundamental"
    },
    {
      id: 6,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      issueDate: "October 2023",
      credentialId: "DOCKER-DCA-2023-654",
      description: "Professional certification in container technologies, Docker architecture, image management, networking, security, and orchestration. Validates skills in containerized application deployment.",
      skills: ["Docker", "Containers", "Docker Compose", "Networking", "Security", "Orchestration"],
      certificateImage: "",
      verificationLink: "https://docker.com/certification/verify",
      category: "DevOps",
      level: "Associate"
    }
  ];

  const categories = ["All", ...Array.from(new Set(certificates.map(cert => cert.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCertificates = selectedCategory === "All" 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Fundamental':
        return 'bg-green-100 text-green-800';
      case 'Associate':
        return 'bg-blue-100 text-blue-800';
      case 'Professional':
        return 'bg-purple-100 text-purple-800';
      case 'Internship':
        return 'bg-red-100 text-red-800';
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
            <Award className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="hover-lift"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate, index) => (
            <Card 
              key={certificate.id} 
              className="overflow-hidden hover-lift animate-fade-in group" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={certificate.certificateImage}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className={`absolute top-4 right-4 ${getLevelColor(certificate.level)}`}>
                  {certificate.level}
                </Badge>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="secondary" onClick={() => setSelectedCertificate(certificate)}>
                        <Eye size={16} className="mr-1" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl gradient-text">{certificate.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img 
                          src={certificate.certificateImage}
                          alt={certificate.title}
                          className="w-full  h-100  rounded-lg"
                        />
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Issued by:</h4>
                            <p className="text-primary font-medium">{certificate.issuer}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Issue Date:</h4>
                            <p>{certificate.issueDate}</p>
                          </div>
                          {/* <div>
                            <h4 className="font-semibold mb-2">Credential ID:</h4>
                            <p className="font-mono text-sm">{certificate.credentialId}</p>
                          </div> */}
                          <div>
                            <h4 className="font-semibold mb-2">Level:</h4>
                            <Badge className={getLevelColor(certificate.level)}>
                              {certificate.level}
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Description:</h4>
                          <p className="text-muted-foreground">{certificate.description}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Skills Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {certificate.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {/* <Button asChild className="w-full">
                          <a href={certificate.verificationLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Verify Certificate
                          </a>
                        </Button> */}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {certificate.title}
                  </h3>
                  <p className="text-primary font-semibold">{certificate.issuer}</p>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{certificate.issueDate}</span>
                  </div>
                  <Badge variant="outline" className="bg-accent/50">
                    {certificate.category}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {certificate.description}
                </p>

                <div className="flex space-x-2">
                  {/* <Button asChild size="sm" className="flex-1">
                    <a href={certificate.verificationLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1" />
                      Verify
                    </a>
                  </Button> */}
                  <Button variant="outline" size="sm">
                    <Download size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certificate Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <Card className="p-6 hover-lift animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">{certificates.length}</div>
            <div className="text-muted-foreground">Total Certificates</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">{categories.length - 1}</div>
            <div className="text-muted-foreground">Categories</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">2025</div>
            <div className="text-muted-foreground">Latest Certification</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Verified Credentials</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
