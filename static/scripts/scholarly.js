let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}
    // Define a simple object to store username-password pairs
    var users = {
      "pooxieuser": "iamnotafuckingitadmin",
      "pooxieadmin": "adminsricky",
      // Add more users as needed
    };

    function authenticateUser() {
      // Prompt the user for a username and password
      var username = prompt("Did you learn Algebra User++ with Happy numbers?");
      var password = prompt("Are you our favorite password?");

      if (username === null || password === null || users[username] !== password) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      } else {
        alert("Login successful!");

        // Redirect to authindex.html for all users
        window.location.href = "authindex.html";

        // Check if the user is pooxieadmin and redirect to /dev/
        if (username === "pooxieadmin") {
          window.location.href = "/dev/";
        }
      }
    }

    window.onload = authenticateUser;

// Cloaking Code
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("Popups make you learn!")
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
