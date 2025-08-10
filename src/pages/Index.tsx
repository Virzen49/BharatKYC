import KYCHeader from "@/components/KYCHeader";
import HeroSection from "@/components/HeroSection";
import KYCMethods from "@/components/KYCMethods";
import InnovativeFeatures from "@/components/InnovativeFeatures";
import PrioritizationMatrix from "@/components/PrioritizationMatrix";
import TechnicalArchitecture from "@/components/TechnicalArchitecture";
import SuccessMetrics from "@/components/SuccessMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <KYCHeader />
      <HeroSection />
      <KYCMethods />
      <InnovativeFeatures />
      <PrioritizationMatrix />
      <TechnicalArchitecture />
      <SuccessMetrics />
    </div>
  );
};

export default Index;