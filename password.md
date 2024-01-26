To provent silly assholes like IT admins, we force password protection on all links.
# <br>By default the username to access the proxy is 'pooxieuser' and the password 'iamnotafuckingitadmin'<br>
# How to change (Yes, we recomend it)
1. Go to /static/scripts/scholary.js
2. At the top you should see some javascript in between <script> tags
3. Where you see
   var users = {
      "pooxieuser": "iamnotafuckingitadmin",
      "pooxieadmin": "",
      // Add more users as needed
    };
   Change 'pooxieuser' to your username and 'iamnotafuckingitadmin' to your password
   YOU CAN ADD MULTIPLE USER ACCOUNTS BY COPYING AND PASTING THE POOXIEUSER LINE UNDER THE POOXIEADMIN LINE
