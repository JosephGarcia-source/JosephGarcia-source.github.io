
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-xl text-gray-900">Bachelor of Computer Science</h3>
                  <p className="text-blue-600 font-semibold">Mapua University</p>
                </div>
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  <span>09/2013 - 09/2017</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Manila, 1002 Metro Manila, Philippines</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Comprehensive computer science education with focus on software engineering, 
                algorithms, data structures, and emerging technologies. Built a strong foundation 
                in programming principles and problem-solving methodologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
