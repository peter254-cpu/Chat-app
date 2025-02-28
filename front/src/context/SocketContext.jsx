import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUser, setOnlineUser] = useState([])
    const { authUser }  = useAuthContext()
    useEffect(() => {
        if(authUser){
            const socket = io("https://chat-app-8wf6.onrender.com", {
                query:{
                    userId: authUser._id
                }
            })
            setSocket(socket)
            socket.on("getOnlineUsers", (users) => {
                setOnlineUser(users)
            })
            return () => socket.close()
        }else{
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    })
    return (
        <SocketContext.Provider value={{socket, onlineUser}}>
            {children}
        </SocketContext.Provider>
    );
};
