'use client'

import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

export function CategoryCollapse({ title, children }) {
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <Collapsible>
      <CollapsibleTrigger as="div" className="flex justify-between items-center">
        <h2>{title}</h2>
        <Button
          variant="ghost"
          className="text-white"
          size="sm"
          onClick={() => setCollapsed((prevCollapsed) => !prevCollapsed)}
        >
          {collapsed ? <ChevronDown /> : <ChevronUp />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div>{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}
