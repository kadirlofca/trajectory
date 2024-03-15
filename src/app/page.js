import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full h-full">
      <Link href={"pages/projects"}> goto projects </Link>
    </div>
  );
}
