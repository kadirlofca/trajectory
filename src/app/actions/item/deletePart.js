'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function deletePart(projectPartID, categoryID, projectID) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const project = await pb.collection("projects").getOne(projectID)
    const oldPart = await pb.collection("project_part").getOne(projectPartID)
    const category = await pb.collection("project_category").getOne(categoryID)

    await pb.collection('projects').update(projectID, {
        cart: Number(project.cart) - Number(oldPart.cart)
    });

    await pb.collection('project_category').update(categoryID, {
        cart: Number(category.cart) - Number(oldPart.cart)
    });


    await pb.collection('projects').update(projectID, {
        spent: Number(project.spent) - Number(oldPart.spent)
    });

    await pb.collection('project_category').update(categoryID, {
        spent: Number(category.spent) - Number(oldPart.spent)
    });

    pb.collection('project_part').delete(projectPartID)
    revalidatePath("/", "layout")
}