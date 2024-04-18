'use server'

import PocketBase from 'pocketbase';
import { revalidatePath } from "next/cache";

export default async function addProduct(partID, values) {
    const pb = new PocketBase("http://127.0.0.1:8090")

    pb.collection('project_item').create({
        title: values.name,
        part: partID,
        text: values.text,
        budget: values.budget,
        mark: "none"
    })

    revalidatePath("/", "layout")
}