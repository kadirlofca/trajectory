'use server'

import PocketBase from 'pocketbase';

export default async function getCategories() {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const categoryData = (await pb.collection('category').getFullList()).map((data) => (
        {
            id: data.id,
            name: data.name
        }
    ))


    return categoryData
}