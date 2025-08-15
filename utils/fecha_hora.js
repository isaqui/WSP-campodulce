const moment = require('moment-timezone');
const timezone = "America/La_Paz"; //America/La_Paz | America/Noronha

class fechasHora {
    datetime() {
        const newFecha = moment.tz(timezone).format('YYYY-MM-DD HH:mm:ss');
        return newFecha; 
    }
}

module.exports = new fechasHora();