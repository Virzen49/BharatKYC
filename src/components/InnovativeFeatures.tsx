import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageCircle, 
  Volume2, 
  Languages,
  Lightbulb,
  Sparkles
} from "lucide-react";

const InnovativeFeatures = () => {
  const features = [
    {
      title: "AI-Powered Voice Assistant",
      description: "Voice guidance in local languages using LLM technology. Helps users navigate the KYC process step-by-step with natural conversation.",
      icon: MessageCircle,
      techDetails: [
        "Natural Language Processing in 12+ Indian languages",
        "Real-time voice commands and responses",
        "Context-aware help and troubleshooting",
        "Offline speech recognition for basic commands"
      ],
      impact: "Reduces completion time by 60% for low-literacy users",
      innovation: "Multi-modal LLM"
    },
    {
      title: "Smart Document Guidance",
      description: "AI-driven real-time feedback for document capture. Computer vision guides users to position documents correctly for optimal scanning.",
      icon: Brain,
      techDetails: [
        "Real-time document detection and alignment",
        "Quality assessment before capture",
        "Auto-crop and enhancement using AI",
        "Multi-language OCR with error correction"
      ],
      impact: "95% first-attempt success rate for document capture",
      innovation: "Edge AI + LLM"
    },
    {
      title: "Contextual Trust Building",
      description: "LLM-powered personalized explanations about data usage, security, and verification process based on user's literacy level and concerns.",
      icon: Lightbulb,
      techDetails: [
        "Adaptive explanation complexity",
        "Visual storytelling for security concepts",
        "Regional metaphors and examples",
        "Interactive Q&A with security bot"
      ],
      impact: "40% increase in verification completion rates",
      innovation: "Behavioral LLM"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <Badge variant="outline" className="text-primary border-primary">
              LLM-Powered Innovation
            </Badge>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trust-Building Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced AI features designed to make KYC accessible and trustworthy for rural users
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.innovation}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="font-medium text-success">Impact</span>
                    </div>
                    <p className="text-sm text-foreground">{feature.impact}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Technical Implementation:</h4>
                    <ul className="space-y-2">
                      {feature.techDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InnovativeFeatures;