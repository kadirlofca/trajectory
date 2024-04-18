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
      <div className="text-card max-w-screen-lg mx-auto">
        <div className="mr-auto p-4">
          Trajectory
        </div>
      </div>

      <div className="w-full h-full">
        <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-screen-lg">
          <AddProjectForm />
          {projects}
        </div>
      </div>
    </div>
  );
}
