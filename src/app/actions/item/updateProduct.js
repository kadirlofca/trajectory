'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function updateProduct(id, productData) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    await pb.collection('project_item').update(id, {
        title: productData.name,
        text: productData.text,
        budget: productData.budget
    });
    revalidatePath("/", "layout")
}