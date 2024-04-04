'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function updateProductMark(id, markType) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    await pb.collection('project_item').update(id, {
        mark: markType
    });
    revalidatePath("/", "layout")
}