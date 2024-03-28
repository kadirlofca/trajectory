'use client'

import * as React from "react"
import deleteCategory from "../../actions/item/deleteCategory"
import { MoreHorizontal, Tags, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import addPart from "../../actions/item/addPart"

export function CategoryMenu({ projectID, categoryID, partData }) {
    const [label, setLabel] = React.useState("category")
    const [open, setOpen] = React.useState(false)
    const [isCompleted, setIsCompleted] = React.useState(false);

    const handlePartClick = (partId) => {
        addPart(partId, categoryID, projectID);
    }

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
                                    <CommandGroup>
                                        {partData.map((data) => (
                                            <div
                                                key={data.id}
                                                onClick={() => handlePartClick(data.id)}
                                                className="cursor-pointer border-b border-gray-200 p-2 hover:bg-gray-100"
                                            >
                                                {data.name}
                                            </div>
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
                    <DropdownMenuItem onClick={() => { deleteCategory(categoryID) }} className="text-red-600">
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
