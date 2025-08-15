const Funciones = require("../../utils/funciones");
const ctrlSesionVerify = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const adapterProvider = req.ws;
  let userId = "";
  let userName = "";
  try {
    if (adapterProvider.store.state.isOnline) {
      //console.log(adapterProvider.vendor);
      if (typeof adapterProvider.vendor.user !== 'undefined') {
           userId = Funciones.obtenerNumero(adapterProvider.vendor.user.id);
           userName = adapterProvider.vendor.user.name;
      }
      res.send({ data: "true", id: userId, name: userName }); 
      
      } else { 
          res.send({ data: "false"}); 
      } 
    } catch (error) {
      res.send({ data: "Error" }); 
    }
}; 
module.exports = { ctrlSesionVerify };