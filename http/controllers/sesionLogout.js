const ctrlSesionLogout = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const adapterProvider = req.ws;
  try {
    
      if (adapterProvider.store.state.isOnline) {
          adapterProvider.vendor.logout(); 
          res.send({ data: "true"});
      } else { 
          res.send({ data: "false"});
      } 
    } catch (error) {
      res.send({ data: "Error" }); 
    }
};

module.exports = { ctrlSesionLogout };