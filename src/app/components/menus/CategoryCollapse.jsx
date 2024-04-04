// CategoryCollapse.jsx
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CategoryCollapse({ title, children }) {
  const [collapsed, setCollapsed] = React.useState(false);

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
      {collapsed ? null : children}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default CategoryCollapse;
