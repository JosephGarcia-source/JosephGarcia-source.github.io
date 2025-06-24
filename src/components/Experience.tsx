
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Developer Bazaar Tech",
      location: "Makati City, PH",
      period: "02/2022 - 11/2024",
      achievements: [
        "Developed effective ML models that integrate expert knowledge and intuition to quantify decision quality, enhancing accuracy by 35%",
        "Led the development of AI-driven solutions, including machine learning models for predictive analytics and NLP algorithms, increasing client engagement by 20%",
        "Optimized model performance through hyperparameter tuning, model fine-tuning, and deployment in cloud environments (AWS, GCP), ensuring scalability and efficiency by 25%",
        "Audited and optimized existing machine learning models providing strategic guidance on infrastructure and MLOps best practices",
        "Leveraged Hugging Face NLP models to predict the next optimal action in a sequence using a Reinforcement Learning Transformer (RLT), improving decision accuracy by 15%"
      ],
      technologies: ["Machine Learning", "NLP", "MLOps", "AWS", "GCP", "Hugging Face", "Reinforcement Learning"]
    },
    {
      title: "Senior AI Full Stack Developer",
      company: "Pageglue",
      location: "Makati City, PH",
      period: "07/2019 - 02/2022",
      achievements: [
        "Enhanced a PoC for text and image generation using GPT-3 for text and BigGAN/DALL-E for images, leveraging cloud-based AI services",
        "Designed comprehensive full-stack solutions capable of scalable processing",
        "Designed and implemented natural language processing (NLP) algorithms to enhance the agency's automated content generation tools, boosting content production efficiency by 30%",
        "Researched and developed AI/ML solutions for deployment on NVIDIA Jetson Xavier NX, optimizing performance for edge AI applications at the leading predictive analytics conference",
        "Served as a teaching and technical assistant for the Predictive Analytics for Healthcare workshop at the largest predictive analytics conference, mentoring workshop participants and lead instructors",
        "Led team efforts to optimize workflows, automate processes, and scale AI adoption, improving efficiency by 40%"
      ],
      technologies: ["GPT-3", "BigGAN", "DALL-E", "NLP", "NVIDIA Jetson", "Full-Stack Development", "Cloud Services"]
    },
    {
      title: "AI Full Stack Developer",
      company: "Technopos",
      location: "Davao City, PH",
      period: "10/2017 - 05/2019",
      achievements: [
        "Built an AI-powered resume matching tool using spaCy, TF-IDF, and Word2Vec to extract skills and rank candidates, improving selection accuracy by 40% with machine learning models",
        "Engineered a hybrid architecture integrating LSTM solvers, decreasing scheduling conflicts by 35% and improving resource utilization efficiency by 30%",
        "Improved and NLP optimization using spaCy, TF-IDF, and Word2Vec to extract skills and rank candidates, improving selection accuracy by 40% with machine learning models",
        "Constructed a machine learning system to detect voice phishing attacks by identifying tampering methods such as splicing, synthetic voices, and replay attacks, increasing detection accuracy by 40%"
      ],
      technologies: ["spaCy", "TF-IDF", "Word2Vec", "LSTM", "NLP", "Machine Learning", "Voice Processing"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed">
                      • {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
