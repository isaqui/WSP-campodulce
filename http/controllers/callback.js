const { decryptData, encryptData } = require("../../utils/hash");
const Funciones = require("../../utils/funciones");
const { downloadFile, downloadFileDelete } = require("../../utils/download");
const fechaHora = require('../../utils/fecha_hora');

var opnwId = 0;
var datosNotId = 0;
var datosJson = "";

const ctrlCallBack = async (req, res) => {
  const payload = req.query.p;
  //const adapterDB = req.db;
  const adapterProvider = req.ws;

  // No hay parametros
  if (!payload) {
    res.send({ data: "Ups sin parametros!" });
    return;
  } else {
     //opnwId = await dbWspNotificaciones.insert(payload); 
  }
  
  // Verificar parametros JSON
  const decryJson = decryptData(payload); 
  if (Funciones.isValidJsonString(decryJson)) { 
    datosJson = JSON.parse(decryJson);
    datosNotId = datosJson['not_id'];

    //await dbWspNotificaciones.update(datosJson, opnwId);

    console.log(fechaHora.datetime() + " " + datosJson['typeSend']);

    switch(datosJson['typeSend']) {
      case "text":
        let textSend = await adapterProvider.sendText(`${datosJson['number']}@c.us`, datosJson['message']); 
        if (textSend.status) {
          //await dbWspNotificaciones.estado(textSend.status, opnwId);
        }
      break;
      case "file":
        let fileSend = await adapterProvider.sendFile(`${datosJson['number']}@c.us`, datosJson['filePath']);
        if (fileSend.status) {
          //await dbWspNotificaciones.estado(fileSend.status, opnwId); 
        }
      break;
      case "image":
        let downloadResp = await downloadFile(datosJson['filePath']);
        if (downloadResp != 'error') {
          let imageSend = await adapterProvider.sendImage(`${datosJson['number']}@c.us`, downloadResp, datosJson['text']);
          if (imageSend.status) {
            //await dbWspNotificaciones.estado(imageSend.status, opnwId);
            await downloadFileDelete(downloadResp);
          }
        } else {
          res.send({accion:"error",mensaje:"Error al descargar archivo filePath",datos:datosNotId});
        }
        break;
      case "media":
        let mediaSend = await adapterProvider.sendMedia(`${datosJson['number']}@c.us`, datosJson['filePath'], datosJson['text']);
        if (mediaSend.status) {
          //await dbWspNotificaciones.estado(mediaSend.status, opnwId); 
        }
        break;
      default: 
    } 
    
    res.send({accion:"correcto",mensaje:"El mensaje enviando correctamente",datos:datosNotId}); 
  } else {
    res.send({accion:"error",mensaje:"El mensaje no se envió",datos:datosNotId});
  } 
};

module.exports = { ctrlCallBack };