export default function SkinAnalyisSkeleton() {
  return (
    <div className="bg-white w-full  animate-pulse  h-[550px] space-y-3  rounded-md border border-light-border  px-8 py-4">
      <div className=" flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="w-22 h-2 bg-purple-200"></p>
          <p className="w-18 h-2 bg-purple-200"></p>
        </div>
        <button className="w-12 h-12 rounded-full bg-purple-200"></button>
      </div>
      <div className="w-full bg-purple-200 h-10/12 rounded-md">

      </div>
    </div>
  );
}
