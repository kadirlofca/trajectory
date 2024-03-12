import Link from "next/link";

export default function AddCategory() {
  return (
    <div className="w-[1440px] h-[1879px] relative bg-white">
      <div className="w-[1440px] h-[125px] left-0 top-0 absolute bg-black bg-opacity-70" />
      <div className="w-[445px] h-[60px] left-[421px] top-[31px] absolute bg-yellow-400 rounded-[10px]" />
      <div className="left-[515px] top-[48px] absolute text-black text-2xl font-normal font-['Gentium Book Basic']">
        Current Project: -----
      </div>
      <div className="w-[673px] h-[270px] left-[261px] top-[275px] absolute bg-zinc-100 bg-opacity-95 rounded-[10px] shadow border-2 border-black" />
      <div className="w-[627px] h-[50px] left-[286px] top-[292px] absolute bg-zinc-300 rounded-[10px]" />
      <div className="left-[305px] top-[303px] absolute text-stone-500 text-2xl font-normal font-['Gentium Book Basic']">
        Search Categories
      </div>
      <div className="w-[619px] h-[510px] left-[288px] top-[361px] absolute text-black text-2xl font-normal font-['Gentium Book Basic']">
        <Link href="/newcateg">------</Link>
        <br />
        ------
        <br />
        -------
        <br />
        -------
        <br />
        --------
        <br />
        -------
      </div>
      <div className="w-[1051px] h-[50px] left-[60px] top-[216px] absolute bg-stone-200 border-2 border-black" />
      <div className="left-[73px] top-[229px] absolute text-black text-[22px] font-normal font-['Gentium Book Basic']">
        + Add Category
      </div>
    </div>
  );
}
