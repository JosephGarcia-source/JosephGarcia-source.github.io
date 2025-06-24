
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Joseph Garcia
          </h1>
          <h2 className="text-xl lg:text-2xl text-blue-600 mb-6">
            Senior AI/ML Engineer | Full-Stack & Mobile Developer
          </h2>
          <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 mb-8">
            <MapPin className="w-4 h-4" />
            <span>Manila, Metro Manila, Philippines</span>
          </div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Innovative AI/ML Engineer with 8+ years of expertise in artificial intelligence, 
            machine learning, full stack, and mobile development. Specializing in deep learning, 
            natural language processing, and computer vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>
          <div className="flex gap-4 justify-center lg:justify-start mt-6">
            <Button variant="ghost" size="icon">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="/lovable-uploads/a1226a7e-6335-4a97-80d6-6adf828cf1f3.png" 
                alt="Joseph Garcia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
              Available for hire
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
