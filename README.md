# How to run this JWT-UI in local

1. Make sure you have JWT Node server(backend) running in your local system at port 4000, the node server we have already learned in the 2nd-part of the article. If you have not went through that then please go throgh that article first, clone the node repo from here: [JWT-Register-Login-Node-Server](https://github.com/javedinfinite/JWT-Register-Login-Node-Server), follow the readme file of that repo and run it and come back.

2. Clone this repo [jwt-ui](https://github.com/javedinfinite/jwt-ui).

3. Run this command using terminal in the root directory of this project.
 < `npm i` > . This will install all node modules required to run the project.


4. Run this command using terminal in the root directory of this project.
 < `npm start` > . This will start your react app at port 3002, so make sure no other app is running at this port, if running then close that app for the time being else you will have to change the port in node as well as react. 
 * Since our app is running at 3002 port, open the app in the browser by pasting this link in the browser http://localhost:3002/. 
* In case when you click on **Top Hackers**  tab (i.e. at route http://localhost:3002/#/tophackers) and then the page keeps loading with circular animation for say more than 30 seconds then please reload the page, it should solve that and redirect you to login page http://localhost:3002/#/login.
