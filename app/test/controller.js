const logger = require("../../modules/logger");
const log = logger.log4js.getLogger("test");

const APIController = {
    get(req, res) {
        let mods = [];
        for (var i = 0; i < 2; i++) {
            var model = {};
            model.username = "test" + (i + 1);
            model.password = "password" + (i + 1);
            mods.push(model);
        }
        log.info("get data : " + mods);
        res.json({ code: 200, message: "", data: mods });
    },

    post(req, res) {
        // let username = req.body.username;
        // let password = req.body.password;
        log.info("post data : " + req.body);
        res.json({ code: 200, message: "", data: req.body });
    },
};

module.exports = APIController;