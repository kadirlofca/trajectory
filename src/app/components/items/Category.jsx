'use server'

import * as React from "react"
import PocketBase from "pocketbase";
import { CategoryMenu } from "../menus/CategoryMenu";
import { Part } from "./Part";
import getPart from "../../actions/utilities/getPart";
import { CategoryCollapse } from "../menus/CategoryCollapse";

export async function Category({ categoryData, projectID, completed }) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const parts = await pb.collection('project_part').getList(0, 99, {
        filter: 'category="' + categoryData.id + '"'
    })

    const items = await Promise.all(parts.items.map(async (data) => {
        data.partName = (await pb.collection('part').getOne(data.part)).name
        return <Part partData={data} categoryID={categoryData.id} projectID={projectID} />
    }))

    return (
        <>
            <div className={`flex w-full flex-col bg-gray-500 mt-4 items-start justify-between rounded-md border border-gray-300 px-4 py-3 sm:flex-row sm:items-center`}>
                <p className="text-sm font-medium leading-none">
                    <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                        Category
                    </span>
                    <span className="text-white">{categoryData.categoryName}</span>
                </p>
                <CategoryMenu partData={await getPart(categoryData.category)} projectID={projectID} categoryID={categoryData.id} />

            </div>
            <CategoryCollapse>
                {items}
            </CategoryCollapse>
        </>
    )
}
