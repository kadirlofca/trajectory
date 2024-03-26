"use client"

import * as React from "react"
import PocketBase from 'pocketbase';
import { Calendar, MoreHorizontal, Tags, Trash, User } from "lucide-react"
import Link from "next/link"
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
import { Input } from "@/components/ui/input"
import { CardWithForm, CardWithForm_HowTo } from "./HowToInput"
import { CardWithForm_Product } from "./AddingProduct"
import { Product } from "./Product";

const labels = [
    "----",
    "----",
    "----"
]

export function Part({ partID }) {
    const [label, setLabel] = React.useState("part")
    const [open, setOpen] = React.useState(false)



    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md ml-5 border px-4 py-3 sm:flex-row sm:items-center">
            <p className="text-sm font-medium leading-none">
                <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                    {label}
                </span>
                <span className="text-muted-foreground">---Part Name---</span>
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
                        <DropdownMenuSeparator />
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                + Add a Product
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="p-0">
                                <CardWithForm_Product />
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                + Add a How-To
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="p-0">
                                <CardWithForm_HowTo />
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <Tags className="mr-2 h-4 w-4" />
                                Mark as Complete
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Filter label..."
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
