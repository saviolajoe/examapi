var controller = require("./controller");

// routes.js
/**
 * @swagger
 * components:
 *   schemas:
 *     Test:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Username.
 *           example: string
 *         fullname:
 *           type: string
 *           description: Password.
 *           example: string
 */
const routes = {
    setup(router) {
        /**
         * @swagger
         * /api/test:
         *   get:
         *     summary: Retrieve a list of JSONPlaceholder test.
         *     description: Retrieve a list of test from JSONPlaceholder.
         *     responses:
         *       200:
         *         description: A list of test.
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 code:
         *                   type: integer
         *                   example: 200
         *                 message:
         *                   type: string
         *                   example: ''
         *                 data:
         *                   type: array
         *                   items:
         *                     $ref: '#/components/schemas/Test'
         */
        router.get('/', controller.get);

        /**
         * @swagger
         * /api/test:
         *   post:
         *     summary: Create a JSONPlaceholder test.
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Test'
         *     responses:
         *       200:
         *         description: Created
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 code:
         *                   type: integer
         *                   example: 200
         *                 message:
         *                   type: string
         *                   example: ''
         *                 data:
         *                   type: integer
         *                   example: 
         */
        router.post('/', controller.post);
    }
};

module.exports = routes;