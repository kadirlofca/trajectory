"use client"

import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleDemo() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="ml-10"
        >
            <div className="flex items-center justify-between ml-10 space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    More Products
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 ml-10 py-3 font-mono text-sm">
                -----
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 ml-10 py-3 font-mono text-sm">
                    -----
                </div>
                <div className="rounded-md border px-4 ml-10 py-3 font-mono text-sm">
                    -----
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}
