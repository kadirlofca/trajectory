'use client'

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CategoryCollapse({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed((prevCollapsed) => !prevCollapsed)}
        >
          {collapsed ? <ChevronDown /> : <ChevronUp />}
        </Button>
      </div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}
