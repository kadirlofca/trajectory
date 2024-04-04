
'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function getProjectCart(projectID) {
    const pb = new PocketBase("http://127.0.0.1:8090")

    const projectCategories = await pb
        .collection("project_category")
        .getList(0, 99, {
            filter: 'project="' + projectID + '"',
        });

    projectCategories.items.forEach(async (category) => {
        const parts = await pb
            .collection("project_part")
            .getList(0, 99, {
                filter: 'category="' + category.id + '"',
            });

        await parts.items.forEach(async (part) => {
            const products = await pb
                .collection("project_item")
                .getList(0, 99, {
                    filter: 'part="' + part.id + '"',
                });

            await products.items.forEach(async (product) => {
                if (product.mark == "selected") {
                    cart += Number(product.budget)
                }
            })
        })
    })

    console.log(cart)

    // revalidatePath("/", "layout")
    return cart
}
