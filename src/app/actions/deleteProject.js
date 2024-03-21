'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function deleteProject(projectData) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    pb.collection('projects').delete(projectData.id)
    revalidatePath("/", "layout")
}