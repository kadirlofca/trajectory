'use client'
// CategoryMenu.jsx

import * as React from "react";
import deleteCategory from "../../actions/item/deleteCategory";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Command, CommandInput, CommandList, CommandGroup } from "@/components/ui/command";
import addPart from "../../actions/item/addPart";

export function CategoryMenu({ projectID, categoryID, partData, completed, onMarkAsComplete }) {
    const handlePartClick = (partId) => {
        addPart(partId, categoryID, projectID);
    }

    return (
        <DropdownMenu className="text-black bg-card">
            <DropdownMenuTrigger asChild>
                <Button variant="horizontal" size="sm" className="bg-transparent hover:bg-transparent hover:text-white">
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] bg-card">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            + Add a Part
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="p-0">
                            <Command>
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
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => { deleteCategory(categoryID, projectID) }} className="text-red-600">
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
