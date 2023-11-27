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
import axios from 'axios';

const systemMessage = {
  "role": "Doctor",
  "content": "Explain the symptoms to the client in a way an average person can understand"
};

// type Props = {};

// type MessageType = {
//   message: string;
//   direction?: 'incoming' | 'outgoing';
//   sender: string;
//   sentTime?: string;
//   position?: any;
//   model?: any;
//   role?: 'system' | 'user' | 'assistant'
// };

function Chat({ }) {
  // const Chat: React.FC<Props> = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I&apos;m Doctor Alex! <br /> Ask me anything about your health!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
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

    const user_input = [{systemMessage,
        ...apiMessages}]

        const response = await fetch("https://symptoms-ai.onrender.com/api/gpt3-api/", {
          method: "Post",
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify(user_input)
      }).then((data) => {
          return data.json();
        }).then((data) => {
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]);
          setIsTyping(false);
        });

// }

    // await fetch("https://symptoms-ai.onrender.com/api/gpt3-api/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(user_input)
    // }).then((data) => {
    //   return data.json();
    // }).then((data) => {
    //   setMessages([...chatMessages, {
    //     message: data.choices[0].message.content,
    //     sender: "ChatGPT"
    //   }]);
    //   setIsTyping(false);
    // });
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
                return <Message key={i} model={message} />
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
