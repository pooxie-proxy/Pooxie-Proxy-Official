let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}
    // Define a simple object to store username-password pairs
    var users = {
      "user1": "password1",
      "user2": "password2",
      // Add more users as needed
    };

    function authenticateUser() {
      // Prompt the user for a username and password
      var username = prompt("Please enter your username:");
      var password = prompt("Please enter your password:");

      // Check if the entered username and password are valid
      if (username === null || password === null || users[username] !== password) {
        // If the user cancels or enters incorrect credentials, redirect to the specified link
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      } else {
        // If the credentials are correct, show a success message
        alert("Login successful!");
      }
    }

    // Call authenticateUser when the body of the document has loaded
    window.onload = authenticateUser;

// Cloaking Code
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("Please allow popups and redirects.")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "My Drive - Google Drive";
        const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
        
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        
        iframe.src = location.href 
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe)
        location.replace("https://docs.google.com")
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    if(window.localStorage.getItem("v4Particles") == "true") {
      const scr = document.createElement("script");
      scr.src="/scripts/academia.js";
      document.body.appendChild(scr);
    }
  });
