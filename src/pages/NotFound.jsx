import { useNavigate  } from "react-router-dom";
import Button from "../components/Button";
export default function NotFound(){
    const navigate = useNavigate();

    return(
        <div className="flex flex-col justify-center m-20 ">
           <div className="w-1/2 m-auto">
           <h1 className="text-3xl font-bold text-center">404 Not Found</h1>
            <Button 
            className={"bg-red-600"}
            onClick={()=>navigate("/")}>
                Regresar
            </Button>
            </div> 
        </div>
    )
}