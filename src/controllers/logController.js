const { serverLog, semrushLog } = require('../services/logger');


module.exports = {
    /**
     * Get all the logs of activties where occured on this nodeapp 
     * @param { * } req 
     * @param { logs } res 
     */
    setServerLog: (req, res) => {
        try {
            let { log } = req.body;
            serverLog.error(log);
            res.json({
                status: true,
                msg: 'Recorded successfully.'
            });
        } catch (err) {
            res.json({
                status: false,
                msg: err.toString()
            });
        }
    },
    setSemrushLog: (req, res) => {
        try {
            let { log } = req.body;
            semrushLog.error(log);
            res.json({
                status: true,
                msg: 'Recorded successfully.'
            });
        } catch (err) {
            res.json({
                status: false,
                msg: err.toString()
            });
        }
    }
}