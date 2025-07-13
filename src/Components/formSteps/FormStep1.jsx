export default function FormStep1({ onNext }){
    return(
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <label className="block mb-2 text-sm font-medium text-gray-700">What is your skin type<span className="text-red-400">*</span></label>
            <input type="text" placeholder="Enter your name" className="border p-2 rounded mb-4 w-full" />
        </form>
    )
}