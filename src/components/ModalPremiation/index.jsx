import Modal from "../Modal"
import ImageNotification from "../../assets/images/imagen_ganador.png"
import Button from "../../components/Button";

export default function ModalPremiation({username}){
    return(
       <Modal classNameBody={"p-10"}>
            <img src={ImageNotification} alt="Imagen de ganador" className="w-[200px] h-[200px] m-auto"/>
            <div className="relative p-6 flex-auto">
            <h1 className="text-2xl font-bold text-center">Felicidades <span className="text-green-400">{username}</span> , lograste completar el reto de las señas</h1>
            <div className="m-auto flex mt-4">
            <Button className="bg-green-500"
            onClick={()=>location.reload()}
            >
                Iniciar de nuevo
            </Button>
            </div>
            </div>
       </Modal> 
    )
}