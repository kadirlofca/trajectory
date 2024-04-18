"use client"
import * as React from "react"
import Link from "next/link"
import { ProductMenu } from "../menus/ProductMenu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function Product({ productData, partID, categoryID, projectID }) {
    const [open, setOpen] = React.useState(false)

    // Function to format currency
    const formattedCurrency = (amount, currency = 'USD') => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    }

    // Function to render description with clickable links
    const renderDescription = () => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = productData.text.split(urlRegex);

        return (
            <React.Fragment>
                {parts.map((part, index) => {
                    if (urlRegex.test(part)) {
                        return (
                            <a key={index} href={part} rel="noopener noreferrer" className="text-blue-800 hover:underline">
                                {part}
                            </a>
                        );
                    } else {
                        return <React.Fragment key={index}>{part}</React.Fragment>;
                    }
                })}
            </React.Fragment>
        );
    };

    return (
        <div className="ml-8">
            <div className={(productData.mark == "none" ? "bg-card" : productData.mark == "selected" ? "bg-blue-200" : "bg-green-200") + " flex w-full flex-col items-start justify-between rounded-md border border-gray-300 py-3 sm:flex-row sm:items-center"}>
                <p className="text-sm font-medium leading-none">
                    <span className="content-center mr-2 ml-3 rounded-lg bg-white text-black px-2 py-1 text-xs text-primary-foreground">
                        Product
                    </span>
                </p>
                <p className="text-sm font-medium leading-none">

                    <span>{productData.title} -- Price: {formattedCurrency(productData.budget)}</span>
                    <br />
                    <span>Description: {renderDescription()}</span>

                </p>
                <ProductMenu productID={productData.id} projectID={projectID} partID={partID} categoryID={categoryID} />
            </div>
        </div>
    )
}