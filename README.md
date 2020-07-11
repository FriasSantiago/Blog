# Blog

This is a setup guide for my Blog App built primarily with NodeJS, Express, Passport and MongoDB.

For more information please check the documentation on:

 1. [Express](https://www.npmjs.com/package/express)
 2. [PassportJS](http://www.passportjs.org/docs/)
 4. [Mongoose](https://www.npmjs.com/package/mongoose)

## Getting Started

With these instructions you will be able to set up the Blog Web App in your own computer.

### Prerequisites

You will need to download the following programs to run this project:

1. Node.js [(Download)](https://nodejs.org/en/)
2. Mongo DB [(Download)](https://www.mongodb.com/download-center#community)

## Setting up the database

- (Recommended/optional) Download Compass (MongoDB GUI) [(Download)](https://www.mongodb.com/products/compass)
- Run mongo
- Create a new database called 'webappdb'
- Create a new collection called 'users'
- Create a different collection called 'posts'

## Starting up the Server

For starting up the server, execute this command on the root path of the project in the /src folder (or wherever the file app.js is located)

```
node app.js
```

Now, you will see a message like 

```
Running on port 3000...
Connected!
```

Indicating that the server is running on port 3000 and that MongoDB has connected successfully.`

## Configuring the emails

First, go to the 'keys.js' file, there you will find an object key called 'emails', once you found it you will see a field that says 'email: youremail', and another one that says 'pwd: yourpassword', there you must replace 'youremail' with the gmail account you want to use (it must be a GMAIL account) and the password that corresponds to it.
Be sure to enable the 'less secure apps' option in gmail. (https://myaccount.google.com/lesssecureapps)

## Project Structure

In the /src folder you could find the app.js file (which contains the main configuration and set up of the App) along with the dbconn.js (for establishing a connection with the MongoDB database) and keys.js (which stores diffrent keys that are used in the app). 

#### Views, assets and partials folders

These folders contain the main files of the front-end side.

#### Models

It contains the models and schemas for the users and posts, that will be used with the database.

#### Routes folder

It contains all the routs that are used in the app. (GETs and POSTs)

#### Controllers folder

It contains the controllers that are used in the app.

## Built With (packages and reosurces)

* [Node.js](https://nodejs.org/en)
* [Express](https://www.npmjs.com/package/express)
* [Express Session](https://www.npmjs.com/package/express-session)
* [Body Parser](https://www.npmjs.com/package/body-parser)
* [Express Flash](https://www.npmjs.com/package/express-flash)
* [Express Partials](https://www.npmjs.com/package/express-partials)
* [Passport](http://www.passportjs.org/)
* [Passport Local](http://www.passportjs.org/packages/passport-local/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
