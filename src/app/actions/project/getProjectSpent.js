
'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function getProjectSpent(projectID) {
    const pb = new PocketBase("http://127.0.0.1:8090")

    const project = await pb.collection('projects').getOne(projectID);



    // revalidatePath("/", "layout")
    return project.spent
}
