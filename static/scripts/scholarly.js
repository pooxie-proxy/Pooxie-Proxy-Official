    var users = {
      "pooxieuser": "iamnotafuckingitadmin",
      "pooxieadmin": "sunscreenmassproduction",
      // Add more users as needed
    };

    function authenticateUser() {
      var username = prompt("What is the formula for finding the area of triangles (U)");
      var password = prompt("What is the formula for finding the volume of a mass of rectangular prisms (P)");

      if (username === null || password === null || users[username] !== password) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //Change this link to whatever the hell you want your IT admins or people who get the password wrong to get redirected to.
      } else {
        alert("Login successful!");
      }
    }

    function checkForAuthentication() {
      if (!localStorage.getItem("authenticated")) {
        authenticateUser();
      }
    }

    window.onload = checkForAuthentication;

    window.onbeforeunload = function () {
      // Save a flag in local storage indicating that the user has been authenticated
      localStorage.setItem("authenticated", "true");
    };
let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

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
