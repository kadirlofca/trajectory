'use client'

import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

export function CategoryCollapse({ title, children }) {
  const [isOpen, setIsOpen] = React.useState(true);


  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full"
    >
      <CollapsibleTrigger as="div" className="flex justify-between items-center">
        <Button
          variant="ghost"
          className="text-white"
          size="sm"
        >
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
