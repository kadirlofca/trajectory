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

    const handleMarkAsComplete = () => {
        console.log("Mark as Complete clicked"); // Debugging statement
        onMarkAsComplete(); // Call the parent function to update completion status
    }

    console.log("Completed:", completed); // Debugging statement

    return (
        <DropdownMenu className={"bg-yellow-200"}>
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
                        <DropdownMenuItem onClick={onMarkAsComplete}>
                            Mark as Complete
                        </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => { deleteCategory(categoryID) }} className="text-red-600">
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
