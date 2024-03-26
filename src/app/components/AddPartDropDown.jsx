'use client'

import * as React from "react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"

const labels = [
    "----",
    "----",
    "----"
]

export function AddPartDropdown({ setLabel, setOpen }) {
    return (
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
    )
}
