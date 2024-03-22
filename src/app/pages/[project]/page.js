'use client'

import Link from "next/link";
import PocketBase from 'pocketbase';

export default function Page({ params }) {
  const pb = new PocketBase("http://127.0.0.1:8090")
  pb.collection('projects').getOne(params.project)

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
        <Link href="/addcategory">
          <p>Category view test page</p>
        </Link>
      </div>
    </>
  );
}
