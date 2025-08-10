import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Smartphone, 
  Camera, 
  Clock, 
  Shield, 
  Wifi,
  WifiOff
} from "lucide-react";

const KYCMethods = () => {
  const methods = [
    {
      id: "digilocker",
      title: "Digilocker KYC",
      description: "Instant verification using government's digital locker",
      icon: Shield,
      duration: "30 seconds",
      offline: false,
      dataUsage: "Very Low",
      features: ["Instant verification", "Government verified", "Secure"],
      recommended: true,
      color: "success"
    },
    {
      id: "document",
      title: "Document Upload",
      description: "Upload Aadhaar, PAN, Driving License, or Voter ID",
      icon: FileText,
      duration: "2-3 minutes",
      offline: true,
      dataUsage: "Low",
      features: ["Supports all major IDs", "Works offline", "AI-powered OCR"],
      recommended: false,
      color: "primary"
    },
    {
      id: "face",
      title: "Face Authentication",
      description: "Secure liveness and face matching verification",
      icon: Camera,
      duration: "1 minute",
      offline: true,
      dataUsage: "Medium",
      features: ["Liveness detection", "High security", "Quick process"],
      recommended: false,
      color: "accent"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Choose Your Verification Method
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We support multiple verification methods designed for different connectivity scenarios
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {methods.map((method) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={method.id} 
                className={`relative transition-all duration-300 hover:shadow-medium hover:scale-105 cursor-pointer ${
                  method.recommended ? 'ring-2 ring-success border-success' : ''
                }`}
              >
                {method.recommended && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-success text-success-foreground">
                    Recommended
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-${method.color} flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{method.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {method.offline ? (
                        <WifiOff className="h-4 w-4 text-success" />
                      ) : (
                        <Wifi className="h-4 w-4 text-warning" />
                      )}
                      <span>{method.offline ? 'Offline' : 'Online'}</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <strong>Data Usage:</strong> {method.dataUsage}
                  </div>

                  <div className="space-y-2">
                    {method.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="kyc" 
                    className="w-full mt-6"
                    size="lg"
                  >
                    Select Method
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KYCMethods;