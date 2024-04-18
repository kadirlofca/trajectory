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
      className="w-[350px] space-y-2"
    >
      <CollapsibleTrigger as="div" className="flex items-center justify-between space-x-4 px-4">
        <h2>{title}</h2>
        <Button
          variant="ghost"
          className="text-white"
          size="sm"
        >
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-[350px] space-y-2">
        <div>{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}
