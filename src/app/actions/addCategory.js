'use server'

import PocketBase from 'pocketbase';

export default async function addCategory(categoryID, projectID) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    pb.collection('project_category').create({
        project: projectID,
        category: categoryID
    })
}