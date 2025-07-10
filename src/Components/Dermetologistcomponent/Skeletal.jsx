import skeleton from "../../assets/images/skeleton.png"

export default function Skeletal() {
    return (
        <div className="bg-white rounded-lg px-8">
            <img src={skeleton} alt="" className="w-full h-auto rounded" />
        </div>
    )
}