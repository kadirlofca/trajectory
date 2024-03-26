'use client'

import * as React from "react"
import deleteCategory from "../actions/deleteCategory"
import { MoreHorizontal, Tags, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

const labels = [
    "----",
    "----",
    "----"
]

export function DropdownMenuSection({ data }) {
    const [label, setLabel] = React.useState("category")
    const [open, setOpen] = React.useState(false)
    const [isCompleted, setIsCompleted] = React.useState(false);

    const handleMarkAsComplete = () => {
        setIsCompleted(true);
        setOpen(false);
    }

    return (
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
                    <DropdownMenuItem onClick={() => { console.log("hello") }} className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        <button onClick={() => { deleteProject(projectData) }}><Button variant="outline">Delete</Button></button>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
