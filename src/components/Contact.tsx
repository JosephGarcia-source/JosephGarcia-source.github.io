
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations in AI/ML, full-stack development, and mobile applications. 
              Let's connect and explore how we can create something amazing together.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">josephgarcia@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">github.com/josephgarcia-source</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Manila, Metro Manila, Philippines</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project inquiry" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message"
                  placeholder="Tell me about your project..."
                  className="w-full min-h-[120px] px-3 py-2 border border-input rounded-md resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
