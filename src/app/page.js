import StickyNote from '@/app/components/StickyNote';
import PocketBase from 'pocketbase'
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-static'

export default async function Projects() {
  revalidatePath('/', 'layout')

  const pb = new PocketBase('http://127.0.0.1:8090')
  const projects = (await pb.collection('projects').getFullList()).map((project) =>
    <StickyNote projectData={project} />
  );

  return (
    <div className="w-full h-full">
      <div className='flex flex-wrap mx-auto max-w-screen-lg'>
        {projects}
      </div>

    </div >
  );
}
