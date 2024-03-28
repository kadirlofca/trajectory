'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function deleteCategory(projectCategoryID) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    pb.collection('project_category').delete(projectCategoryID)
    revalidatePath("/", "layout")
}