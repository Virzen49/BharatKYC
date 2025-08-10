import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Target,
  BarChart3,
  Shield,
  Heart
} from "lucide-react";

const SuccessMetrics = () => {
  const kpis = [
    {
      category: "User Experience",
      icon: Heart,
      color: "success",
      metrics: [
        { name: "Completion Rate", target: "85%", current: "78%", progress: 78 },
        { name: "First-Attempt Success", target: "90%", current: "85%", progress: 85 },
        { name: "User Satisfaction (NPS)", target: "70+", current: "68", progress: 68 },
        { name: "Support Tickets per 1000", target: "<5", current: "7", progress: 60 }
      ]
    },
    {
      category: "Performance",
      icon: TrendingUp,
      color: "primary",
      metrics: [
        { name: "Average Completion Time", target: "<5 min", current: "6.2 min", progress: 75 },
        { name: "App Load Time", target: "<3 sec", current: "2.8 sec", progress: 90 },
        { name: "Offline Success Rate", target: "95%", current: "92%", progress: 92 },
        { name: "Data Usage per Session", target: "<2MB", current: "1.8MB", progress: 85 }
      ]
    },
    {
      category: "Business Impact",
      icon: Target,
      color: "accent",
      metrics: [
        { name: "Monthly Active Users", target: "100K", current: "87K", progress: 87 },
        { name: "Rural User Adoption", target: "60%", current: "55%", progress: 55 },
        { name: "SDK Integration Rate", target: "80%", current: "72%", progress: 72 },
        { name: "Cost per Verification", target: "₹12", current: "₹14", progress: 70 }
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      color: "warning",
      metrics: [
        { name: "Security Incidents", target: "0", current: "0", progress: 100 },
        { name: "Data Breach Rate", target: "0%", current: "0%", progress: 100 },
        { name: "Compliance Score", target: "100%", current: "98%", progress: 98 },
        { name: "Fraud Detection Rate", target: "99.9%", current: "99.7%", progress: 99.7 }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "success": return "text-success";
      case "primary": return "text-primary";
      case "accent": return "text-accent";
      case "warning": return "text-warning";
      default: return "text-muted-foreground";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return "bg-success";
    if (progress >= 75) return "bg-primary";
    if (progress >= 60) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Success Metrics & KPIs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive measurement framework for product success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {kpis.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-gradient-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <IconComponent className={`h-5 w-5 ${getColorClass(category.color)}`} />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{metric.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {metric.current}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <Progress 
                          value={metric.progress} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Target: {metric.target}</span>
                          <span>{metric.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Measurement Strategy */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-primary" />
                Measurement Strategy
              </CardTitle>
              <CardDescription>How we track and improve user experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Analytics Framework</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Event-driven analytics with privacy compliance</li>
                  <li>• A/B testing for feature optimization</li>
                  <li>• Cohort analysis for user retention</li>
                  <li>• Funnel analysis for drop-off identification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Feedback Loops</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Post-completion satisfaction surveys</li>
                  <li>• Voice of customer interviews</li>
                  <li>• Support ticket sentiment analysis</li>
                  <li>• Partner feedback integration</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Success Indicators
              </CardTitle>
              <CardDescription>Key signals of product-market fit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Leading Indicators</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SDK adoption rate by new partners</li>
                  <li>• User onboarding completion rate</li>
                  <li>• Feature usage depth and frequency</li>
                  <li>• Customer acquisition cost trends</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Lagging Indicators</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Monthly recurring revenue growth</li>
                  <li>• Customer lifetime value</li>
                  <li>• Market share in rural segments</li>
                  <li>• Regulatory compliance scores</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Thresholds */}
        <Card className="mt-8 bg-gradient-card">
          <CardHeader>
            <CardTitle>Success Thresholds & Action Triggers</CardTitle>
            <CardDescription>When to celebrate, when to pivot</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                <h4 className="font-semibold text-success mb-3">Green Zone (Success)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Completion rate {'>'}85%</li>
                  <li>• NPS score {'>'}70</li>
                  <li>• MAU growth {'>'}20% MoM</li>
                  <li>• Zero security incidents</li>
                </ul>
              </div>
              <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                <h4 className="font-semibold text-warning mb-3">Yellow Zone (Monitor)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Completion rate 70-85%</li>
                  <li>• NPS score 50-70</li>
                  <li>• MAU growth 10-20% MoM</li>
                  <li>• Minor compliance issues</li>
                </ul>
              </div>
              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-3">Red Zone (Action Required)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Completion rate {'<'}70%</li>
                  <li>• NPS score {'<'}50</li>
                  <li>• MAU growth {'<'}10% MoM</li>
                  <li>• Security or compliance breach</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SuccessMetrics;