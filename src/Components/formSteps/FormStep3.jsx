import CosmetologistList from "../CosmotologistList";
export default function FormStep3({ onNext, cosmetologists = [] }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <div className="text-center mb-6 text-lg font-inter font-medium text-primary-dark">
                <h1>Based on your concerns and skin type, here are experts for you.</h1>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                {[1, 2, 3,4].map(n => <CosmetologistList key={n} />)}
            </div>         
        </form>
    );
}