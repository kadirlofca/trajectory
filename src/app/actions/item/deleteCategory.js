'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function deleteCategory(projectCategoryID, projectID) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const project = await pb.collection("projects").getOne(projectID)
    const oldCategory = await pb.collection("project_category").getOne(projectCategoryID)

    await pb.collection('projects').update(projectID, {
        cart: Number(project.cart) - Number(oldCategory.cart)
    });

    await pb.collection('projects').update(projectID, {
        spent: Number(project.spent) - Number(oldCategory.spent)
    });

    pb.collection('project_category').delete(projectCategoryID)
    revalidatePath("/", "layout")
}