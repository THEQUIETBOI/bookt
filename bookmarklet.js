javascript: (function () {
  const CDN_URL =
    "https://raw.githubusercontent.com/THEQUIETBOI/bookt/refs/heads/main/wowwww.html";
  if (CDN_URL) {
    fetch(CDN_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((iframeContent) => {
        var iframe = document.getElementById("myIframe");
        if (!iframe) {
          iframe = document.createElement("iframe");
          iframe.id = "myIframe";
          iframe.style.position = "relative";
          iframe.style.top = "10px";
          iframe.style.right = "10px";
          iframe.style.width = "320px";
          iframe.style.height = "455px";
          iframe.style.border = "1px solid #000";
          iframe.style.zIndex = "9999";
          document.body.appendChild(iframe);
        }
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(iframeContent);
        iframeDoc.close();
      })
      .catch((error) => {
        console.error("Error details:", error);
      });
  }
})();
