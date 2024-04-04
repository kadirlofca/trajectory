"use server"

import * as React from "react"
import { PartMenu } from "../menus/PartMenu"
import PocketBase from "pocketbase";
import { Product } from "./Product";
import { CategoryCollapse } from "../menus/CategoryCollapse";

export async function Part({ partData, categoryID }) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const products = await pb.collection('project_item').getList(0, 99, {
        filter: 'part="' + partData.id + '"'
    })

    const items = await Promise.all(products.items.map(async (data) => {
        return <Product productData={data} />
    }))

    return (
        <>
            <div className="flex w-full flex-col bg-gray-500 items-start justify-between rounded-md ml-5 px-4 py-3 sm:flex-row sm:items-center">
                <p className="text-sm font-medium leading-none">
                    <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                        Part
                    </span>
                    <span className="text-white">{partData.partName}</span>
                </p>
                <PartMenu partID={partData.id} />
            </div>
            <CategoryCollapse>
                {items}
            </CategoryCollapse>
        </>
    )
}
