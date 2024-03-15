import Link from "next/link";
import StickyNote from "./components/StickyNote";
import PocketBase from "pocketbase";

export default async function Home() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const projects = (await pb.collection("projects").getFullList()).map(
    (project) => <StickyNote name={"My Project"} />
  );

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap mx-auto max-w-screen-lg">{projects}</div>
    </div>
  );
}
