import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "../MessageConatiner/messages/Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
   const { messages, loading } = useGetMessages();
   const lastMessageRef = useRef();

   useEffect(() => {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
   }, [messages]);

   return (
      <div className="px-4 flex-1 overflow-auto">
         {!loading && 
           messages.length > 0 && 
           messages.map((message, index) => (
             <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
                <Message message={message} />
             </div>
           ))
         }
         {loading && (<MessageSkeleton />)}
         {!loading && messages.length === 0 && (
            <p className="text-center">Send a message to start a conversation</p>
         )}
      </div>
   );
};

export default Messages;
