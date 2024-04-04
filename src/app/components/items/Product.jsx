"use client"
import * as React from "react"
import Link from "next/link"
import { ProductMenu } from "../menus/ProductMenu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function Product({ productData }) {
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
        // Regular expression to match URLs
        const urlRegex = /(https?:\/\/[^\s]+)/g;

        // Split the description text into parts divided by URLs
        const parts = productData.text.split(urlRegex);

        // Iterate through the parts and render them
        return (
            <React.Fragment>
                {parts.map((part, index) => {
                    // Check if the part is a URL
                    if (urlRegex.test(part)) {
                        // Render the URL as a clickable link
                        return (
                            <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                                {part}
                            </a>
                        );
                    } else {
                        // Render normal text
                        return <React.Fragment key={index}>{part}</React.Fragment>;
                    }
                })}
            </React.Fragment>
        );
    };

    return (
        <div className={(productData.mark == "none" ? "bg-gray-300" : productData.mark == "selected" ? "bg-blue-300" : "bg-green-300") + " flex w-full flex-col items-start justify-between rounded-md ml-10 border px-4 py-3 sm:flex-row sm:items-center"}>
            <Popover>
                <p className="text-sm font-medium leading-none">
                    <span className="content-center mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                        Product
                    </span>
                </p>
                <p className="text-sm font-medium leading-none">
                    <PopoverTrigger>
                        <span className="text-black">{productData.title} -- Price: {formattedCurrency(productData.budget)}</span>
                        <br />
                        <span className="text-black">Description: {renderDescription()}</span>
                    </PopoverTrigger>
                </p>
                <PopoverContent align="end" className="w-[450px]">
                    <div className="p-4">
                        <h2><strong>{productData.title}</strong></h2>
                        <p><span className="text-decoration-line: underline">Price: {formattedCurrency(productData.budget)}</span></p>
                        <p><span className="text-decoration-line: underline">Description:</span> {renderDescription()}</p>
                    </div>
                </PopoverContent>
            </Popover>
            <ProductMenu productID={productData.id} />
        </div>
    )
}