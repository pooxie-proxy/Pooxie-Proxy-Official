# Pooxie Proxy Password/login Protection
<br>Every afraid that your pooxie proxy link might've been leaked? We feel you, and you can protect yourself more with password protection, enabled by default you can set up a list of custom usernames and passwords for you and your friends to use, without even needing to code!
- To begin, navigate to your scholary.js file. Unless you moved it, it should be located in /static/scripts/scholary.js
- You will find the option to disable/enable password protection, unless you want otherwise this should be on
- Below you should find a list of users
- Simply add on a new line `"YOUR_USERNAME_HERE":"YOUR_PASSWORD_HERE",`
- Wait a little bit for your link to deploy and your set!
# Discord webhook alerts (BETA, may not work)
<br>Want to know when someone is accessing your link? You can turn on discord webhook alerts to recieve alerts straight into your discord server!
- Create a new webhook in your discord server settings (Settings/Intergrations/Webhooks/Create)
- Copy the webhook URL
- Go into your scholary.js file and change `enableWebhook` to `true`
- Then change `webhookURL` slightly below that to your webhook URL
- Wait for your link to deploy and you should recieve alerts in your discord server (If this feature does not work please report a issue)
