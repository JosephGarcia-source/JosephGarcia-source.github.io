
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Brain, Smartphone } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered Resume Matching System",
      description: "Built an intelligent resume matching tool using spaCy, TF-IDF, and Word2Vec algorithms to automatically match candidates with job requirements, achieving 40% accuracy improvement in candidate selection.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["Python", "spaCy", "TensorFlow", "NLP", "Machine Learning"],
      category: "AI/ML",
      icon: Brain,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Developed ML models for predictive analytics with real-time dashboard visualization, integrating expert knowledge to quantify decision quality and improve business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "AWS"],
      category: "Full-Stack",
      icon: Database,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "NLP Content Generation Tool",
      description: "Designed and implemented NLP algorithms for automated content generation, boosting production efficiency by 30% using advanced transformer models and natural language processing.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      technologies: ["Python", "Hugging Face", "Transformers", "PyTorch", "FastAPI"],
      category: "NLP",
      icon: Code,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Mobile AI Assistant App",
      description: "Built a cross-platform mobile application with integrated AI features for task automation and intelligent scheduling, reducing scheduling conflicts by 35%.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      technologies: ["Flutter", "Dart", "Firebase", "Python", "LSTM"],
      category: "Mobile",
      icon: Smartphone,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Computer Vision Quality Control",
      description: "Implemented computer vision algorithms for automated quality control in manufacturing, using deep learning models to detect defects and improve production efficiency.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Docker"],
      category: "Computer Vision",
      icon: Brain,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Real-time Data Processing Pipeline",
      description: "Architected and deployed scalable data processing pipeline with cloud infrastructure, optimizing model performance through hyperparameter tuning and automated deployment.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      technologies: ["Python", "Apache Kafka", "AWS", "Docker", "Kubernetes"],
      category: "MLOps",
      icon: Database,
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Portfolio</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore my latest projects showcasing expertise in AI/ML, full-stack development, and innovative solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    <project.icon className="w-3 h-3 mr-1" />
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
