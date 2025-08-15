require('dotenv').config();
const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadFolder = process.env.DOWNLOAD_FOLDER; // Carpeta donde se guardará la imagen

// Crear la carpeta si no existe
if (!fs.existsSync(downloadFolder)){
    fs.mkdirSync(downloadFolder);
}

const downloadFile = (url) => { 
  return new Promise((resolve, reject) => {
    const fileName = path.basename(url);
    const filePath = path.join(downloadFolder, fileName);
    const file = fs.createWriteStream(filePath); 

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => { 
            // Verificar que la imagen se descargó correctamente
            fs.access(filePath, fs.constants.F_OK, (err) => {
              if (err) {
                //console.error('La imagen no se descargó correctamente.');
                reject("error");
              } else {
                //console.log('La imagen se descargó correctamente.');
                resolve(filePath); 
              }
            });
          });
        });
      } else {
        //console.error(`Fallo en la descarga, código de estado: ${response.statusCode}`);
        reject("error");
      }
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Borrar el archivo si hay un error
      //console.error(`Error en la descarga: ${err.message}`);
      reject("error");
    });
  });
};

const downloadFileDelete = (filePath) => {
  console.log(filePath);
  return new Promise((resolve, reject) => {
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          //console.error('El archivo no existe');
          reject("error");
        } else {
            // Elimina el archivo
            fs.unlink(filePath, (err) => {
                if (err) {
                  //console.error('Error al eliminar el archivo:', err);
                  reject("error");
                } else {
                  //console.log('Archivo eliminado correctamente');
                  resolve("correcto");
                } 
            });
        }
    }); 
  });
};

module.exports = { downloadFile, downloadFileDelete };
