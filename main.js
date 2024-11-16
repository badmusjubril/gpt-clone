// const chatInput = document.querySelector("#chat-input");
// const sendButton = document.querySelector("#send-btn");
// const chatContainer = document.querySelector(".chat-container");
const themeButton = document.querySelector("#theme-btn");

// let userText = null;

// const createElement =  (html, className) => {
//     const chatDiv = document.createElement("div");
//     chatDiv.classList.add("chat",className);
//     chatDiv.innerHTML = html;
//     return chatDiv;
// }

// const handleOutgoingChat = () => {
//     userText = chatInput.value.trim();

//     const html = `<div class="chat-content">
//                 <div class="chat-details">
//                     <img src="user.jpg" alt="">
//                     <p>${userText}</p>
//                 </div>
//             </div>`;

//     const  outgoingChatDiv =  createElement(html, "outgoing");
//     chatContainer.appendChild(outgoingChatDiv);
// }

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode"
})

sendButton.addEventListener("click", handleOutgoingChat);


function myFunction () {
    alert("Hello! this is a send button")
}
 
// const copyResponse = (copyBtn) => {
//     const responseTextElement = copyBtn.parentElement.querySelector("p");
//     navigator.clipboard.writeText(responseTextElement.textContent);
//     copyBtn.textContent = "done";
//     setTimeout (() => copyBtn.textContent = "content_copy",1000)
// }


// const showTypingAnimation = () => {
//     const html = `<div class="chat incoming">
//             <div class="chat-content">
//                 <div class="chat-details">
//                     <img src="chatbot.jpg" alt="">
//                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
//                 </div>
//                 <span onclick="copyResponse(this)" class="material-symbols-rounded">content_copy</span>
//             </div>
//         </div>`;
// }




