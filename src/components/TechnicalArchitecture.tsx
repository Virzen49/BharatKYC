import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Server, 
  Database, 
  Wifi, 
  Shield, 
  Cpu,
  Cloud,
  HardDrive
} from "lucide-react";

const TechnicalArchitecture = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Technical Architecture
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Optimized for low-bandwidth, offline-first, and resource-constrained environments
          </p>
        </div>

        <div className="space-y-12">
          {/* SDK Architecture */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-primary" />
                SDK Architecture & Optimization
              </CardTitle>
              <CardDescription>Lightweight SDK design for minimal app integration impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Core Module (2MB)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Authentication & Core APIs</li>
                    <li>• Basic UI Components</li>
                    <li>• Offline Storage Layer</li>
                    <li>• Network Retry Logic</li>
                  </ul>
                  <Badge variant="outline" className="text-xs">Always Loaded</Badge>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Optional Modules</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Face Detection (8MB) - Lazy loaded</li>
                    <li>• Voice Assistant (5MB) - On-demand</li>
                    <li>• Advanced OCR (6MB) - Progressive</li>
                    <li>• Language Packs (1MB each)</li>
                  </ul>
                  <Badge variant="outline" className="text-xs">Dynamic Loading</Badge>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Optimization</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tree-shaking enabled</li>
                    <li>• Modular imports only</li>
                    <li>• Code splitting by feature</li>
                    <li>• Progressive web standards</li>
                  </ul>
                  <Badge variant="outline" className="text-xs">Build-time</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processing Trade-offs */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-primary" />
                On-Device vs Server Processing
              </CardTitle>
              <CardDescription>Balanced approach for optimal performance and privacy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                    <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
                      <HardDrive className="h-4 w-4" />
                      On-Device Processing
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <strong className="text-sm">Liveness Detection:</strong>
                        <p className="text-sm text-muted-foreground">Basic movement detection using TensorFlow Lite</p>
                      </div>
                      <div>
                        <strong className="text-sm">Document OCR:</strong>
                        <p className="text-sm text-muted-foreground">Text extraction for Aadhaar/PAN numbers</p>
                      </div>
                      <div>
                        <strong className="text-sm">Image Preprocessing:</strong>
                        <p className="text-sm text-muted-foreground">Crop, rotate, enhance before upload</p>
                      </div>
                      <div>
                        <strong className="text-sm">Data Validation:</strong>
                        <p className="text-sm text-muted-foreground">Format checks, mandatory field validation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Cloud className="h-4 w-4" />
                      Server-Side Processing
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <strong className="text-sm">Face Matching:</strong>
                        <p className="text-sm text-muted-foreground">Deep learning models for accurate verification</p>
                      </div>
                      <div>
                        <strong className="text-sm">Document Verification:</strong>
                        <p className="text-sm text-muted-foreground">Government database validation</p>
                      </div>
                      <div>
                        <strong className="text-sm">Fraud Detection:</strong>
                        <p className="text-sm text-muted-foreground">Advanced ML models for security</p>
                      </div>
                      <div>
                        <strong className="text-sm">Audit Logging:</strong>
                        <p className="text-sm text-muted-foreground">Compliance and regulatory requirements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network & Retry Strategy */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Wifi className="h-6 w-6 text-primary" />
                Low Bandwidth & Retry Strategy
              </CardTitle>
              <CardDescription>Resilient networking for rural connectivity challenges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Offline-First Design</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Store all data locally with IndexedDB</li>
                    <li>• Queue operations for background sync</li>
                    <li>• Progressive sync when connection available</li>
                    <li>• Conflict resolution for simultaneous updates</li>
                    <li>• Local-first validation and feedback</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Smart Retry Logic</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Exponential backoff with jitter</li>
                    <li>• Network quality detection</li>
                    <li>• Partial upload resume capability</li>
                    <li>• Compression and optimization</li>
                    <li>• Graceful degradation of features</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-accent mb-3">Data Optimization Techniques</h4>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Image Compression:</strong>
                    <p className="text-muted-foreground">WebP format, quality adjustment based on connection</p>
                  </div>
                  <div>
                    <strong>Delta Sync:</strong>
                    <p className="text-muted-foreground">Only sync changed data, not entire payloads</p>
                  </div>
                  <div>
                    <strong>Chunked Uploads:</strong>
                    <p className="text-muted-foreground">Break large files into resumable chunks</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Architecture */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Security & Privacy Framework
              </CardTitle>
              <CardDescription>Multi-layered security for sensitive identity data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Data Protection</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• AES-256 encryption at rest</li>
                    <li>• TLS 1.3 for data in transit</li>
                    <li>• Key rotation every 90 days</li>
                    <li>• Hardware-backed keystore</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Privacy Controls</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Minimal data collection</li>
                    <li>• Purpose limitation</li>
                    <li>• User consent management</li>
                    <li>• Data retention policies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Compliance</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Digital Personal Data Protection Act</li>
                    <li>• RBI KYC guidelines</li>
                    <li>• UIDAI Aadhaar regulations</li>
                    <li>• ISO 27001 standards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;