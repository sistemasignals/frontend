import React from "react"
import Webcam from 'react-webcam';
const SectionVideo = () => {

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      // Aquí puedes hacer algo con la imagen capturada, como enviarla al servidor.
      const options ={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({data:imageSrc})
      }
      const url ="http://localhost:5000/detection"
      fetch(url,options).then(response=>{
        if(response.ok){
            return response.json();
        }
      }).then(data=>{
        console.log("response server",data)
    }).catch(err=>{
        console.log(err)
    })
      console.log(imageSrc);
    }, [webcamRef]);

    return(
        <div>
        <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
        />
        <button onClick={capture}>Capturar foto</button>
    </div>
    )
}

export default SectionVideo;