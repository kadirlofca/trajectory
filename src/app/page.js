import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white">
      <div className="w-[1440px] h-[125px] left-0 top-0 absolute bg-black bg-opacity-70" />
      <div className="w-56 h-56 left-[318px] top-[162px] absolute">
        <div className="w-56 h-56 left-0 top-0 absolute shadow">
          <img className="w-56 h-56 left-0 top-0 absolute" src="/images/sticky.png" />
        </div>
        <Link href="/addproj">
          <div className="w-48 h-[184px] left-[16px] top-[20px] absolute text-black text-sm font-normal font-['Gentium Book Basic']">Add Project</div>
        </Link>
      </div>
      <div className="w-[612px] h-[60px] left-[414px] top-[32px] absolute bg-yellow-400 rounded-[10px]" />
      <div className="left-[430px] top-[48px] absolute text-black text-1xl font-normal font-['Gentium Book Basic']">Total Spent Across Projects: $0</div>
      <div className="left-[837px] top-[48px] absolute text-black text-1xl font-normal font-['Gentium Book Basic']">Shopping Cart: $0</div>
    </div>
  );
}
