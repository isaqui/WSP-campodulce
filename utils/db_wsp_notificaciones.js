const db = require('./db');
const fechaHora = require('./fecha_hora');

class dbWspNotificaciones {
    
    insert(data) {
        return new Promise((resolve, reject) => {
            db.insert('op_notificaciones_whatsapp_log', {opnw_datos:`${data}`, opnw_fecha_cre:fechaHora.datetime()}) 
            .then(result => { 
                resolve(result.insertId);
            }) 
            .catch(err => {
                return reject('error');
            });
        }); 
    }
    
    update(datosJson, opnwId) {
        return new Promise((resolve, reject) => {
            db.update('op_notificaciones_whatsapp_log', {opnw_not_id:`${datosJson["not_id"]}`, opnw_numero:`${datosJson["number"]}`, opnw_tipo:`${datosJson["typeSend"]}`,opnw_datos_json: JSON.stringify(datosJson) }, opnwId, 'opnw_id') 
            .then(result => {
                resolve("correcto"); 
            })
            .catch(err => {
                return reject('error'); 
            });
        }); 
    }

    estado(estado, opnwId) {
        let opnw_estado = 0;
        if (estado) {
            opnw_estado = "Enviado";
        } else { 
            opnw_estado = "Error";
        } 
        return new Promise((resolve, reject) => {
            db.update('op_notificaciones_whatsapp_log', {opnw_estado:`${opnw_estado}`}, opnwId, 'opnw_id')
            .then(result => {
                resolve("correcto");
            })
            .catch(err => {
                return reject('error'); 
            });
        });
    }
}

module.exports = new dbWspNotificaciones();