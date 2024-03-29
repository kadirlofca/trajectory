'use server'

import { revalidatePath } from "next/cache";
import PocketBase from 'pocketbase';

export default async function createProject(projectData, id) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    await pb.collection('projects').update(id, {
        name: projectData.name,
        year: projectData.year,
        make: projectData.make,
        model: projectData.model,
        budget: projectData.budget,
    });
    revalidatePath("/", "layout")
}