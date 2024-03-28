'use server'

import PocketBase from 'pocketbase';

export default async function getPart(categoryID) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    let partData = await (pb.collection('part')).getList(0, 99, {
        filter: 'Category="' + categoryID + '"'
    })


    partData = await (partData.items
        .map((data) => (
            {
                id: data.id,
                name: data.name
            }
        )))

    return partData
}