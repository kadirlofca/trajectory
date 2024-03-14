import Link from 'next/link';
import StickyNote from './components/StickyNote';


export default function Home() {
  return (
    <div className="w-full h-full">
      <div className='flex flex-wrap mx-auto max-w-screen-lg'>
        <StickyNote name={"My Project"} />
        <StickyNote name={"Your Project"} />
        <StickyNote name={"Their Project"} />
      </div>

    </div>
  );
}
