Complete MERN Authentication: JWT, OTP Verification (Email & Phone), Password Reset, Automation

=>Backend
   =>npm init -y
    =>npm i express mongoose dotenv bcrypt jsonwebtoken nodemailer twilio cors cookie-parser 
       =>cookie-parser: for automatically parsing cookies from the request headers 
       => twilio: for sending OTP to phone numbers
   * => cls commmand for clear the terminal
=>change in package.json 
  "scripts": {
   "start": "node server.js",
   "dev": "nodemon server.js"
  },
If we are using npm run start its start node server.js and if we are using npm run dev its start nodemon server.js

=> create server.js file
  import express , env, cookies-parser.
  =>also call all the required packages in server.js file

=>Data Format: express.json() handles JSON, while express.urlencoded() handles URL-encoded data.
Use Case: Use express.json() for APIs and express.urlencoded() for form submissions or URL-encoded data.

=>create a folder database and create a file dbConnection and connect to the database 