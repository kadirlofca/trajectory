import PocketBase from "pocketbase";
import { revalidatePath } from "next/cache";
import { Project } from "./components/items/Project";
import { AddProjectForm } from "./components/forms/AddProjectForm";

export const dynamic = "force-static";

export default async function Projects() {
  revalidatePath("/", "layout");

  const pb = new PocketBase("http://127.0.0.1:8090");
  const projects = (await pb.collection("projects").getFullList())
    .reverse()
    .map((project) => <Project projectData={project} />);

  return (
    <div>
      <div className="w-full h-full">
        <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
          <AddProjectForm />
        </div>
        <div className="flex flex-wrap justify-center pt-5 mb-4 mx-auto max-w-screen-lg">
          {projects}
        </div>
      </div>

      <footer className="border-t mt-8">
      <div className="text-gray-400 flex flex-wrap justify-center gap-12 max-w-screen-lg mx-auto py-4 pl-8">
        <div className="max-w-[29%]">
          Trajectory helps you organize and keep track of your car projects.
        </div>
        <div className="max-w-[29%]">
          JavaScript - React - Nextjs - Tauri - HTML & CSS - Tailwind
        </div>
        <div className="max-w-[29%]">
          Kadir Lofca - Kennedy Ninh - Hayden Perusek
        </div>
      </div>
    </footer>
  </div>
  );
}
