export default function FormStep2( { onNext }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <label className="block mb-2 text-sm font-medium text-gray-700">
                What is your skin Color<span className="text-red-400">*</span>
            </label>
            <input
                type="text"
                placeholder="Enter your skin type"
                className="border p-2 rounded mb-4 w-full"
            />
        </form>
    );
}