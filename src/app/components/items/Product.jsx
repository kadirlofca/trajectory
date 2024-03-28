"use client"

import * as React from "react"
import { ProductMenu } from "../menus/ProductMenu"

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
            <ProductMenu productID={productData.id} />
        </div>
    )
}
