"use client"

import * as React from "react"
import { Calendar, MoreHorizontal, Tags, Trash, User } from "lucide-react"
import Link from "next/link";

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const labels = [
    "----",
    "----",
    "----"
]

export function Category() {
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
                <span className="text-muted-foreground">---Category Name---</span>
            </p>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                + Add a Part
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Search Parts"
                                        autoFocus={true}
                                    />
                                    <CommandList>
                                        <CommandEmpty>No label found.</CommandEmpty>
                                        <CommandGroup>
                                            {labels.map((label) => (
                                                <CommandItem
                                                    key={label}
                                                    value={label}
                                                    onSelect={(value) => {
                                                        setLabel(value)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    {label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger onClick={handleMarkAsComplete}>
                                <Tags className="mr-2 h-4 w-4" />
                                Mark as Complete
                            </DropdownMenuSubTrigger>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
