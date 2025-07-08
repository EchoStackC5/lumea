import Findings from "./Findings"
import RecommendedActions from "./RecommendedActions"
import RecommendedProducts from "./RecommendedProducts"

export default function SkinReport() {
    return(
        <div>
            <Findings/>
            <RecommendedActions/>
            <RecommendedProducts/>
            <h1>Skin Report</h1>
        </div>
    )
}