import {useState,useEffect} from "react"
import WebSocketCall from "./WebSocketCall";
import {io} from "socket.io-client";


const Socket =()=>{

    const [socketInstance, setSocketInstance] = useState("");
    const [loading, setLoading] = useState(true);
    const [buttonStatus, setButtonStatus] = useState(false);
    const [state,setState] = useState(null)
    
    const handleClick = () => {
      if (buttonStatus === false) {
        setButtonStatus(true);
      } else {
        setButtonStatus(false);
      }
    };

    useEffect(() => {
        if (buttonStatus === true) {
          const socket = io("ws://localhost:5001");
          setSocketInstance(socket);
          console.log(socket)
          setLoading(false)
          return function cleanup() {
            socket.disconnect();
          };
        }
      }, [buttonStatus]);
    

    return(
        <div className="App">
        <h1>React/Flask App + socket.io</h1>
        {!buttonStatus ? (
          <button onClick={handleClick}>turn chat on</button>
        ) : (
          <>
            <button onClick={handleClick}>turn chat off</button>
            <div className="line">
              {!loading && <WebSocketCall socket={socketInstance} />}
            </div>
          </>
        )}
      </div>
    )
}
export default Socket;