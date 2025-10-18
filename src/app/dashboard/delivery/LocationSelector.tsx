"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type StateKey = keyof typeof cities;

const states: { label: string; value: StateKey }[] = [
  { label: "New York", value: "new_york" },
  { label: "California", value: "california" },
  { label: "Texas", value: "texas" },
  { label: "Florida", value: "florida" },
];

const cities = {
  new_york: [
    { label: "Manhattan", value: "manhattan" },
    { label: "Brooklyn", value: "brooklyn" },
    { label: "Queens", value: "queens" },
  ],
  california: [
    { label: "Los Angeles", value: "los_angeles" },
    { label: "San Francisco", value: "san_francisco" },
    { label: "San Diego", value: "san_diego" },
  ],
  texas: [
    { label: "Houston", value: "houston" },
    { label: "Dallas", value: "dallas" },
    { label: "Austin", value: "austin" },
  ],
  florida: [
    { label: "Miami", value: "miami" },
    { label: "Orlando", value: "orlando" },
    { label: "Tampa", value: "tampa" },
  ],
};

export default function LocationSelector() {
  const [selectedState, setSelectedState] = useState<StateKey | "">("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  return (
    <div className="space-y-4 mt-10">
      <h2 className="text-xl font-semibold">Delivery Location</h2>
      <p className="text-muted-foreground text-sm">Select your state and city to check availability</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>State</Label>
          <Select onValueChange={(value) => {
            setSelectedState(value as StateKey);
            setSelectedCity("");
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state.value} value={state.value}>
                  {state.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedState && (
          <div>
            <Label>City</Label>
            <Select onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                {cities[selectedState].map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {selectedState && selectedCity && (
        <p className="text-sm font-medium mt-4">
          Delivery available in: <strong>{cities[selectedState].find(c => c.value === selectedCity)?.label}, {states.find(s => s.value === selectedState)?.label}</strong>
        </p>
      )}
    </div>
  );
}
