"use client";

import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { CheckCircle, CookingPot, Truck, PackageCheck } from "lucide-react";

const steps = [
  { label: "Order Confirmed", icon: <CheckCircle className="h-5 w-5 text-green-600" /> },
  { label: "Preparing", icon: <CookingPot className="h-5 w-5 text-yellow-500" /> },
  { label: "Out for Delivery", icon: <Truck className="h-5 w-5 text-blue-500" /> },
  { label: "Delivered", icon: <PackageCheck className="h-5 w-5 text-purple-600" /> },
];

export default function OrderStatusTimeline() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 25 : 100));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const currentStep = Math.floor(progress / 25);

  return (
    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Order Status</h2>
      <p className="text-muted-foreground text-sm">Track your order as it moves through each stage</p>

      <Progress value={progress} className="h-4" />

      <div className="flex justify-between mt-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-xs">
            {step.icon}
            <span className={index <= currentStep ? "font-semibold" : "text-muted-foreground"}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
