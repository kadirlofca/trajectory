"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

export function AddCategoryButton() {
    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
            <p className="text-sm font-medium leading-none">
                <button onClick={() => { }}>Add Category +</button>
            </p>
        </div>
    )
}
