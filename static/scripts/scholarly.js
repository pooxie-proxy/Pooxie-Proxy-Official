// Set "false" to skip login screen (NOT RECOMENDED!!!)
var loginEnabled = "true"
// Config for discord webhook alerts when a user logs in (only successful logins are logged)
const enableWebhook = "false";
const webhookURL = "YOUR_WEBHOOK_URL_HERE";
// Cloaking code start
let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}
// Login Script
var users = {
    "pooxieuser": "iamnotafuckingitadmin",
    "sum": "summitmiddleschool",
    "hor": "horizonsk-8school",
    "sumner": "sumnermiddleschool",
    "cre": "creeksideelementryschool",
    "pooxieadmin": "adminsricky",
    // Add more users as needed
};

function authenticateUser() {
    // Retrieve username and password from input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are in the users object
    if (username in users && users[username] === password) {
        // Redirect to authindex.html for all users
        window.location.href = "authindex.html";
        sendEmbed(enableWebhook, webhookURL);
        // Check if the user is pooxieadmin and redirect to /dev/
        if (username === "pooxieadmin") {
            window.location.href = "/dev/";
        }
        if (username === "pooxieuser") {
            alert('A unknown error occured while connecting to the HappyNumbers bare server. Try logging in again. If the issue persists, please contact Happy Numbers support.')
            window.location.href = "index.html";
            
        }
    } else {
        // Invalid username or password, redirect to a different page
        alert('Invalid Class code or name (did you fill it out?), Get a teacher for help.')
    }
}

window.onload = function() {
    // You can add additional initialization here if needed
};


// Cloaking Code
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("Enable popups for the best math expirence!")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "Math centers that deliver | HappyNumbers.com";
        const icon = localStorage.getItem("icon") || "https://happynumbers.com/favicon.ico";
        
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
function sendEmbed(enableWebhook, webhookURL) {
    if (enableWebhook !== "true") {
        return;
    }

    const currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // Get user's IP address from an external service
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const userIP = data.ip;

        const embed = {
            title: "A new user has logged into your pooxie link",
            color: 16711680, // Red color
            fields: [
                { name: "IP Address", value: userIP },
                { name: "Time", value: currentTime }
            ]
        };

        const requestData = {
            embeds: [embed]
        };

        const request = new XMLHttpRequest();
        request.open("POST", webhookURL);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(requestData));

        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 204) {
                    console.log("Webhook sent successfully.");
                } else {
                    console.error("Failed to send webhook:", request.responseText);
                }
            }
        };
    })
    .catch(error => {
        console.error("Error fetching IP address:", error);
    });
}


