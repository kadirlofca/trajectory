'use server'

import * as React from "react"
import PocketBase from "pocketbase";
import { DropdownMenuSection } from "./DropDown"
import { Part } from "./Part";

export async function Category({ data }) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const parts = await pb.collection('project_part').getList(0, 99, {
        filter: 'category="' + data.id + '"'
    })

    const items = await Promise.all(parts.items.map(async (data) => {
        data.categoryName = (await pb.collection('category').getOne("1b2810492fjfjw5")).name
        return <Part data={data} />
    }))

    return (
        <div className={`flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center`}>
            <p className="text-sm font-medium leading-none">
                <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                    Category
                </span>
                <span className="text-muted-foreground">{data.categoryName}</span>
            </p>
            <DropdownMenuSection />
        </div>
    )
}
