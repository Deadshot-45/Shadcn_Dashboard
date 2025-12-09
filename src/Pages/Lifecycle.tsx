import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const steps = [
  { label: "Planning", status: "completed", icon: CheckCircle },
  { label: "Design", status: "in-progress", icon: Clock },
  { label: "Development", status: "pending", icon: AlertCircle },
  { label: "Testing", status: "pending", icon: AlertCircle },
  { label: "Deployment", status: "pending", icon: AlertCircle },
];

const Lifecycles = () => {
  return (
    <div className="w-full h-full p-2 md:p-4 space-y-6">
      <h1 className="text-3xl font-bold">Lifecycles</h1>

      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <Card key={idx}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{step.label}</CardTitle>
                <Icon
                  className={
                    step.status === "completed"
                      ? "text-green-600"
                      : step.status === "in-progress"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Status: {step.status}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Lifecycles;
