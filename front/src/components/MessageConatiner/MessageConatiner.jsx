import { useEffect } from "react";
import useConversation from "../../context/ConversationContect";
import Messages from "../messages/Messages";
import MessageInput from "./messageinput/MessageInput";
import { TiMessage } from "react-icons/ti";

const MessageConatiner = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  useEffect(() => {
    //clean up
    return() => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className="md:min-w-[700px] flex flex-col">
      <>
        {!selectedConversation? (
          <NoChatSelected />
        ) : (
          <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">To: -{">"}</span>
              <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
      </>
    </div>
  );
};

export default MessageConatiner;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full  h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome @ peter kiruhi</p>
        <p>Select a chat to start messaging</p>
        <TiMessage className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
