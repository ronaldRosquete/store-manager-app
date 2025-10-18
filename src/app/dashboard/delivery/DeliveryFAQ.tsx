"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function DeliveryFAQ() {
  return (
    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
      <p className="text-muted-foreground text-sm">
        Find answers to common questions about our delivery service.
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="cost">
          <AccordionTrigger>How much does delivery cost?</AccordionTrigger>
          <AccordionContent>
            Standard delivery starts at $5. Express delivery may cost more depending on your location.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="zones">
          <AccordionTrigger>Which areas do you deliver to?</AccordionTrigger>
          <AccordionContent>
            We offer nationwide shipping across all 50 U.S. states. Express delivery is available in select cities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="payment">
          <AccordionTrigger>Can I pay on delivery?</AccordionTrigger>
          <AccordionContent>
            Yes, cash-on-delivery is available for in-store pickup and local deliveries. Online payment is required for nationwide shipping.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
