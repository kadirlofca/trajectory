
'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function getProjectCart(projectID) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    let cart = 0

    const products = await pb
    .collection("project_item")
    .getFullList()

    console.log(products)

    products.forEach((item) => {
        if (item.mark == "selected") {
            cart += Number(item.budget)
        }
    })

    return cart
}
