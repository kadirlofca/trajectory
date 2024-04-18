import Link from "next/link";
import PocketBase from "pocketbase";
import getCategories from "@/app/actions/utilities/getCategories";
import getProjectCart from "@/app/actions/project/getProjectCart";
import getProjectSpent from "@/app/actions/project/getProjectSpent";
import { AddCategoryForm } from "@/app/components/forms/AddCategoryForm";
import { Category } from "@/app/components/items/Category";
import { ArrowLeft, ShoppingCart, ShoppingBag } from "lucide-react";


export default async function Page({ params }) {
  const projectID = params.project;

  const pb = new PocketBase("http://127.0.0.1:8090");
  const projectCategories = await pb
    .collection("project_category")
    .getList(0, 99, {
      filter: 'project="' + projectID + '"',
    });

  // Find all parts to calculate cart $$$
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

  const project = await pb.collection("projects").getOne(projectID)
  const cart = await getProjectCart(projectID)
  const spent = await getProjectSpent(projectID)

  return (
    <div>
      <div className="flex flex-wrap text-card p-4 max-w-screen-lg mx-auto">

        <Link href="/" passHref>
          <ArrowLeft className="h-6 w-6" />
        </Link>
        &nbsp; {project.name}

        <div className="ml-auto">
          <div className="content-center flex">
            <ShoppingCart className="h-6 w-6" />
            &nbsp; Cart: ${cart}
          </div>

          <div className="content-center flex mt-2">
            <ShoppingBag className="h-6 w-6" />
            &nbsp; Total Spent: ${spent}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-3">
        <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
          <AddCategoryForm
            projectID={projectID}
            categoryData={await getCategories()}
          />
          {items}
        </div>
      </div>
    </div>
  );
}
