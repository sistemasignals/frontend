import {useState} from "react"
import ModalUsername from "../components/ModalUsername";
import VideoAndImage from "../components/VideoAndImage";
const Home = () => {

    const [name,setName] = useState("")
    const [show,setShow] = useState(true)
    const [pointTotal,setPointTotal] = useState(0)
    
    const handleChange =(e)=>{
        setName(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault()
        statePoint()
        setShow(false)
    }

    const statePoint =async()=>{
        console.log(name)
        const response = await fetch(import.meta.env.VITE_API_URL+"/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name
            })
        
        })
        const jsonData = await response.json()
        setPointTotal(jsonData.total_points)
    }
    return(
        <div>
            {
                (show) ? 
                    <div>
                        <ModalUsername 
                        handleChange={handleChange}
                        submit={submit}
                        name={name}/>
                    </div>
                    :
                    <VideoAndImage
                    pointTotal={pointTotal}
                    name={name}/>
                
            }
        </div>
    )

}
export default Home;