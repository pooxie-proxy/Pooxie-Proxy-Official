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
