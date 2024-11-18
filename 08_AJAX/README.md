# AJAX Demo

There are three versions of this Demo

- v1. Dynamic HTML Select Elements / DOM Manipulation (w/o AJAX)
- v2. AJAX (Node.js Express APIs)
- v3. Local API / Data (json-server)

<hr />
<br />

## v1. Dynamic HTML Select Elements / DOM Manipulation

Launch `v1/index.html` in your Browser

<br />

## v2. AJAX (Node.js Express APIs)

### Prereqs

- Requires [Node.js](https://nodejs.org/en) to be installed to serve APIs. ( [Video - Install Node.js on a Mac ](https://www.youtube.com/watch?v=MD0yqgMvj4w&list=PLRBkbp6t5gM37UdjMTGZcBs_hoOvCl30p&index=11))

### Init Project

Open a Terminal, in the `v2/server` folder, and run the following command

```
npm install
```

### Start Server

```
npm run start:dev
```

### Test APIs

Launch [http://localhost:3000/](http://localhost:3000/) in your Browser

#### Teams

- Get All Teams [http://localhost:3000/api/team](http://localhost:3000/api/team)
- Get a Team [http://localhost:3000/api/team/0](http://localhost:3000/api/team/0)

#### Drivers

- Get All Drivers [http://localhost:3000/api/driver](http://localhost:3000/api/driver)
- Get A Driver [http://localhost:3000/api/driver/0](http://localhost:3000/api/driver/0)
- Get Drivers for a Team [http://localhost:3000/api/driver/team/0](http://localhost:3000/api/driver/team/0)

### Web Page (AJAX)

- Launch `v2/client/index.html` in your Browser

<br />

## v3. Local API / Data (json-server)

Note: This version is not required for the Course! It is being provided for those interested in serving their own local API / data for the Final Project.

- See README.md in v3 folder
