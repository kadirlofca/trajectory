import Link from "next/link";

export default function AddProj() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white">
      <div className="w-[1440px] h-[125px] left-0 top-0 absolute bg-black bg-opacity-70" />
      <div className="w-56 h-56 left-[318px] top-[162px] absolute">
        <div className="w-56 h-56 left-0 top-0 absolute shadow">
          <img
            className="w-56 h-56 left-0 top-0 absolute"
            src="/images/sticky.png"
          />
        </div>
        <div className="w-48 h-[184px] left-[16px] top-[20px] absolute text-black text-sm font-normal font-['Gentium Book Basic']">
          Add Project
        </div>
      </div>
      <div className="w-[514px] h-[372px] left-[377px] top-[385px] absolute bg-zinc-100 bg-opacity-95 rounded-[10px] shadow border-2 border-black" />
      <div className="w-[162px] h-7 left-[389px] top-[391px] absolute text-black text-2xl font-normal font-['Gentium Book Basic']">
        Adding Project
      </div>
      <div className="w-[491px] h-[50px] left-[389px] top-[423px] absolute bg-zinc-300 rounded-[10px]" />
      <div className="left-[395px] top-[434px] absolute text-stone-500 text-2xl font-normal font-['Gentium Book Basic']">
        Enter Year (required)
      </div>
      <div className="w-[491px] h-[50px] left-[389px] top-[488px] absolute bg-zinc-300 rounded-[10px]" />
      <div className="left-[395px] top-[498px] absolute text-stone-500 text-2xl font-normal font-['Gentium Book Basic']">
        Enter Make (required)
      </div>
      <div className="w-[491px] h-[50px] left-[389px] top-[553px] absolute bg-zinc-300 rounded-[10px]" />
      <div className="left-[395px] top-[564px] absolute text-stone-500 text-2xl font-normal font-['Gentium Book Basic']">
        Enter Model (required)
      </div>
      <div className="w-[491px] h-[50px] left-[389px] top-[618px] absolute bg-zinc-300 rounded-[10px]" />
      <div className="left-[395px] top-[628px] absolute text-stone-500 text-2xl font-normal font-['Gentium Book Basic']">
        Enter Budget (optional)
      </div>
      <div className="w-[129px] h-[50px] left-[564px] top-[683px] absolute bg-zinc-300 rounded-[10px] border border-black" />
      <Link href="/projects">
        <div className="left-[603px] top-[694px] absolute text-black text-2xl font-normal font-['Gentium Book Basic']">
          Save
        </div>
      </Link>
      <div className="w-[612px] h-[60px] left-[387px] top-[32px] absolute bg-yellow-400 rounded-[10px]" />
      <div className="left-[413px] top-[48px] absolute text-black text-1xl font-normal font-['Gentium Book Basic']">
        Total Spent Across Projects: $0
      </div>
      <div className="left-[820px] top-[48px] absolute text-black text-1xl font-normal font-['Gentium Book Basic']">
        Shopping Cart: $0
      </div>
    </div>
  );
}
