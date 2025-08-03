export default function DetailsSkeleton(){
    return(
        <div className="bg-white w-full lg:w-[350px] animate-pulse  space-y-3  rounded-md border border-light-border  px-8 py-4">
                    <div className=" flex justify-between items-center">
                        <p className="bg-purple-200 w-28 h-4 animate-pulse"></p>
                        <button className="w-32 h-8 rounded-full bg-purple-200"></button>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="w-12 h-12 rounded-full bg-purple-200"></p>
                        <div className="flex flex-col gap-1">
                            <p className="w-22 h-2 bg-purple-200"></p>
                            <p className="w-18 h-2 bg-purple-200"></p>
                        </div>
                    </div>
                    <div>
                        <div className="w-full grid grid-cols-2 gap-2 rounded-md">

                            {[1, 2, 3, 4].map( n => <div key= {n} className=" flex items-center gap-2  bg-purple-200 rounded-sm px-2 py-2">
                                <p className="w-10 h-10 rounded-full bg-white"></p>
                                <div className=" flex flex-col gap-1">
                                    <p className="w-18 h-2 bg-white"></p>
                                    <p className="w-16 h-2 bg-white"></p>
                                </div>
                            </div>)}
                        </div>

                    </div>
                </div>
    )
}