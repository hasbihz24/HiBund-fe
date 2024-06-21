import { useNavigate } from "react-router-dom"
import backicon from "../assets/back-button.png"

function Backbutton({nama}){
    const history = useNavigate()
    return( 
        <div className=" lg:justify-center lg: flex items-center gap-3 text-zinc-800 text-sm font-normal font-['Inter'] cursor-pointer">
            <button onClick={()=>history(-1)}><img src={backicon} alt="" className="w-full h-6"/></button>
            {nama}
        </div>
    )
}
export default Backbutton