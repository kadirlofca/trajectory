'use client'

import * as React from "react"
import PocketBase from "pocketbase";
import { MoreHorizontal } from "lucide-react"
import Link from "next/link";
import { DropdownMenuSection } from "./DropDown"

export function Category({ data }) {
    const [label, setLabel] = React.useState("category")
    const [open, setOpen] = React.useState(false)
    const [isCompleted, setIsCompleted] = React.useState(false);

    const handleMarkAsComplete = () => {
        setIsCompleted(true);
        setOpen(false);
    }

    return (
        <div className={`flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center ${isCompleted ? 'bg-green-200' : ''}`}>
            <p className="text-sm font-medium leading-none">
                <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                    {label}
                </span>
                <span className="text-muted-foreground">{data.categoryName}</span>
            </p>
            <DropdownMenuSection
                open={open}
                setOpen={setOpen}
                setLabel={setLabel}
                handleMarkAsComplete={handleMarkAsComplete}
            />
        </div>
    )
}
