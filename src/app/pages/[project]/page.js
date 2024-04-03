import Link from "next/link";
import PocketBase from "pocketbase";
import getCategories from "@/app/actions/utilities/getCategories";
import { AddCategoryForm } from "@/app/components/forms/AddCategoryForm";
import { Category } from "@/app/components/items/Category";
import { Home } from "lucide-react";

export default async function Page({ params }) {
  const projectID = params.project;

  const pb = new PocketBase("http://127.0.0.1:8090");
  const projectCategories = await pb
    .collection("project_category")
    .getList(0, 99, {
      filter: 'project="' + projectID + '"',
    });

  const items = await Promise.all(
    projectCategories.items.map(async (data) => {
      data.categoryName = (
        await pb.collection("category").getOne(data.category)
      ).name;
      return (
        <Category
          key={data.category}
          categoryData={data}
          projectID={projectID}
        />
      );
    })
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-20 max-w-screen-lg mx-auto mb-4 py-4 pl-8 border-b-2 border-gray-400 bg-gray-400">
        <div className="max-w-[29%]">
          <Link href="/" passHref>
            <Home className="mt-3 h-10 w-10" />
          </Link>
        </div>
        <div className="max-w-[29%]">
          Trajectory helps you organize and keep track of your car projects.
        </div>
        <div className="max-w-[29%]">
          Kadir Lofca - Kennedy Ninh - Hayden Perusek
        </div>
      </div>
      
      <div className="flex flex-col items-center mt-5">
        <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
          <AddCategoryForm
            projectID={projectID}
            categoryData={await getCategories()}
          />
          {items}
        </div>
      </div>

      <div>
        <footer className="border-t mt-8">
          <div className="text-gray-400 flex flex-wrap justify-center gap-12 max-w-screen-lg mx-auto py-4 pl-8">
            <div className="max-w-[29%]">Trajectory</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
