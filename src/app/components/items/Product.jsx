"use client"

import * as React from "react"
import { MoreHorizontal, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function Product({ productData }) {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md ml-10 border px-4 py-3 sm:flex-row sm:items-center">
            <p className="text-sm font-medium leading-none">
                <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                    Product
                </span>
                <span className="text-muted-foreground">${productData.budget} - {productData.title} - {productData.text}</span>
            </p>
            {/*<DropdownMenuProduct> is in DropDownProduct.jsx. It includes everything below this.*/}
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
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Select Product
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Mark As Bought
                        </DropdownMenuItem>
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
