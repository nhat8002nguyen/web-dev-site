# NVHTeam | E-commerce react app

<img width="500" alt="Home" src="https://user-images.githubusercontent.com/58263449/144641955-8d10f57e-1090-4ab1-ada4-466d98ca5f8b.png">
![Salinaka screenshot](https://raw.githubusercontent.com/jgudo/ecommerce-react/master/static/screeny7.png)

## Run Locally
### 1. Install Dependencies
```sh
$ npm install
```

### 2. Create a env file with firebase configuration:

Create an `env` file - Set filename`.env.prod` file for production and `.env.dev`for development and save it in the root of your project folder
and add the following configuration details. You can either use the same configuration details for both development and production but it's best to make separate projects.

```
// Create a file name .env.dev, and copy the following config:

FIREBASE_API_KEY=AIzaSyBp0rtKDgRsxxa0sgRb68aP9PJ-67KYL6c
FIREBASE_AUTH_DOMAIN=web-dev-site-133c6.firebaseapp.com
FIREBASE_DB_URL=https://web-dev-site-133c6-default-rtdb.asia-southeast1.firebasedatabase.app
FIREBASE_PROJECT_ID=web-dev-site-133c6
FIREBASE_STORAGE_BUCKET=web-dev-site-133c6.appspot.com
FIREBASE_MSG_SENDER_ID=763294262927
FIREBASE_APP_ID=1:763294262927:web:afd7f1f06660147c88b2f

``` 

### 3. Run development server
```sh 
$ npm run dev-server
```
### 4. (optional) if this error occurs
Error: Node Sass does not yet support your current environment: Windows 64-bit with false
```sh
$ npm uninstall node-sass
$ npm install node-sass
```
Then re-run app:
```sh
$ npm run dev-server
```
---

## Build the project
```sh
$ npm run build
```

## How to add products or perform CRUD operations for Admin
1. Navigate to your site to `/signin`
2. Signin with following credentials:
email: admin@gmail.com
password: Admin123
4. You can add more products now
 

**Firebase Admin to be integrated soon**

## Features

* Admin CRUD operations
* Firebase authentication
* Firebase auth provider authentication
* Account creation and edit

