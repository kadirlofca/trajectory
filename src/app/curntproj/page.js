import Link from "next/link";

export default function CurrentProj() {
  return (
    <div className="w-[1440px] h-[1879px] relative bg-white">
  <div className="w-[1440px] h-[125px] left-0 top-0 absolute bg-black bg-opacity-70" />
  <div className="w-[445px] h-[60px] left-[421px] top-[31px] absolute bg-yellow-400 rounded-[10px]" />
  <div className="left-[515px] top-[48px] absolute text-black text-2xl font-normal font-['Gentium Book Basic']">Current Project: -------</div>
  <div className="w-[1339px] h-[1658px] left-[50px] top-[161px] absolute bg-white" />
  <div className="w-[1051px] h-[50px] left-[50px] top-[213px] absolute bg-stone-200 border-2 border-black" />
  <Link href="/addcategory">
  <div className="left-[68px] top-[228px] absolute text-black text-base font-normal font-['Gentium Book Basic']">+ Add Category  </div></Link>
</div>
  );
}
