import StartList from "../StartList"
import {useEffect,useRef,useState} from "react"
import {io} from "socket.io-client";
import Card from "../Card";
import ModalPremiation from "../ModalPremiation";
import Button from "../Button";
const VideoAndImage = ({name,pointTotal}) => {

    const socket = io(import.meta.env.VITE_API_URL);
    
    const [bbox,setBbox] = useState("")
    const [bboxSigna,setBboxSigna] = useState("")
    const [point,setPoint] = useState(0) 
    const [modal,setModal] = useState(false)    
    // uso
    const myVideo = useRef()
    const stream = useRef()
    const imgElement2 = useRef()
    const imageSigna = useRef()
    useEffect(()=>{
        getUserMedia()
            const interval = setInterval(() => {
            startStreaming(point)
        }, import.meta.env.VITE_API_SECOND);
        return () => clearInterval(interval);
    },[])

    useEffect(()=>{
        socket.on('serverResponse', (message)=>{
            console.log(message)
            setBbox(message.bbox)
            setBboxSigna(message.image)
            setPoint(message.point)
            if(message.pointTotal == message.point){
                setModal(true)
                setBboxSigna("")
                socket.disconnect()
            }
        });
    },[socket])
    
    useEffect(()=>{
        if(bbox != ""){
            const imgElementCurrent = imgElement2.current
            imgElementCurrent.src = bbox
        }
    },[bbox])

    useEffect(()=>{
        if (bboxSigna !== "") {
            const imgElementSigna = imageSigna.current;
            if (imgElementSigna) {
              imgElementSigna.src = bboxSigna;
            }
          }
    },[bboxSigna])

    const getUserMedia=async()=>{
            const currentStream = await navigator.mediaDevices.getUserMedia({ video: true })
            stream.current = currentStream
            if(stream.current){
                myVideo.current.srcObject = currentStream;
            }
    }

    const startStreaming = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 640;
        canvas.height = 480;
    
        const captureFrame = () => {
            context.drawImage(myVideo.current, 0, 0, canvas.width, canvas.height);
            const frameData = canvas.toDataURL('image/jpeg', 0.8)
           socket.emit('stream-frame', frameData);
          };
        captureFrame(); // validar si cumple la cantidad de puntos solicitados acabara
       
      };
    

    const AnimationLoadingImage =({image,children})=>{
        return(
            
            <>
                {
                    image == "" ?
                    (
                        <div
                    className="
                    border-gray-100 border-2
                    flex flex-col items-center justify-center"
                    style={{width:640,height:480}}
                    >
                        <div className="flex justify-center">
                        <span className="circle animate-loader"></span>
                        <span className="circle animate-loader animation-delay-200"></span>
                        <span className="circle animate-loader animation-delay-400"></span>
                        </div>
                        <p className="text-xl text-gray-400">Cargando..</p>
                    </div>
                    )
                    :(
                        children
                    )
                }
            </>
        )
    }


    return(
       <div className="flex flex-col">
         <Button 
                        className={"bg-red-600"}
                        onClick={()=>location.reload()}>
                            Salir del Sistema
        </Button>
         {
            stream && (
               <div className="flex flex-col m-auto items-center mt-10">
                    <Card>
                   
                        <h1 className="text-2xl text-center">Bienvenido <span className="text-red-600">{name}</span>, deberas indicar la seña para poder obtener puntos </h1>
                    </Card>
                    <div className="flex flex-row border-gray-100 border-2">
                        {/* Imagen del bbox */}
                        {
                            bboxSigna != "" && (
                                <img
                            ref={imgElement2}
                            style={{
                            position: 'absolute',
                            zIndex: 1,
                            }}
                            alt="Bbox Image"
                        />
                            )
                        }
                        {/* Video here */}
                        <div colSpan={1}>
                            <video playsInline muted ref={myVideo} autoPlay
                            style={{width:640,height:480}}
                            />
                        </div>
                        {/* Imagen de la seña */}
                        <AnimationLoadingImage image={bboxSigna}>
                                <img
                            src={bboxSigna}
                            style={{width:640,height:480}}
                            alt="Bbox Image"
                            />
                        </AnimationLoadingImage>
                    </div>
                     {/* Carta de estado de puntos */}
                    <Card>
                        <h1 className="text-2xl text-center">Deberas completar {pointTotal} puntos , actualmente tienes {point} puntos </h1>
                    </Card>
                     {/* Listado de puntos */}
                    <Card className={"bg-white h-auto "}>
                        <div className=" flex items-center justify-center  w-1/2 m-auto">
                        <StartList number={point}/>
                        </div>
                    </Card>
                    {
                        modal && (
                            <ModalPremiation username={name}/>
                        )
                    }
                </div> 
            )
        }
       </div>
    )
}
export default VideoAndImage