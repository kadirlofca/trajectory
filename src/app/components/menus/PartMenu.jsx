'use client'

import * as React from "react"
import deleteCategory from "../../actions/deleteCategory"
import { MoreHorizontal, Tags, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { AddProductForm } from "../forms/AddProductForm"

const labels = [
    "----",
    "----",
    "----"
]

export function PartMenu({ partID }) {
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
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            + Add a Product
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="p-0">
                            <AddProductForm partID={partID} />
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
