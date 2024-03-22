// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import io from "socket.io-client";

// const socket = io("http://localhost:4000"); // Connect to the socket.io server

// const Chatsection = () => {
//     const location =useLocation();
//     const {userId,lawyerId}=location?.state;
//     console.log("this is a user id and lawyerid "+userId+"  "+ lawyerId)

//   const [selectedLawyer, setSelectedLawyer] = useState(null);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // Listen for incoming messages
//     socket.on("receive-message", ({ senderId, message }) => {
//       setMessages((prevMessages) => [...prevMessages, { senderId, message }]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const handleChatInitiation = (lawyerId) => {
//     setSelectedLawyer(lawyerId);
//     socket.emit("user-connected", "user123");
//     socket.emit("initiate-chat", { userId: "user123", lawyerId });
//   };
//   const handlechatlayerinitation=(laywer)=>{
//     socket.emit("lawyer-connected",laywer);

//   }

//   const sendMessage = () => {
//     if (selectedLawyer && message.trim() !== "") {
//       socket.emit("send-message", {
//         senderId: "user123",
//         receiverId: selectedLawyer,
//         message
//       });
//       setMessage("");
//     }
//   };

//   return (
//     <div>
//       <h2>Chat App</h2>
//       <div>
//         <h3>Select a Lawyer to Chat:</h3>
//         <ul>
//           <li>
//             <button onClick={() => handleChatInitiation("lawyer1")}>
//               Lawyer 1
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleChatInitiation("lawyer2")}>
//               Lawyer 2
//             </button>
//           </li>
//           {/* Add more lawyers here */}
//         </ul>
//       </div>
//       {selectedLawyer && (
//         <div>
//           <h3>Chatting with Lawyer {selectedLawyer}</h3>
//           <div>
//             {messages.map((msg, index) => (
//               <p key={index}>
//                 {msg.senderId === "user123" ? "You" : `Lawyer ${selectedLawyer}`}:{" "}
//                 {msg.message}
//               </p>
//             ))}
//           </div>
//           <div>
           
//           </div>
//         </div>
//       )}
//        <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button onClick={sendMessage}>Send</button>
//       <button onClick={handlechatlayerinitation("lawyer1")}>connectjudge</button>
//     </div>
//   );
// };

// export default Chatsection;
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // Connect to the socket.io server

const Chatsection = () => {
    const location = useLocation();
    const { userId, lawyerId } = location?.state;
    console.log("this is a user id and lawyerid " + userId + "  " + lawyerId);

    const [selectedLawyer, setSelectedLawyer] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Listen for incoming messages
        socket.on("receive-message", ({ senderId, message }) => {
            setMessages((prevMessages) => [...prevMessages, { senderId, message }]);
        });
        

        return () => {
            socket.disconnect();
        };
    }, []);

    const handleChatInitiation = (lawyerId) => {
        setSelectedLawyer(lawyerId);
        socket.emit("user-connected", userId); // Use userId from state
        socket.emit("initiate-chat", { userId, lawyerId }); // Use userId from state
    };

    const sendMessage = () => {
        if (selectedLawyer && message.trim() !== "") {
            socket.emit("send-message", {
                senderId: userId, // Use userId from state
                receiverId: selectedLawyer,
                message
            });
            setMessage("");
        }
    };

    return (
        <div>
            <h2>Chat App</h2>
            <div>
                <h3>Select a Lawyer to Chat:</h3>
                <ul>
                    <li>
                        <button onClick={() => handleChatInitiation("lawyer1")}>
                            Lawyer 1
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleChatInitiation("lawyer2")}>
                            Lawyer 2
                        </button>
                    </li>
                    {/* Add more lawyers here */}
                </ul>
            </div>
            {selectedLawyer && (
                <div>
                    <h3>Chatting with Lawyer {selectedLawyer}</h3>
                    <div>
                        {messages.map((msg, index) => (
                            <p key={index}>
                                {msg.senderId === userId ? "You" : `Lawyer ${selectedLawyer}`}:{" "}
                                {msg.message}
                            </p>
                        ))}
                    </div>
                    <div>

                    </div>
                </div>
            )}
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatsection;
