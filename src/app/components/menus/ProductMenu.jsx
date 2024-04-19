'use client'

import * as React from "react"
import deleteProduct from "@/app/actions/item/deleteProduct"
import { EditProductForm } from "../forms/EditProductForm"
import { MoreHorizontal, Tags, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import updateProductMark from "@/app/actions/item/updateProductMark"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

export function ProductMenu({ productID, partID, categoryID, projectID }) {
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
                <Button variant="horizontal" size="sm" className="bg-transparent hover:bg-transparent hover:text-white">
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] bg-card">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            Edit
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <EditProductForm productID={productID} />
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuItem onClick={() => { updateProductMark(productID, partID, categoryID, projectID, "selected") }}>
                        Move to Cart
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { updateProductMark(productID, partID, categoryID, projectID, "bought") }}>
                        Mark As Bought
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { updateProductMark(productID, partID, categoryID, projectID, "none") }}>
                        Clear Mark
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => { deleteProduct(productID, partID, categoryID, projectID) }} className="text-red-600">
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
