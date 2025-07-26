import { useFormStatus } from "react-dom";

export default function SubmitButton({title,className,loading}){
    const {pending} = useFormStatus();
    return(
        <div>
           <button className={`${className} ${loading ? "animate-pulse": ""}`}
            type="submit"
            disabled={loading}>
                {loading ?  `${title}...` : title}

           </button>
        </div>
    )
}