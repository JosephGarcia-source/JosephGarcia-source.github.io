
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Professional Summary</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Innovative AI/ML Engineer with 8+ years of expertise in artificial intelligence, 
                  machine learning, full stack, and mobile development. Specializing in deep learning, 
                  natural language processing, and computer vision, integrating cutting-edge AI solutions 
                  into scalable applications.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Skilled in several programming languages and frameworks including TensorFlow, PyTorch, 
                  React, Next.js, Flutter, with experience in cloud platforms like AWS, Azure and Google Cloud.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">8+ Years Experience</Badge>
                  <Badge variant="secondary">AI/ML Expert</Badge>
                  <Badge variant="secondary">Full-Stack Developer</Badge>
                  <Badge variant="secondary">Cloud Platforms</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold text-lg mb-3">Specializations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Deep Learning & Neural Networks</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Machine Learning Operations (MLOps)</li>
                  <li>• Full-Stack Web Development</li>
                  <li>• Mobile Application Development</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold text-lg mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enhanced decision accuracy by 35% using ML models</li>
                  <li>• Increased client engagement by 20% with NLP algorithms</li>
                  <li>• Improved model performance efficiency by 25%</li>
                  <li>• Led development of scalable AI solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
