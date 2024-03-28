"use client"

import * as React from "react"
import { ProductMenu } from "../menus/ProductMenu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function Product({ productData }) {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md ml-10 border px-4 py-3 sm:flex-row sm:items-center">
            <Popover>
                <p className="text-sm font-medium leading-none">
                    <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                        Product
                    </span>
                    <PopoverTrigger>
                        <span className="text-muted-foreground">{productData.title}</span>
                    </PopoverTrigger>
                </p>
                <PopoverContent align="end" className="w-[450px]">
                    <div className="p-4">
                        <h2><strong>{productData.title}</strong></h2>
                        <p>Budget: ${productData.budget}</p>
                        <p>Description: {productData.text}</p>
                    </div>
                </PopoverContent>
            </Popover>
            <ProductMenu productID={productData.id} />
        </div>
    )
}
