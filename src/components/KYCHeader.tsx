import { Shield, Users } from "lucide-react";

const KYCHeader = () => {
  return (
    <header className="bg-gradient-card shadow-soft border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Bharat KYC</h1>
              <p className="text-sm text-muted-foreground">Digital Identity Verification</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Rural-First Design</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default KYCHeader;