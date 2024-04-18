'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function deleteProduct(projectItemID, partID, categoryID, projectID) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const project = await pb.collection("projects").getOne(projectID)
    const part = await pb.collection("project_part").getOne(partID)
    const category = await pb.collection("project_category").getOne(categoryID)
    const oldProduct = await pb.collection("project_item").getOne(projectItemID)

    if (oldProduct.mark == "selected") {
        await pb.collection('projects').update(projectID, {
            cart: Number(project.cart) - Number(oldProduct.budget)
        });

        await pb.collection('project_part').update(partID, {
            cart: Number(part.cart) - Number(oldProduct.budget)
        });

        await pb.collection('project_category').update(categoryID, {
            cart: Number(category.cart) - Number(oldProduct.budget)
        });
    }
    else if (oldProduct.mark == "bought") {
        await pb.collection('projects').update(projectID, {
            spent: Number(project.spent) - Number(oldProduct.budget)
        });

        await pb.collection('project_part').update(partID, {
            spent: Number(part.spent) - Number(oldProduct.budget)
        });

        await pb.collection('project_category').update(categoryID, {
            spent: Number(category.spent) - Number(oldProduct.budget)
        });
    }

    pb.collection('project_item').delete(projectItemID)
    revalidatePath("/", "layout")
}