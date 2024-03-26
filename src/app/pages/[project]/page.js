'use server'

import Link from "next/link";
import PocketBase from "pocketbase";
import { CategoryButton } from "@/app/components/CategoryButton";
import { Category } from "@/app/components/Category";
import { AddPartDropdown } from "@/app/components/AddPartDropDown";

export default async function Page({ params }) {
  const projectID = params.project

  const pb = new PocketBase("http://127.0.0.1:8090")
  const projectCategories = await pb.collection('project_category').getList(0, 99, {
    filter: 'project="' + projectID + '"'
  })

  const items = await Promise.all(projectCategories.items.map(async (data) => {
    data.categoryName = (await pb.collection('category').getOne("1b2810492fjfjw5")).name
    return <Category data={data} />
  }))

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center gap-12 max-w-screen-lg mx-auto mb-4 py-4 pl-8 border-b-2 border-gray-400 bg-gray-400">
          <div className="max-w-[29%]">
            <Link href="/">
              Trajectory helps you organize and keep track of your car projects.
            </Link>
          </div>

          <div className="max-w-[29%]">
            JavaScript - React - Nextjs - Tauri - HTML & CSS - Tailwind
          </div>
          <div className="max-w-[29%]">
            Kadir Lofca - Kennedy Ninh - Hayden Perusek
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
        <CategoryButton />
        {items}
      </div>
    </>
  );
}
