import lumeaLogo from "../assets/lumeaLogoPurple.svg"
export default function PlainBar(){
    return(
        <main className="bg-darkest px-8 py-3 fixed top-0 left-0 right-0 z-50  transition-all duration-300 ease-in-out">
            <img src={lumeaLogo} alt="Lumea Logo"></img>

        </main>
    )
}