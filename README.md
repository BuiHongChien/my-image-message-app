# Image message app
##### This is a simple app to convert your message to image
##### This project made with [MERN](https://www.geeksforgeeks.org/mern-stack/) stack:

![alt text](https://miro.medium.com/max/2560/1*k0SazfSJ-tPSBbt2WDYIyw.png)

> **[MongoDB](https://www.mongodb.com/what-is-mongodb):** *A document-oriented, No-SQL database used to store the application data.*

> **[ExpressJS](https://expressjs.com/):** *A framework layered on top of NodeJS.*

> **ReactJS:** *A library created by Facebook. It is used to build UI components that create the user interface of the single page web application.*

> **[NodeJS](https://reactjs.org/):** *The JavaScript runtime environment. It is used to run JavaScript on a machine rather than in a browser.*

![alt text](https://www.educative.io/api/edpresso/shot/5266982947520512/image/6392882854363136)


### This project includes:
- User Login
- User Register
- Convert text to image

### Basic working of this app:
1. When user registers a new account with a message. The message will be converted to an image and displayed when user login.
2. When user enters email and password and when both of them are correct in login form we return an access token.
<<<<<<< HEAD
3. This access token is stored in [localstorage](https://www.robinwieruch.de/local-storage-react) of the browser.
4. If access token is present - > we verify that access token and redirect user to the home with image page.
5. If access token is not present - > we keep user on the same page.

> **[JWT](https://jwt.io/introduction/):** *Json Web Token it is a libray to generate random token it has 2 function jwt.sign() to create token and jwt.verify() to verify*

> **[Bcrypt](https://medium.com/front-end-weekly/how-to-create-a-simple-authorization-login-using-bcrypt-react-and-ajax-d71ed919f5cb):** *Library to hash passwords, I've used two functions in this project bcrypt.hash() to hash password and bcrypt.compare to compare string with hashed password.*
=======
3. This access token is stored in localstorage of the browser.
4. If access token is present - > we verify that access token and redirect user to the home with image page.
5. If access token is not present - > we keep user on the same page.

> **JWT:** *Json Web Token it is a libray to generate random token it has 2 function jwt.sign() to create token and jwt.verify() to verify*

> **Bcrypt:** *Library to hash passwords, I've used two functions in this project bcrypt.hash() to hash password and bcrypt.compare to compare string with hashed password.*
>>>>>>> 89deca0a7d29d45e2d659be10a50d861c20e99a3

### How to run:
- Backend:
1. Create your data on [Mongodb](https://cloud.mongodb.com/) site.
2. Connect your data with your project.
3. Run: `nodemon index`.
- Frontend:
1. Create your react project

`npx create-react-app my-image-message-app`

`cd my-image-message-app`

`npm start`

### Demo-GIF:
![alt text](https://github.com/BuiHongChien/my-image-message-app/blob/develop/message-app-demo.gif)
<<<<<<< HEAD



=======
>>>>>>> 89deca0a7d29d45e2d659be10a50d861c20e99a3
