# JSON Server

Note: This content is not required for the Course! It is being provided for those interested in serving their own local API / data for the Final Project.

<hr />

[JSON Server](https://www.npmjs.com/package/json-server) is an easy-to-use Node.js Package that simulates a [RESTful API](https://blog.postman.com/rest-api-examples/) using a JSON file as the data source.

With JSON Server, you can create a back-end data store (JSON file) and serve the data to your front-end web application (ex: using the [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)).

## Install the following software on your Development Machine

1. [Node.js](https://nodejs.org/en)

   1.1 Follow instructions on the Node.js [Downloads page](https://nodejs.org/en/download/prebuilt-installer)

   - [video - Install Node.js and npm on a Mac](https://www.youtube.com/watch?v=MD0yqgMvj4w)

     1.2 Verify installation by opening a Terminal (Mac) or a Command Prompt (PC) and executing the following command:

     ```
     node -v
     ```

   You should see the Node.js version displayed
   (Note: your version may be different depending on when you install Node.js)

   ```
   > node -v
   v22.6.0
   ```

   ![Node.js](img/img_1.png?raw=true "Node.js")

2. [npm - Node Package Manager](https://www.npmjs.com/)
   (Installed with Node.js)

   2.1 Verify installation by executing the following command:

   ```
   npm -v
   ```

   You should see the npm version displayed
   (Note: your version may be different depending on when you install Node.js / npm)

   ```
   > npm -v
   10.8.2
   ```

   ![npm](img/img_2.png?raw=true "npm")

3. [JSON Server](https://www.npmjs.com/package/json-server)

   3.1 Create a folder named `server`

   3.2 Execute the following command in the `server` folder:

   ```
   npm install json-server -g
   ```

   output:

   ```
   added 45 packages in 5s

   14 packages are looking for funding
   run `npm fund` for details
   ```

   ![npm-json-server](img/img_3.png?raw=true "npm-json-server")

   3.3 Verify installation (in the `server` folder):

   ```
   json-server --version
   ```

   You should see the json-server version displayed
   (Note: your version may be different depending on when you install json-server)

   ```
   > json-server --version
   1.0.0-beta.3
   ```

   ![json-server](img/img_4.png?raw=true "json-server")

4. [Postman](https://www.postman.com/)

   4.1 Follow instructions on the Postman [Downloads page](https://www.postman.com/downloads/)

   4.2 Launch Postman using the Postman Application Icon

   ![Postman Icon](img/img_5.png?raw=true "Postman Icon")

   ![Postman](img/img_6.png?raw=true "Postman")

## Build / Serve an API (JSON data File)

1. In the `server` folder, create a `db.json` file with your data

   ex: See `db.json` file

   ```
   {
   "teams": [
      {
            "id": "1",
            "teamName": "Red Bull",
            "base": "Milton Keynes, United Kingdom",
            "teamPrincipal": "Christian Horner",
            "chassis": "RB20",
            "powerUnit": "Honda RBPT",
            "pos": 3,
            "pts": 544
      }
   ],
   "drivers": [
      {
            "id": "1",
            "teamId": "1",
            "driverName": "Max Verstappen",
            "driverNumber": 1,
            "driverPos": 1,
            "country": "Netherlands",
            "pts": 393
      },
      {
            "id": "2",
            "teamId": "1",
            "driverName": "Sergio Perez",
            "driverNumber": 11,
            "driverPos": 8,
            "country": "Mexico",
            "pts": 151
      }
   ]
   }
   ```

   Note: All data is Copyright by [Formula One World Championship Limited](https://www.formula1.com).

2. Open a Terminal (Mac) or a Command Prompt (PC) in the `server` folder and execute the following command :

   ```
   json-server --watch db.json
   ```

   ![Server](img/img_7.png?raw=true "Server")

   Your API / data is now being serverd on:

   - [http://localhost:3000/teams](http://localhost:3000/teams)
   - [http://localhost:3000/teams/1](http://localhost:3000/teams/1)

   - [http://localhost:3000/drivers](http://localhost:3000/drivers)
   - [http://localhost:3000/drivers/1](http://localhost:3000/drivers/1)

   - [http://localhost:3000/teams?\_embed=drivers](http://localhost:3000/teams?_embed=drivers)

3. Test in Postman

   3.1 HTTP GET requests

   - GET Teams

     ![GET Teams](img/img_8.png?raw=true "GET Teams")

   - GET Drivers

     ![GET Drivers](img/img_9.png?raw=true "GET Drivers")

   - GET Teams with Drivers

     ![GET Teams with Drivers](img/img_10.png?raw=true "GET Teams with Drivers")

## Build an App to display your data

1. Create a `.public` folder in the `server` folder

2. Place your web application code (ex: HTML, CSS, JavaScript, images) in the `.public` folder

3. Launch json-server with the following command:

   ```
   json-server db.json --static .public
   ```

4. load [http://localhost:3000](http://localhost:3000) in your Browser
