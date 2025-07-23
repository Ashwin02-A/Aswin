
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, TrendingUp } from 'lucide-react';

const Academics = () => {
  const academicRecords = [
    {
      id: 1,
      collegeName: "Sacred Heart College(Autonomous)",
      courseName: "Bachelor of Computer Science",
      description: "Comprehensive study of computer science fundamentals including data structures, algorithms, software engineering, database management, and computer networks. Specialized in web technologies and software development methodologies.",
      academicYear: "2020-2023",
      cgpa: "7.4",
      grade: "First Class with Distinction"
    },
    {
      id: 2,
      collegeName: "Sacred Heart College(Autonomous)",
      courseName: "PG Diploma in Cyber Security",
      description: "Completed a Cyver Security methods data encryption decryption and Data Prevention from Unauthorized access.",
      academicYear: "2024-2025",
      cgpa: "8.2",
      grade: "First Class with Distinction"
    },
    {
      id: 3,
      collegeName: "Sacred Heart College(Autonomous)",
      courseName: "Masters in Computer Application (MCA)",
      description: "Postgraduate degree in computer science that focuses on advanced theoretical and practical knowledge of computing, programming, software development, and IT management.",
      academicYear: "2023-2025",
      cgpa: "7.1",
      grade: "First Class with Distinction"
    }
  ];

  // const getGradeColor = (cgpa: string) => {
  //   const score = parseFloat(cgpa);
  //   if (score >= 9.5) return 'bg-green-100 text-green-800';
  //   if (score >= 8.5) return 'bg-blue-100 text-blue-800';
  //   if (score >= 7.5) return 'bg-yellow-100 text-yellow-800';
  //   return 'bg-gray-100 text-gray-800';
  // };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <GraduationCap className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Academic Journey</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational background and academic achievements that shaped my career in technology
          </p>
        </div>

        {/* Academic Records */}
        <div className="space-y-8">
          {academicRecords.map((record, index) => (
            <Card 
              key={record.id} 
              className="overflow-hidden hover-lift animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="grid lg:grid-cols-12 gap-6">
                  {/* Main Content */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                          {record.courseName}
                        </h2>
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {record.collegeName}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed">
                      {record.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {record.grade}
                      </Badge>
                    </div>
                  </div>

                  {/* Sidebar Info */}
                  <div className="lg:col-span-4 space-y-6">
                    {/* Academic Year */}
                    <div className="bg-accent/50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="text-primary" size={20} />
                        <span className="font-semibold text-foreground">Academic Year</span>
                      </div>
                      <p className="text-lg font-bold text-primary">{record.academicYear}</p>
                    </div>

                    {/* CGPA */}
                    <div className="bg-accent/50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <TrendingUp className="text-primary" size={20} />
                        <span className="font-semibold text-foreground">CGPA/Percentage</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl font-bold text-primary">{record.cgpa}</span>
                        {/* <Badge className={getGradeColor(record.cgpa)}>
                          {parseFloat(record.cgpa) >= 9.0 ? 'Excellent' : 
                           parseFloat(record.cgpa) >= 8.0 ? 'Very Good' : 'Good'}
                        </Badge> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="px-8 pb-6">
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(parseFloat(record.cgpa) / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <Card className="p-6 hover-lift animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Qualifications Completed</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">9.0</div>
            <div className="text-muted-foreground">Average CGPA</div>
          </Card>
          <Card className="p-6 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years of Education</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Academics;
