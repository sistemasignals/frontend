import StartList from "../components/StartList"
import {useEffect,useRef,useState} from "react"
import {io} from "socket.io-client";

const ReactTRC = () => {

    const socket = io("http://192.168.0.8:5001");
    
    const [bbox,setBbox] = useState("")
    const [bboxSigna,setBboxSigna] = useState("")
    const [point,setPoint] = useState(0) 
    // uso
    const myVideo = useRef()
    const stream = useRef()
    const imgElement2 = useRef()
    const imageSigna = useRef()

    useEffect(()=>{
       
        getUserMedia()
            const interval = setInterval(() => {
            startStreaming()
        }, 5000);
        return () => clearInterval(interval);
    },[])

    useEffect(()=>{
        socket.on('serverResponse', (message)=>{
            console.log(message)
            setBbox(message.bbox)
            setBboxSigna(message.image)
            setPoint(message.point)
        });
    },[socket])
    
    useEffect(()=>{
        if(bbox != ""){
            var videoRect = myVideo.getClientRects()[0]; // que devuelve aca , investigar
            const imgElementCurrent = imgElement2.current
            imgElementCurrent.top = videoRect.top + "px";
            imgElementCurrent.left = videoRect.left + "px";
            imgElementCurrent.width = videoRect.width + "px";
            imgElementCurrent.height = videoRect.height + "px";
            imgElementCurrent.src = bbox
        }
        //},4000)
    },[bbox])

    useEffect(()=>{
        if(bboxSigna != ""){
            const imgElementSigna = imageSigna.current
            imgElementSigna.src = bboxSigna
        }
        //},4000)
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
    


    return(
       <div className="flex flex-col">
         {
            stream && (
               <div className="flex flex-col">
                    <div className="flex flex-row">
                        {/* Imagen del bbox */}
                        <img
                            ref={imgElement2}
                            style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: '50px', // Ajusta el tamaño según sea necesario
                            left: '50px',
                            }}
                            alt="Bbox Image"
                        />
                        {/* Video here */}
                        <div colSpan={1}>
                            <video playsInline muted ref={myVideo} autoPlay
                            style={{width:640,height:480}}
                            />
                        </div>
                        {/* Imagen de la seña */}
                        <img
                        ref={imageSigna}
                        style={{width:640,height:480}}
                            alt="Bbox Image"
                        />
                    </div>
                    <StartList number={point}/>
                </div> 
            )
        }
       </div>
    )
}
export default ReactTRC