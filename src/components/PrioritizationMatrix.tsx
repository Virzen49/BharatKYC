import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PrioritizationMatrix = () => {
  const features = [
    // High Impact, Low Effort (Quick Wins)
    { name: "Digilocker Integration", impact: 9, effort: 2, category: "Quick Win", priority: "P0" },
    { name: "Offline Document Storage", impact: 8, effort: 3, category: "Quick Win", priority: "P0" },
    { name: "Large Button UI", impact: 7, effort: 2, category: "Quick Win", priority: "P0" },
    { name: "Basic Voice Commands", impact: 6, effort: 3, category: "Quick Win", priority: "P1" },
    
    // High Impact, High Effort (Major Projects)
    { name: "Voice Assistant (Multi-lang)", impact: 9, effort: 8, category: "Major Project", priority: "P1" },
    { name: "Smart Document Guidance", impact: 8, effort: 7, category: "Major Project", priority: "P1" },
    { name: "Edge AI Processing", impact: 7, effort: 9, category: "Major Project", priority: "P2" },
    { name: "Contextual Trust Building", impact: 8, effort: 6, category: "Major Project", priority: "P2" },
    
    // Low Impact, Low Effort (Fill-ins)
    { name: "Dark Mode", impact: 3, effort: 2, category: "Fill-in", priority: "P3" },
    { name: "Animation Polish", impact: 4, effort: 3, category: "Fill-in", priority: "P3" },
    { name: "Logo Customization", impact: 2, effort: 2, category: "Fill-in", priority: "P3" },
    
    // Low Impact, High Effort (Avoid)
    { name: "Blockchain Integration", impact: 3, effort: 9, category: "Avoid", priority: "P4" },
    { name: "Advanced Analytics", impact: 4, effort: 8, category: "Avoid", priority: "P4" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Quick Win": return "bg-success text-success-foreground";
      case "Major Project": return "bg-primary text-primary-foreground";
      case "Fill-in": return "bg-warning text-warning-foreground";
      case "Avoid": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "P0": return "ring-2 ring-success border-success";
      case "P1": return "ring-2 ring-primary border-primary";
      case "P2": return "ring-2 ring-warning border-warning";
      case "P3": return "ring-1 ring-muted-foreground border-muted";
      case "P4": return "ring-1 ring-destructive border-destructive";
      default: return "";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Feature Prioritization Matrix
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Impact vs Effort analysis for strategic feature development
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                Quick Wins
              </CardTitle>
              <CardDescription>High Impact, Low Effort</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {features.filter(f => f.category === "Quick Win").map((feature, idx) => (
                <div key={idx} className={`p-3 rounded-lg bg-card border ${getPriorityColor(feature.priority)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{feature.name}</h4>
                    <Badge variant="outline" className="text-xs">{feature.priority}</Badge>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Impact: {feature.impact}/10</span>
                    <span>Effort: {feature.effort}/10</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                Major Projects
              </CardTitle>
              <CardDescription>High Impact, High Effort</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {features.filter(f => f.category === "Major Project").map((feature, idx) => (
                <div key={idx} className={`p-3 rounded-lg bg-card border ${getPriorityColor(feature.priority)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{feature.name}</h4>
                    <Badge variant="outline" className="text-xs">{feature.priority}</Badge>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Impact: {feature.impact}/10</span>
                    <span>Effort: {feature.effort}/10</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                Fill-ins
              </CardTitle>
              <CardDescription>Low Impact, Low Effort</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {features.filter(f => f.category === "Fill-in").map((feature, idx) => (
                <div key={idx} className={`p-3 rounded-lg bg-card border ${getPriorityColor(feature.priority)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{feature.name}</h4>
                    <Badge variant="outline" className="text-xs">{feature.priority}</Badge>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Impact: {feature.impact}/10</span>
                    <span>Effort: {feature.effort}/10</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                Avoid
              </CardTitle>
              <CardDescription>Low Impact, High Effort</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {features.filter(f => f.category === "Avoid").map((feature, idx) => (
                <div key={idx} className={`p-3 rounded-lg bg-card border ${getPriorityColor(feature.priority)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{feature.name}</h4>
                    <Badge variant="outline" className="text-xs">{feature.priority}</Badge>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Impact: {feature.impact}/10</span>
                    <span>Effort: {feature.effort}/10</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle>Development Roadmap</CardTitle>
            <CardDescription>Recommended implementation sequence</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-success mb-3">Sprint 1-2 (P0)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Digilocker Integration</li>
                  <li>• Offline Document Storage</li>
                  <li>• Large Button UI</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Sprint 3-4 (P1)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Basic Voice Commands</li>
                  <li>• Voice Assistant (Multi-lang)</li>
                  <li>• Smart Document Guidance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-warning mb-3">Sprint 5-6 (P2)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Edge AI Processing</li>
                  <li>• Contextual Trust Building</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-muted-foreground mb-3">Future (P3+)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Polish & Fill-ins</li>
                  <li>• Advanced Features</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PrioritizationMatrix;