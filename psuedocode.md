+1: create server.js in main folder
    A:in server.js declare dependecies
        I:express
        II:bodyParser = helps form req.body
        III: Method-Ovveride = makes get and post requests more             universal
        IV:Express-HandleBars
    B: Declare global Vars
        I: app = Express
        II: PORT = process.env.PORT || 3000 = uses heroku port |or|         sets local port to 3000
    C: Declare Static DIR = tells express to default DIRs for routes      to the public folder
    D: Instruct the express to use bodyParser to parse URL
        I: set extended: false = dissallow the posting of nested          objects
    E: Tell the express to use handlebars 
        I: set defualt layout to main
    E2: set view engine to handlebars
    F: Declare Routes
        I: require the controller/routes
        II: tell express to use / with routes
    G: Tell Express to listen to heroku port |or| local 3000
        I: Console log listening and port
+2: NPM INIT = creates package.json + package-lock.json + /node_modules/
    A: NPM Install required packages see 1:A.
+3: create .Gitignore
    A: add node_modules
    B: .env
4: Create folder structure
    A: Config
    B:Controller/routes
    C:DB = database
    D: models
    E: Public
    F: Views
5: Config\
    A:Connection.js
        I: Instructes the server how to access the DB
            AA: usually has 3 modes: Development, Test,     Deployed
                note: all sensitive info users/pass stored in .env
    B: ORM
        I: orms are essentially custom middleware for all DB config CRUD
        II: NOT NEEDED IF SEQUELIZE OR SIMILAR MODULE USED
+6: Controller\
    A: Controller.js
    B: Defines The Routes for express
7: DB\
    A: holds Schemas and Seeds
        I: Also not Neccasary with SEQUELIZE
8: MODELS\ 
    A:MODEL.js
        II: This Hold the Actual CRUD Procedures. uses ORM for Config
9: PUBLIC\
    A: ASSETS\ = self explanitory. think week 1
        I: CSS
            AA:STYLE.CSS
        II: IMG
10: VIEWS\ = Contrains handlebars templates-these render the HTML pages dynamically depending on routes/DB data
    A: Layouts\
        I: MAIN.handlebars
    B:INDEX.handlebars
    