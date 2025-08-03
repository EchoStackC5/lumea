import DetailsSkeleton from "./DetailsSkeleton";
import AppointmentSkeleton from "./AppointmentSkeleton";
import SkinAnalyisSkeleton from "./SkinAnalysisSkeleton";
export default function SkeletonLoader() {
  return (
    <section className="bg-backgrounds h-screen flex flex-col lg:flex-row px-8 gap-6 w-full pt-6 overflow-hidden">
      <div className=" flex flex-col gap-6 h-full">
        <DetailsSkeleton />
        <AppointmentSkeleton />
      </div>

        <SkinAnalyisSkeleton/>
      
    
      
    </section>
  );
}
