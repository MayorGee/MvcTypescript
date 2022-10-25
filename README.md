# Task Description
   
 **_Using MVC pattern, make a site that can be used to interact with each entity(table) of a given database_**

# Entities

  * Internship
  * Intern
  * Mentor
  * Specialty Area
  * Module
  * Task
  

# Introduction
  This project was built on the NodeJs version 16.13.2 and fully written in ES6. As much as I could, I tried to obey the SOLID principles, so the code is reuseable for similar problems and can easily be dissected into smaller parts should the need arise. The following npm packages were used :

  * body-parser: ^1.20.0,
  * dotenv: ^16.0.2,
  * express: ^4.18.1,
  * http-proxy-middleware: ^2.0.6
  * browser-sync: ^2.27.10,
  * del: ^7.0.0,
  * gulp: ^4.0.2,
  * gulp-autoprefixer: ^8.0.0,
  * gulp-concat: ^2.6.1,
  * gulp-csso: ^4.0.1,
  * gulp-file-include: ^2.3.0,
  * gulp-htmlmin: ^5.0.1,
  * gulp-nodemon: ^2.5.0,
  * gulp-sass: ^5.1.0,
  * liquidjs: ^9.42.0,
  * mysql-await: ^2.2.2,
  * node-sass: ^7.0.1,
  * nodemon: ^2.0.19,
  * sass": ^1.54.9

## Environment setting

  Before anything, do the following:
  
  1. Clone project to an empty folder
  2. Create a .env file in the root directory of the project
  3. Copy the content of the `.env.sample` file to your .env file 
  4. You will need to fill in the following details: 

    * DB_USER 
    * DB_PASSWORD 
    * DB_NAME 


## Navigation In Project

  To make navigation easier, let's talk briefly about the design pattern used: **MVC**[(Model-View-Controller)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

  **Model** - Contains the so-called. "business logic" - processing and verification of data, access to databases, represents the internal structure of the system. The model should not directly interact with the user.

  **View** - describes the appearance of the application.

  **Controller** - A link between the model and the view, receives data from the user, passes it to the model, receives the processed result and passes it to the view


  ## Index.js
  The is the entry point into the project, it is located at the root level of the project. It contains the following:

  1. An instance of the **_App Class_** which is used to interact with the express package and some init methods for other packages imported into the App class

  2. An array of routers for each entity to be sent to the App class for initialization: `app.initRouters(routers)`

  ## Database.js
  House to the **_Database Class_**. The Database is where the mysql-await package was imported and also connection is created here with the data gotten from the .env file

  ## App.js
  House to the **_App class_**. The App class is used as a reference to the express package and also used to to initilize the Routers, Liquidjs, BodyParser and also to initiate listening at the given port.

  ## gulpfile.js
  Using gulp packages and browser-sync, files are copied from the src folder to the dist page, scss is converted to css and the page is refreshed after every change

  ### Models
  1. There is a folder for the resources of each entity, which contains all methods that each entity will use to send queries to the Database.

  2. There is an `Environment.js` File which reads the database login details and getMethods to return each one upon call.  Just an extra level of security

  ### views
  1. `AbstractView.js` - This was used to prevent unnecessary duplications in code.

  2. For each entity, there is a pair of classes; one for a page with a single item of the entity and the other for multiple items of the entity (e.g `InternView`, `InternsView`)

  These view files contain all the _setMethods_ and _getMethods_ needed by that entity anywhere in the project.

  3. `HomeView.js`
  Since homepage has no entity, I made a separate view for that

  ### Controllers
  1. `Controller.js` - This was used to avoid unnecessary code duplication, it contains methods that are needed by all controllers so they all [extend](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/extends) it so that they can have access to these methods (e.g execute() and renderPage())

  2. `FormController` - Contains two methods for each entity that will be updated with an HTML form;
  
  - An AddEntityController to add a new item to the list of entities
  - An UpdateEntityController to edit an already existing item on the entity's table
  - A DeleteEntityController to delete an item from an entity using its id

  3. For each entity, there is a pair of controllers:
    one for a single item of the entity and the other for multiple items of the entity e.g `MentorController` and `MentorsControllers`

  4. `HomeController.js` - Contains the controller for the home page

      
  ### routers
  This is the part of the project where url paths are organized. The project contains a router class for each entity (e.g `TaskRouter`) and an `AbstractRouter` class

  The _AbstractRouter_ contains the `setRouter` and `getRouter` methods which are needed by all the other routers and is extended to each of the other routers. In the other router classes, url paths are grouped together with the controller responsible for them and which request method they should send.

  ### Templates
  written in liquidjs, This is where the layout of each entity's page is designed. There is an index layout which contains the necessary meta data for an html document and is re used by all the pages 