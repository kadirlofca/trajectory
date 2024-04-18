'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function updateProductMark(id, partID, categoryID, projectID, markType) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const oldProduct = await pb.collection("project_item").getOne(id)
    const project = await pb.collection("projects").getOne(projectID)
    const part = await pb.collection("project_part").getOne(partID)
    const category = await pb.collection("project_category").getOne(categoryID)

    await pb.collection('project_item').update(id, {
        mark: markType
    });

    if (markType == "bought" && oldProduct.mark != "bought") {
        if (oldProduct.mark == "selected") {
            await pb.collection('projects').update(projectID, {
                cart: Number(project.cart) - Number(oldProduct.budget)
            });

            await pb.collection('project_category').update(categoryID, {
                cart: Number(category.cart) - Number(oldProduct.budget)
            });

            await pb.collection('project_part').update(partID, {
                cart: Number(part.cart) - Number(oldProduct.budget)
            });
        }

        await pb.collection('projects').update(projectID, {
            spent: Number(project.spent) + Number(oldProduct.budget)
        });

        await pb.collection('project_category').update(categoryID, {
            spent: Number(category.spent) + Number(oldProduct.budget)
        });

        await pb.collection('project_part').update(partID, {
            spent: Number(part.spent) + Number(oldProduct.budget)
        });
    }
    else if (markType == "selected" && oldProduct.mark != "selected") {
        if (oldProduct.mark == "bought") {
            await pb.collection('projects').update(projectID, {
                spent: Number(project.spent) - Number(oldProduct.budget)
            });

            await pb.collection('project_category').update(categoryID, {
                spent: Number(category.spent) - Number(oldProduct.budget)
            });

            await pb.collection('project_part').update(partID, {
                spent: Number(part.spent) - Number(oldProduct.budget)
            });
        }

        await pb.collection('projects').update(projectID, {
            cart: Number(project.cart) + Number(oldProduct.budget)
        });

        await pb.collection('project_category').update(categoryID, {
            cart: Number(category.cart) + Number(oldProduct.budget)
        });

        await pb.collection('project_part').update(partID, {
            cart: Number(part.cart) + Number(oldProduct.budget)
        });
    }
    else if (markType == "none" && oldProduct.mark != "none") {
        if (oldProduct.mark == "bought") {
            await pb.collection('projects').update(projectID, {
                spent: Number(project.spent) - Number(oldProduct.budget)
            });

            await pb.collection('project_category').update(categoryID, {
                spent: Number(category.spent) - Number(oldProduct.budget)
            });

            await pb.collection('project_part').update(partID, {
                spent: Number(part.spent) - Number(oldProduct.budget)
            });
        }
        else if (oldProduct.mark == "selected") {
            await pb.collection('projects').update(projectID, {
                cart: Number(project.cart) - Number(oldProduct.budget)
            });

            await pb.collection('project_category').update(categoryID, {
                cart: Number(category.cart) - Number(oldProduct.budget)
            });

            await pb.collection('project_part').update(partID, {
                cart: Number(part.cart) - Number(oldProduct.budget)
            });
        }
    }

    revalidatePath("/", "layout")
}