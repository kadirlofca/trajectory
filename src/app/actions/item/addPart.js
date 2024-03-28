'use server'

import PocketBase from 'pocketbase';
import { revalidatePath } from "next/cache";

export default async function addPart(partID, categoryID, projectID) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    pb.collection('project_part').create({
        project: projectID,
        category: categoryID,
        part: partID
    })

    revalidatePath("/", "layout")
}