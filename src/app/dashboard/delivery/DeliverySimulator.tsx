"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function DeliverySimulator() {
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");

  const handleSimulate = () => {
    if (!state || !address) {
      setResult("Please fill out all fields.");
      return;
    }

    // Simulated delivery logic
    const timeEstimate = state === "New York" ? "2–6 hours" : "24–48 hours";
    const costEstimate = state === "New York" ? "$10 USD" : "$25 USD";

    setResult(`Estimated time: ${timeEstimate} | Cost: ${costEstimate}`);
  };

  return (
    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Delivery Simulator</h2>
      <p className="text-muted-foreground text-sm">
        Enter your address and state to estimate delivery time and cost.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>State</Label>
          <Select onValueChange={setState}>
            <SelectTrigger>
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New York">New York</SelectItem>
              <SelectItem value="California">California</SelectItem>
              <SelectItem value="Texas">Texas</SelectItem>
              <SelectItem value="Florida">Florida</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Exact Address</Label>
          <Input
            placeholder="e.g. 123 Main St, Apt 4B"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      <Button onClick={handleSimulate}>Estimate Delivery</Button>

      {result && <p className="mt-4 text-sm font-medium">{result}</p>}
    </div>
  );
}

export default DeliverySimulator;
