var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
var cookieParser = require('cookie-parser');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

var controller = {
    setupRouter(app) {
        const APP_DIR = `${__dirname}/app`;
        const features = fs.readdirSync(APP_DIR).filter(
            file => fs.statSync(`${APP_DIR}/${file}`).isDirectory()
        );

        features.forEach(feature => {
            const router = express.Router();
            const routes = require(`${APP_DIR}/${feature}/routes.js`);

            routes.setup(router);
            app.use(`/api/${feature}`, router);
        });
    },

    setup() {

        const PORT = 3000; // Port 

        app.use(express.static('public'));
        app.use(cookieParser());

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors());

        controller.setupRouter(app);

        // let options = {
        //     swaggerDefinition: {
        //         info: {
        //             description: 'Server Swagger API',
        //             title: 'Swagger',
        //             version: '1.0.0',
        //         },
        //         basePath: '/',
        //         produces: [
        //             "application/json",
        //             "application/xml"
        //         ],
        //         schemes: ['http', 'https'],
        //     },
        //     basedir: __dirname, //app absolute path
        //     files: ['./app/**/routes*.js', './app/**/model*.js'] //Path to the API handle folder
        // };
        // expressSwagger(options);
        const options = {
            definition: {
                openapi: "3.0.0",
                info: {
                    title: "Exam API Express API with Swagger",
                    version: "1.0.0",
                    description: "Rest CRUD API application made with Swagger",
                    // license: {
                    //     name: "MIT",
                    //     url: "https://spdx.org/licenses/MIT.html",
                    // },
                    // contact: {
                    //     name: "LogRocket",
                    //     url: "https://logrocket.com",
                    //     email: "info@email.com",
                    // },
                },
                // servers: [{
                //     url: "http://localhost:3000/api/",
                // }, ],
            },
            apis: ["./app/**/route*.js"],
        };

        const specs = swaggerJsdoc(options);
        app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(specs));

        app.get('/', function(req, res) {
            res.send('Server is started');
        });

        app.listen(PORT, () => {
            console.log('App listend on PORT:' + PORT);
        });
    },
};

module.exports = controller;