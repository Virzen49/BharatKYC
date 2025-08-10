import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Smartphone, Wifi } from "lucide-react";
import heroImage from "@/assets/kyc-hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="py-12 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Simple KYC for
                <span className="block text-primary-glow">Bharat</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Fast, secure digital identity verification designed for rural India. 
                Works offline, supports regional languages, and requires minimal data.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Digilocker Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Offline Capability</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Face Authentication</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Low Data Usage</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex-1">
                Start KYC Process
              </Button>
              <Button variant="outline" size="xl" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="KYC Digital Verification Process" 
              className="w-full h-auto rounded-lg shadow-strong"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-card p-4 rounded-lg shadow-medium">
              <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-success" />
                <span className="text-sm font-medium text-foreground">Works Offline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;