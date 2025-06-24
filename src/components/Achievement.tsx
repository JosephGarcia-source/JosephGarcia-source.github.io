
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target, TrendingUp } from "lucide-react";

export const Achievement = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "ML Model Accuracy Enhancement",
      description: "Developed effective ML models that integrate expert knowledge and intuition to quantify decision quality",
      metric: "35% Improvement",
      category: "Machine Learning"
    },
    {
      icon: TrendingUp,
      title: "Client Engagement Growth",
      description: "Led development of AI-driven solutions including ML models for predictive analytics and NLP algorithms",
      metric: "20% Increase",
      category: "AI Development"
    },
    {
      icon: Award,
      title: "Performance Optimization",
      description: "Optimized model performance through hyperparameter tuning, model fine-tuning, and cloud deployment",
      metric: "25% Efficiency Gain",
      category: "MLOps"
    },
    {
      icon: Target,
      title: "Decision Accuracy Improvement",
      description: "Leveraged Hugging Face NLP models with Reinforcement Learning Transformer for optimal action prediction",
      metric: "15% Accuracy Boost",
      category: "NLP & RL"
    },
    {
      icon: Trophy,
      title: "Content Production Enhancement",
      description: "Designed NLP algorithms for automated content generation tools, boosting production efficiency",
      metric: "30% Efficiency",
      category: "Natural Language Processing"
    },
    {
      icon: TrendingUp,
      title: "Workflow Optimization",
      description: "Led team efforts to optimize workflows, automate processes, and scale AI adoption",
      metric: "40% Improvement",
      category: "Process Optimization"
    },
    {
      icon: Award,
      title: "Resume Matching Accuracy",
      description: "Built AI-powered resume matching tool using spaCy, TF-IDF, and Word2Vec for candidate selection",
      metric: "40% Accuracy",
      category: "AI Recruitment"
    },
    {
      icon: Target,
      title: "Scheduling Conflict Reduction",
      description: "Engineered hybrid architecture with LSTM solvers, improving resource utilization efficiency",
      metric: "35% Reduction",
      category: "System Architecture"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <achievement.icon className="w-6 h-6 text-blue-600" />
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="bg-blue-50 px-3 py-2 rounded-lg">
                  <span className="text-blue-600 font-semibold text-lg">
                    {achievement.metric}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
