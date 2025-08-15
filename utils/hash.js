const crypto = require("node:crypto");

function encryptData(data) {
  return Buffer.from(data).toString('base64');
}

function decryptData(data) {
  var result = "";
  try{
    result = Buffer.from(data, 'base64').toString('utf-8'); 
  }catch(e){
    result = "error"; 
  }
  return result; 
}

module.exports = { encryptData, decryptData };