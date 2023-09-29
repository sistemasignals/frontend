import {useState,useEffect} from "react"


const SectionDescription = ({socket}) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("message", (data) => {
            console.log(data)
          setMessages([...messages, data.data]);
        });
        return () => {
          socket.off("message", () => {
            console.log("data event was removed");
          });
        };
      }, [socket, messages]);
      
    return(
        <div className="border-2 border-gray-300">
            <div className="p-2">
                <h1>Descripción</h1>
            </div>
            <div className="p-2">
                    {messages.map((message, ind) => {
                return <li 
                className="text-black" key={ind}>{message}</li>;
                })}
            </div>
        </div>
    )
}

export default SectionDescription;