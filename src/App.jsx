import SectionDescription from './components/SectionDescription'
import SectionVideo from './components/SectionVideo'
import Socket from './components/socket'
import {useEffect,useState} from "react"
import {io} from "socket.io-client";

function App() {

  const [socketInstance, setSocketInstance] = useState("");
  const [loading,setLoading] = useState(true)
  useEffect(() => {
      const socket = io("ws://localhost:5001");
      setSocketInstance(socket);
      setLoading(false)
      console.log(socket)
      return function cleanup() {
        socket.disconnect();
      };
  }, []);

  return (
    <>
      <div className='max-w-screen-xl m-auto mt-10 
      '>
      <div className='grid 
      grid-cols-1
      gap-10
      md:grid-cols-2'>
        <SectionVideo/>
        {
          !loading && (
            <SectionDescription socket={socketInstance}/>
          )
        }
      </div>
      {/* <Socket/> */}
      </div>
    </>
  )
}

export default App
