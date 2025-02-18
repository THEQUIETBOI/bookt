document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const mainContainer = document.querySelector(".main-container");
  const moveButton = document.getElementById("button-container");
  const chat = document.getElementById("chat");
  const put = document.getElementById("p");
const prompt = document.getElementById("prompt");
  let isDragging = false;
  let offsetX, offsetY;

const prompts = null;

prompt.onchange = (e) => {
prompts = e.value
}
  
  put.addEventListener("change", (e) => { 

   e = window.btoa(put.value);
   console.log(e)
   localStorage.setItem("key", e);
  })


  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const userInput = input.value;
      const userMessage = document.createElement("p");
      userMessage.className = "userMessage";
      userMessage.textContent = `You: ${userInput}`;
      chat.appendChild(userMessage);

      fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
          window.atob(localStorage.getItem("key").toString()),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            system_instruction: {
parts: [{text: prompt.value}]
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
          if (
            data.candidates &&
            data.candidates.length > 0 &&
            data.candidates[0].content
          ) {
            // Convert response to string and clean it
            const botResponse = data.candidates[0].content.parts[0].text
              .toString()
              .trim();
            // Create user message

            // Create bot message
            const botMessage = document.createElement("p");
            botMessage.className = "botMessage";
            const parsedResponse = marked.parse(botResponse);

            if (parsedResponse.includes("<code>")) {
              // Create a div to wrap code elements
              const codeWrapper = document.createElement("div");
              codeWrapper.className = "code-wrapper";
              codeWrapper.innerHTML = parsedResponse;
              botMessage.innerHTML = "Bot: ";
              botMessage.appendChild(codeWrapper);
            } else {
              botMessage.innerHTML = "Bot: " + parsedResponse;
            }
            console.log(parsedResponse);
            chat.appendChild(botMessage);

            // Clear input
            input.value = "";

            // Scroll to bottom
            chat.scrollTop = chat.scrollHeight;
          }
        });
    }
  });

  function handlePointerDown(e) {
    e.preventDefault();
    isDragging = true;

    if (e.type === "touchstart") {
      offsetX = e.touches[0].clientX - mainContainer.offsetLeft;
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

  moveButton.addEventListener("mousedown", handlePointerDown);
  moveButton.addEventListener("touchstart", handlePointerDown);
  const hide = document.getElementById("hide");
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "e") {
      if (document.activeElement !== input) {
        mainContainer.classList.toggle("hidden");
      }
    }
  });

 
 
  const settingsButton = document.getElementById('settings'); // Get the settings button
const settingsPage = document.querySelector('.settings-page');

settingsButton.addEventListener('click', () => {
  settingsPage.classList.toggle('active'); // Toggle the 'active' class
});



// Close settings if click is outside the settings area
document.addEventListener('click', (event) => {
  if (!settingsPage.contains(event.target) && event.target !== settingsButton) {
      settingsPage.classList.remove('active');
  }
});



});