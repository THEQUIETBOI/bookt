function init() {
  const mainContainer = document.createElement('div');
  mainContainer.className ='main-container';
  document.body.appendChild(mainContainer);

  const settingsPage = document.createElement('div');
  settingsPage.className = 'settings-page';
  mainContainer.appendChild(settingsPage);

  const settingsContainer = document.createElement('div');
  settingsContainer.className = 'settings-container';
  settingsPage.appendChild(settingsContainer);

const apiKey = document.createElement('input');
  apiKey.type = 'text';
  apiKey.className = 'api-key';
  apiKey.placeholder = 'API KEY HERE';
  settingsContainer.appendChild(apiKey);

const Prompt = document.createElement('input');
  Prompt.type = "text";
  Prompt.className = 'prompt';
  Prompt.placeholder = 'Type your prompt here...';
  settingsContainer.appendChild(Prompt);

  const close = document.createElement('button');
  close.className = 'close-button';
  close.innerHTML = 'Close';
  settingsContainer.appendChild(close);

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'buttons-container';
  mainContainer.appendChild(buttonContainer);
  
  
const chatContainer = document.createElement('div');
  chatContainer.className = 'chat-container';
  mainContainer.appendChild(chatContainer);



const menuContainer = document.createElement('div');
  menuContainer.className ='me-container';
  mainContainer.appendChild(menuContainer);

  const menuContainerButtons = document.createElement('div');
  menuContainerButtons.className ='menu-container-buttons';
  menuContainer.appendChild(menuContainerButtons);

  const add = document.createElement('button');
  add.id = 'add';
  menuContainerButtons.appendChild(add);

  const ChatInput = document.createElement('input');
  ChatInput.type = "text";
  ChatInput.className = "chat-input";
  ChatInput.placeholder = "Type here...";
  menuContainerButtons.appendChild(ChatInput);

  const menuBar = document.createElement('div');
  menuBar.className = 'menu-bar';
  menuContainerButtons.appendChild(menuBar);

  const settingsButton = document.createElement('button');
  settingsButton.className ='settings';
settingsButton.innerHTML = "⚙️";
  menuBar.appendChild(settingsButton);


  const settingsLabel = document.createElement('label');
  settingsLabel.className = 'custom-file-upload';
  settingsLabel.for = 'hide';
  menuBar.appendChild(settingsLabel);


  const fileUpload = document.createElement('input');
  fileUpload.type = 'file';
  fileUpload.id = 'hide';
  settingsLabel.appendChild(fileUpload);


const stylesheet = document.createElement('style');
  document.head.appendChild(stylesheet);

  



  const marcopolo = document.createElement("script");
  marcopolo.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
  document.head.appendChild(marcopolo);
 

  
  settingsButton.onclick = () => {
    settingsPage.style.visibility = "visible";
  };
  close.onclick = () => {
    settingsPage.style.visibility = "hidden";
  };
  stylesheet.innerHTML = `
 
.main-container {
    background-color: #3d425c;
     right:0;
     bottom: 0;
    height: 410px;
    min-height: 200px;
    width: 300px;
    position: fixed; /* Or absolute, depending on your needs */
    overflow-y: auto;
    resize: both;
    border-radius: 5%;
    min-width: 300px;
    max-width: 1000px;
    border: 1px solid #ccc; /* Add a border for better visibility */
    z-index: 1000;
}

.buttons-container {
   background-color: rgb(78, 78, 78);
    width: 100%; 
    height: 40px;
    position: absolute;
    justify-content: center;
    display: flex;
    padding: 5px; 
    box-sizing: border-box; 
}



.chat-container {
    background-color:#3d425c;
    height: calc(100% - 90px); 
    width: 100%; 
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box; 
    padding: 10px;
}


.botmessage {
    color: rgb(255, 255, 255);
    font-family: 13px "monospace"; 
    font-weight: 600;
    background-color: rgb(32, 32, 32);
    border-radius: 10px;
    margin-top: 30px;
    padding: 15px;
    overflow-wrap: break-word; 
}


.usermessage {
    color: rgb(255, 255, 255);
    font-weight: 600;
    background-color: rgb(32, 32, 32);
    border-radius: 10px;
 margin-top: 30px;
 padding: 15px;

}
.me-container {
    height: 20px;
    background-color: #3d425c;
    box-sizing: border-box; 
    padding: 5px;
    border-radius: 10px;
    display: flex;          
    flex-direction: row;
    justify-content: center;
    align-items: center;  
    
}
.menu-container-buttons{
    background-color: gray;
    position: relative;
    display:flex;
    justify-content:center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 50px;
    border: 4px solid tan;

}

.me-container input[type="text"] {
    height: 100%;
    outline: none;
    padding: 5px;
    border: 1px tan solid;
    background-color: #242424;
    color: rgb(255, 255, 255);
    border-radius: 10px;
}

.me-container #add {
    border-radius: 100%; 
    background-image: url("https://www.svgrepo.com/show/2087/plus.svg");
    background-color: transparent; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    border: none; 
    padding:10px; 
    cursor: pointer; 
    user-select: none;
}





.menu-bar{
    height: 100px;
    width: 40px;
    border-radius: 30px;
    position: absolute;
    justify-items: center;
    align-content: center;
    opacity: 0%;
    left: 0;
    bottom: 70px;
    background-color: gray;
    z-index: 1000;



}

.menu-bar button {
    display: flex;
    justify-content: center;
    align-items: center;

}

#add:focus ~ .menu-bar {
    height: 100px;
    display: block;
    width: 40px;
    border-radius: 30px;
    position: absolute;
    opacity: 100%;
    bottom: 70px;
    background-color: gray;

}

.settings{
background-image: url("https://www.svgrepo.com/show/10207/settings.svg");
background-position: center;
background-repeat: no-repeat;
background-size: contain;
    position: relative;
    display: flex;
    padding: 10px;
    width: 30px;
    height: 30px;
    border-color: transparent;
    background-color: transparent;
}

.settings:hover {
    background-color: #ccc;
}
.settings-page{
    position: absolute;
    background-color: rgb(46, 46, 46);
width: 100%;
height: 60%;
visibility:hidden;

}
.settings-page.active{
    visibility:visible;
    
}

.settings-content {
    color: white;
    font-size: 25px;
    padding-top: 50px;
    padding-left: 20px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.settings-container {
    
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin: 60px;
    
}



.custom-file-upload {
   
background-image: url("https://www.svgrepo.com/show/28557/upload-sign.svg");
background-position: center;
background-repeat: no-repeat;
background-size: contain;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 30px;
    height: 30px;

    border-color: transparent;
    background-color: transparent;
}

.custom-file-upload:hover {
    background-color: #ddd; 
}

.custom-file-upload input[type="file"] {  
    display: none;
}


p code {
    background-color: rgb(78, 78, 78);
display: inline-block;
color: rgb(228, 228, 228);
padding: 10px;
font-family: 'Times New Roman', Times, serif;

}
p{ 
    overflow: auto;
    padding: auto;
    overflow-wrap: break-word;
}


  `;

 


  function handlePointerDown(e) {
    e.preventDefault();
    isDragging = true;

    if (e.type === "touchstart") {
      offsetX = e.touches[0].clientX - menuContainer.offsetLeft;
      offsetY = e.touches[0].clientY - mainContainer.offsetTop;
    } else {
      offsetX = e.clientX - mainContainer.offsetLeft;
      offsetY = e.clientY - mainContainer.offsetTop;
    }

    document.addEventListener("mousemove", handlePointerMove);
    document.addEventListener("touchmove", handlePointerMove);
    document.addEventListener("mouseup", handlePointerUp);
    document.addEventListener("touchend", handlePointerUp);
    document.addEventListener("mouseleave", handlePointerUp);
  }

  function handlePointerMove(e) {
    if (!isDragging) return;

    let x, y;
    if (e.type === "touchmove") {
      x = e.touches[0].clientX - offsetX;
      y = e.touches[0].clientY - offsetY;
    } else {
      x = e.clientX - offsetX;
      y = e.clientY - offsetY;
    }

    mainContainer.style.left = `${x}px`;
    mainContainer.style.top = `${y}px`;
  }

  function handlePointerUp() {
    isDragging = false;
    document.removeEventListener("mousemove", handlePointerMove);
    document.removeEventListener("touchmove", handlePointerMove);
    document.removeEventListener("mouseup", handlePointerUp);
    document.removeEventListener("touchend", handlePointerUp);
    document.removeEventListener("mouseleave", handlePointerUp);
  }

  buttonContainer.addEventListener("mousedown", handlePointerDown);
  buttonContainer.addEventListener("touchstart", handlePointerDown);
  const hide = document.getElementById("hide");
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "e") {
      if (document.activeElement !== text) {
        mainContainer.classList.toggle("hidden");
      }
    }

    ChatInput.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        const userInput = ChatInput.value.trim(); // Store and trim user input

        if (userInput !== "") {
          ChatInput.value = ""; // Clear input immediately

          const userMessage = document.createElement("p");
          userMessage.className = "userMessage";
          userMessage.textContent = "You: " + userInput;
          chatContainer.appendChild(userMessage);
          chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll immediately after adding user message

          const botMessage = document.createElement("p"); // Create bot message element *before* the API call
          botMessage.className = "botMessage";
          botMessage.textContent = "Bot: Thinking..."; // Indicate that the bot is processing
          chatContainer.appendChild(botMessage);
          chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll after adding placeholder
          fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
              localStorage.getItem("key"),
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                system_instruction: {
                  parts: [{ text: Prompt.value }]
                },

                contents: [
                  {
                    parts: [{ text: userInput }]
                  }
                ]
              })
            }
          )
            .then((response) => response.json())
            .then((data) => {
              chatContainer.removeChild(botMessage);
              if (
                data.candidates &&
                data.candidates.length > 0 &&
                data.candidates[0].content
              ) {
                const botResponse = data.candidates[0].content.parts[0].text
                  .toString()
                  .trim();
                const botMessage = document.createElement("p");
                botMessage.className = "botMessage";
                const parsedResponse = marked.parse(botResponse);

               
                {
                  botMessage.innerHTML = "Bot: " + parsedResponse;
                  console.log("not found");
                }

                chatContainer.appendChild(botMessage);
                ChatInput.value = ""; // Clear input
                chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
              } else {
                // Handle cases where the API doesn't return a valid response
                alert(console.error("Invalid API response:", data));

                const errorMessage = document.createElement("p");
                errorMessage.className = "botMessage error";
                errorMessage.textContent = "Error: Could not get a response.";
                chatContainer.appendChild(errorMessage);
                ChatInput.value = "";
                chatContainer.scrollTop = chatContainer.scrollHeight;
              }
            })
            .catch((error) => {
              console.error("API request failed:", error);
              const errorMessage = document.createElement("p");
              errorMessage.className = "botMessage error";
              errorMessage.textContent = "Error: API request failed.";
              chatContainer.appendChild(errorMessage);
              ChatInput.value = "";
              chatContainer.scrollTop = chatContainer.scrollHeight;
            });
        }
      }
    });

    apiKey.onchange = () => {
      alert("updated key");
      if (localStorage.getItem("key")) {
        // Key already exists, update it
        localStorage.setItem("key", apiKey.value);
        console.log("API key updated in localStorage.");
      } else {
        // Key doesn't exist, create it
        localStorage.setItem("key", apiKey.value);
        console.log("API key created in localStorage.");
      }
    };

    Prompt.onchange = () => {
      alert("updated prompt");
    };
  });
}

init();
