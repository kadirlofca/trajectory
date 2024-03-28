import Link from "next/link";
import PocketBase from "pocketbase";
import getCategories from "@/app/actions/getCategories";
import { AddCategoryForm } from "@/app/components/forms/AddCategoryForm";
import { Category } from "@/app/components/items/Category";

export default async function Page({ params }) {
  const projectID = params.project

  const pb = new PocketBase("http://127.0.0.1:8090")
  const projectCategories = await pb.collection('project_category').getList(0, 99, {
    filter: 'project="' + projectID + '"'
  })

  const items = await Promise.all(projectCategories.items.map(async (data) => {
    data.categoryName = (await pb.collection('category').getOne(data.category)).name
    return <Category key={data.category} data={data} projectID={projectID} />
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
        <div className="w-full flex justify-center mb-4">
          <Link href="/" passHref>
            <span className="text-white bg-yellow-500 px-4 py-2 rounded-full cursor-pointer hover:bg-yellow-600">Home</span>
          </Link>
        </div>
        <AddCategoryForm projectID={projectID} categoryData={await getCategories()} />
        {items}
      </div>
    </>
  );
}
