'use client'

import * as React from "react"
import { Tags } from "lucide-react"
import { DropdownMenu, DropdownMenuSub,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"

export function MarkAsComplete({ handleMarkAsComplete }) {
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger onClick={handleMarkAsComplete}>
                <Tags className="mr-2 h-4 w-4" />
                Mark as Complete
            </DropdownMenuSubTrigger>
        </DropdownMenuSub>
    )
}
