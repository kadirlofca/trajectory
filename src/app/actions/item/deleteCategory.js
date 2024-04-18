'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function deleteCategory(projectCategoryID, projectID) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const project = await pb.collection("projects").getOne(projectID)
    const oldProduct = await pb.collection("project_item").getOne(projectItemID)

    await pb.collection('projects').update(projectID, {
        spent: Number(project.spent) - Number(oldProduct.budget)
    });

    pb.collection('project_category').delete(projectCategoryID)
    revalidatePath("/", "layout")
}