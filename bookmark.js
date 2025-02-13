function init() {
  const main = document.createElement("div");
  const button = document.createElement("div");
  const chat = document.createElement("div");
  const me = document.createElement("div");
  const text = document.createElement("input");
  text.type = "text";

  main.style = `
    background-color: rgba(128, 128, 128, 0.95);
    height: 410px;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    z-index: 2147483647;
        box-shadow: -2px 0 5px rgba(0,0,0,0.2);

  `;

button.style = `

position: fixed;
background-color: purple;
width: 300px;
    height: 50px;
    z-index: 214748364799999999999999999;

`




  chat.style = `
  position: absolute;
    background-color: cornflowerblue;
    height: 400px;
    width: 300px;
    overflow-y: auto;

`;

  me.style = `
position: fixed;
    width: 300px;
    height: 50px;
    background-color: rgb(33, 255, 4);
    top: 399px;
    right: 0;
    padding: 3px;


`;

  text.style = `
width: 100%;
height: 100%;
border: none;`;

  document.body.appendChild(main);
  main.appendChild(button);
  main.appendChild(chat);
  main.appendChild(me);
  me.appendChild(text);
}

init();
