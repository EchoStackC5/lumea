export default function FormStep2( { onNext }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <div className="text-center mb-6 text-lg font-inter font-medium text-primary-dark">
                <h1>Pick a Date and Time</h1>
            </div>
            <label className=" text-sm font-medium text-gray-700">
                Pick a date<span className="text-red-400">*</span>
            </label>
            <input
                type="datetime-local"
                required
                className="w-full px-4 py-3 border border-light-border bg-white rounded-md outline-none focus:ring-purple-500 focus:border-purple-500"
            />
        </form>
    );
}