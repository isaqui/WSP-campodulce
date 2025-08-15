const { addKeyword, EVENTS} = require('@bot-whatsapp/bot')
//const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const flowContactoNuevo = require("./contacto_nuevo_flow");

const { crmExisteContacto, ctxObtenerDatos } = require('../utils/funciones');

module.exports = addKeyword(EVENTS.WELCOME)
    .addAction(async (ctx, { flowDynamic, gotoFlow, endFlow}) => {  
        console.log("EVENTS.WELCOME INIT"); 
        /* 
        let tmpDatos = await ctxObtenerDatos(ctx);
        try {
            let tmpDatoResp = await crmExisteContacto(tmpDatos);
            if (tmpDatoResp.datos == 'si') {
                let mensaje = '¡Hola! *' + tmpDatos.nombre + "*, ";
                mensaje += 'cuéntanos como podemos ayudarte, para brindarte la información correspondiente, contamos con terrenos en la zona de la Virgen de Luján, además de nuestras casas denominadas Prospehogar, *¿de cual te gustaría recibir información?*\n';
                mensaje += '*1)* 📍 Lotes en Campo Grande 1\n';
                mensaje += '*2)* 📍 Lotes en Campo Grande 2\n';
                mensaje += '*3)* 📍 Lotes en Campo Grande 3\n';
                mensaje += '*4)* 🏠🌲 Casas Prospehogar\n';
                await flowDynamic(mensaje, { media: 'https://orangegroup.com.bo/web/img/whatsapp/WSP-prospera.jpg' });
                console.log(`Si: registro ${tmpDatos.numero}`);
                return gotoFlow(flowContactoNuevo)
            } else {
                console.log(`No: registro ${tmpDatos.numero}`);
                return endFlow();
                //return  gotoFlow(flowContactoRecurente) 
            }
        } catch (err) {
            console.log('Conexion sin errores servidor');
        }
        */
    });