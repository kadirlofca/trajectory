import * as React from "react";
import { ChevronsUpDown, MoreHorizontal, Tags, Trash } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const labels = ["----", "----", "----"];

export function CollapsibleCategory() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [label, setLabel] = React.useState("category");
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex justify-center">
            <div className="mt-4">
                <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="flex w-full flex-col items-start rounded-md border sm:flex-row sm:items-center"
                >
                    <div className="flex items-center w-full">
                        <p className="flex-grow text-sm font-medium leading-none">
                            <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                                {label}
                            </span>
                            <span className="text-muted-foreground">---Category Name---</span>
                        </p>

                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="p-0">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>

                        <DropdownMenu open={open} onOpenChange={setOpen}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <MoreHorizontal />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[200px]">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link href="/addpart">Part Page</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>+ Add a Part</DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent className="p-0">
                                            <Command>
                                                <CommandInput placeholder="Search Parts" autoFocus={true} />
                                                <CommandList>
                                                    <CommandEmpty>No label found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {labels.map((label) => (
                                                            <CommandItem
                                                                key={label}
                                                                value={label}
                                                                onSelect={(value) => {
                                                                    setLabel(value);
                                                                    setOpen(false);
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
                                        <DropdownMenuSubTrigger>
                                            <Tags className="mr-2 h-4 w-4" />
                                            Mark as Complete
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent className="p-0">
                                            <Command>
                                                <CommandInput placeholder="Filter label..." autoFocus={true} />
                                                <CommandList>
                                                    <CommandEmpty>No label found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {labels.map((label) => (
                                                            <CommandItem
                                                                key={label}
                                                                value={label}
                                                                onSelect={(value) => {
                                                                    setLabel(value);
                                                                    setOpen(false);
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
                    <CollapsibleContent>
                        <div className="rounded-md border font-mono text-sm">
                            -----
                        </div>
                        <div className="rounded-md border font-mono text-sm">
                            -----
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </div>
    );
}
