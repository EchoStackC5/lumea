export default function FormStep1({ onNext }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="space-y-3">
            <div className="text-center mb-6 text-lg font-inter font-medium text-primary-dark">
                <h1>Help us understand your skin’s natural behavior.</h1>
            </div>

            <label className=" mt-2 text-sm font-medium text-gray-700">What is your skin type<span className="text-red-400">*</span></label>
            <select required className=" w-full px-4 py-3   border border-light-border bg-white rounded-md outline-none focus:ring-purple-500 focus:border-purple-500">
                <option value="" disabled>Select your skin type</option>
                <option value="oily">Oily</option>
                <option value="dry">Dry</option>
                <option value="combination">Combination</option>
                <option value="sensitive">Sensitive</option>
            </select>
            <label className=" mt-2 text-sm font-medium text-gray-700">What is your current concern?<span className="text-red-400">*</span></label>
            <select required className=" w-full px-4 py-3   border border-light-border bg-white rounded-md outline-none focus:ring-purple-500 focus:border-purple-500">
                <option value="" >Select your concern</option>
                <option value="acne">Acne</option>
                <option value="wrinkles">Wrinkles</option>
                <option value="dark_spots">Dark Spots</option>
                <option value="sensitivity">Sensitivity</option>
                <option value="dullness">Dullness</option>
                <option value="uneven_skin_tone">Uneven Skin Tone</option>
                <option value="enlarged_pores">Hyperpigmentation</option>
            </select>
            <label className=" mt-2 text-sm font-medium text-gray-700">Detailed Description of issue<span className="text-red-400">*</span></label>
            <textarea required className=" w-full px-4 py-3   border border-light-border bg-white rounded-md outline-none focus:ring-purple-500 focus:border-purple-500" rows="4" placeholder="Describe your issue in detail"></textarea>
            <label className=" mt-2 text-sm font-medium text-gray-700">What is your weight(kg)<span className="text-red-400">*</span></label>
            <input
                type="number"
                placeholder="Enter your weight"
                className="w-full px-4 py-3   border border-light-border bg-white rounded-md outline-none focus:ring-purple-500 focus:border-purple-500" />
            <label className=" mt-2 text-sm font-medium text-gray-700">What is your height(cm)<span className="text-red-400">*</span></label>
            <input
                type="number"
                placeholder="Enter your height"
                className="w-full px-4 py-3   border border-light-border bg-white rounded-md outline-none focus:ring-purple-500 focus:border-purple-500" />
             <label className=" mt-2 text-sm font-medium text-gray-700">Select your Gender<span className="text-red-400">*</span></label>
             <select required className=" w-full px-4 py-3   border border-light-border bg-white rounded-md outline-none focus:ring-purple-500 focus:border-purple-500">
                <option value="" disabled>Select your Gender </option>
                <option value= "female">Female</option>
                <option value= "male">Male</option>
            </select>
 
        </form>
    )
}