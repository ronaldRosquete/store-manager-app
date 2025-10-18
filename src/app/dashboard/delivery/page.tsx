"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Truck, Store, Zap } from "lucide-react";
import DeliverySimulator from "./DeliverySimulator";
import OrderStatusTimeline from "./OrderStatusTimeline";
import DeliveryFAQ from "./DeliveryFAQ";  
import dynamic from "next/dynamic";

const LocationSelector = dynamic(() => import("./LocationSelector"), {
  ssr: false,
});

export default function DeliveryPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Delivery Options</h1>
      <p className="text-muted-foreground">Choose how you'd like to receive your order</p>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DeliveryCard
          icon={<Truck className="h-6 w-6" />}
          title="Home Delivery"
          description="Get your order delivered to your address within 24-48 hours"
        />
        <DeliveryCard
          icon={<Store className="h-6 w-6" />}
          title="In-Store Pickup"
          description="Pick up your order at our location for free"
        />
        <DeliveryCard
          icon={<MapPin className="h-6 w-6" />}
          title="Nationwide Shipping"
          description="Available across all 50 states"
        />
        <DeliveryCard
          icon={<Zap className="h-6 w-6" />}
          title="Express Delivery"
          description="Receive your order in less than 6 hours"
        />
      </div>
    <Separator />
      <DeliverySimulator />
    <Separator />
      <LocationSelector />
    <Separator />
      <OrderStatusTimeline />
    <Separator />
      <DeliveryFAQ />    
    </div>
  );
}

type DeliveryCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function DeliveryCard({ icon, title, description }: DeliveryCardProps) {
  return (
    <Card className="hover:shadow-md transition">
      <CardHeader className="flex items-center gap-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
