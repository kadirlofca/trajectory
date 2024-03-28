"use client"

import * as React from "react"
import { PartMenu } from "../menus/PartMenu"

export function Part({ partData, projectID, categoryID }) {

    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md ml-5 border px-4 py-3 sm:flex-row sm:items-center">
            <p className="text-sm font-medium leading-none">
                <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                    Part
                </span>
                <span className="text-muted-foreground">{partData.partName}</span>
            </p>
            <PartMenu partID={partData.id} />
        </div>
    )
}
