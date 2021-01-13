var log4js = require('log4js');

log4js.configure({
    "appenders": {
        "file": {
            "type": "file",
            "filename": "log/examapi.log",
            "maxLogSize": 10485760,
            "backups": 10
        },
        "stout": {
            "type": "stdout",
            "layout": {
                "type": "coloured"
            }
        }
    },
    "categories": {
        "default": {
            "appenders": [
                "file",
                "stout"
            ],
            "level": "info"
        }
    }
});

module.exports = {
    log4js
};