// import React, { useState } from 'react'

// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

// const API_KEY = "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";
// // "Explain things like you would to a 10 year old learning how to code."
// const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
// //   "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
//   "role": "Doctor", "content": "Explain the symptoms, to the client, a way an avrage people can understand"
// }

// type Props = {}
// type MessageType = {
//     message: string;
//     direction: 'incoming' | 'outgoing'; // Assuming direction can be either 'incoming' or 'outgoing'
//     sender: string;
//     sentTime?: string;
//   };

// function chat({}: Props) {
//     const [messages, setMessages] = useState([
//         {
//           message: "Hello, I'm Doctor Alex! Ask me anything about your health!",
//           sentTime: "just now",
//           sender: "ChatGPT"
//         }
//       ]);
//       const [isTyping, setIsTyping] = useState(false);

//       const handleSend = async (message:string) => {
//         const newMessage:MessageType = {
//           message,
//           direction: 'outgoing',
//           sender: "user"
//         };

//         const newMessages:MessageType = [...messages, newMessage];

//         setMessages(newMessages);

//         // Initial system message to determine ChatGPT functionality
//         // How it responds, how it talks, etc.
//         setIsTyping(true);
//         await processMessageToChatGPT(newMessages);
//       };

//       async function processMessageToChatGPT(chatMessages:any) { // messages is an array of messages
//         // Format messages for chatGPT API
//         // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
//         // So we need to reformat

//         let apiMessages = chatMessages.map((messageObject:any) => {
//           let role = "";
//           if (messageObject.sender === "ChatGPT") {
//             role = "assistant";
//           } else {
//             role = "user";
//           }
//           return { role: role, content: messageObject.message}
//         });


//         // Get the request body set up with the model we plan to use
//         // and the messages which we formatted above. We add a system message in the front to'
//         // determine how we want chatGPT to act. 
//         const apiRequestBody = {
//           "model": "gpt-3.5-turbo",
//           "messages": [
//             systemMessage,  // The system message DEFINES the logic of our chatGPT
//             ...apiMessages // The messages from our chat with ChatGPT
//           ]
//         }

//         await fetch("https://api.openai.com/v1/chat/completions", 
//         {
//           method: "POST",
//           headers: {
//             "Authorization": "Bearer " + API_KEY,
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(apiRequestBody)
//         }).then((data) => {
//           return data.json();
//         }).then((data) => {
//           console.log(data);
//           setMessages([...chatMessages, {
//             message: data.choices[0].message.content,
//             sender: "ChatGPT"
//           }]);
//           setIsTyping(false);
//         });
//       }

//       return (
//         <div className="App">
//           <div style={{ position:"relative", height: "800px", width: "700px"  }}>
//             <MainContainer>
//               <ChatContainer>       
//                 <MessageList 
//                   scrollBehavior="smooth" 
//                   typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
//                 >
//                   {messages.map((message, i) => {
//                     console.log(message)
//                     return <Message key={i} model={message} />
//                   })}
//                 </MessageList>
//                 <MessageInput placeholder="Type message here" onSend={handleSend} />        
//               </ChatContainer>
//             </MainContainer>
//           </div>
//         </div>
//       )
// }

// export default chat





import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";

const systemMessage = {
  "role": "Doctor",
  "content": "Explain the symptoms to the client in a way an average person can understand"
};

type Props = {};

type MessageType = {
  message: string;
  direction?: 'incoming' | 'outgoing';
  sender: string;
  sentTime?: string;
};

function Chat({ }: Props) {
  // const Chat: React.FC<Props> = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      message: "Hello, I&apos;m Doctor Alex! <br /> Ask me anything about your health!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message: string) => {
    const newMessage: MessageType = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages: MessageType[] = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages: MessageType[]) {
    let apiMessages = chatMessages.map((messageObject: MessageType) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <div className="chat flex pt-[62px]">
      <div className="hidden md:inline sideBar h-auto max-w-[290px] bg-[#21262F] px-[24px] py-[46px] left-[0px] top-[0px]">
        <div className="headings flex flex-col gap-[16px]">
          <h3 className='bg-[#7CE797] text-[#05361E] px-[16px] py-[12px] rounded-[4px] '>Chat History</h3>
            <input type="text" placeholder='Search' className='rounded-[4px] bg-[#21262F] border border-[#7E8695] text-[#7E8695] py-[8px] px-[12px]' />
        </div>
      </div>
      <div style={{ position: "relative", height: "100%", width: "100%", paddingTop: "50px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="Doc is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput className="pt-[24px] px-[64px] pb-[56px] text-[#BFC6D4] border-[#BFC6D4] !important" placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default Chat;
