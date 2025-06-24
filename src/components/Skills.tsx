
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning Algorithms",
      skills: ["Supervised Learning Algorithm", "Unsupervised Learning Algorithm", "Reinforcement Learning Algorithm", "Optimization Techniques"]
    },
    {
      title: "Deep Learning",
      skills: ["CNNs", "RNNs"]
    },
    {
      title: "Natural Language Processing (NLP)",
      skills: ["Tokenization", "Sentiment Analysis", "Word/Sentence Embeddings", "Text Classification", "Text Generation", "Conversational AI", "Speech-to-Text", "Retrieval-Augmented Generation"]
    },
    {
      title: "Computer Vision",
      skills: ["Image Classification/Segmentation", "Object Detection/Recognition", "GAN-based image synthesis"]
    },
    {
      title: "Data Science & Analytics",
      skills: ["Data Preprocessing", "Feature Engineering", "dimensionality reduction(PCA/t-SNE)", "Statistical Modeling", "Exploratory Data Analysis(EDA)"]
    },
    {
      title: "AI Frameworks and Libraries",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Hugging Face", "NLTK", "LlamaIndex", "SpaCy", "OpenCV", "YoloV8"]
    },
    {
      title: "MLOps & Model Deployment",
      skills: ["Docker", "FastAPI", "FlasQ", "TensorFlow Serving", "AWS SageMaker", "Azure ML", "GCP Vertex AI", "MLflow"]
    },
    {
      title: "Vector Databases for AI & LLMs",
      skills: ["FAISS(Facebook AI Similarity Search)", "pgvector", "Pinecone", "Weaviate"]
    },
    {
      title: "AI Model Integration | Web & Mobile App Development",
      skills: ["Large Language Models", "GPT models", "LLaMA", "Claude", "Gemini 1.5", "BERT", "T5", "Mistral 7B", "Mixtral"]
    },
    {
      title: "Image Generation Models",
      skills: ["Stable Diffusion (SD)", "DALL-E 3", "Imagen", "MidJourney", "Flux", "StyleGAN3"]
    },
    {
      title: "Text-to-Speech Models",
      skills: ["gTTS", "TTS-1/TTS-1-HD", "XTTS-v2", "Ultravox", "PlayHT", "F5-TTS", "OpenVoice"]
    },
    {
      title: "Speech-to-Text Models",
      skills: ["Whisper", "Google Cloud STT", "Wav2Vec 2.0", "DeepSpeech", "Microsoft Azure STT"]
    },
    {
      title: "Video Generation Models",
      skills: ["Runway Gen-2", "Make-A-Video", "Pika Labs AI", "Stable Video Diffusion"]
    },
    {
      title: "Web Application Development",
      skills: ["React", "Next.js", "Node.js", "Python/Flask/FastAPI", "Django", "Laravel"]
    },
    {
      title: "Mobile Application Development",
      skills: ["React Native", "Flutter", "Kotlin", "Swift", "Google Play Store", "App Store"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
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
