require('dotenv').config();

const { createBot, createProvider, createFlow, addKeyword, EVENTS} = require('@bot-whatsapp/bot')
//const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot') 
//const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MySQLAdapter = require('@bot-whatsapp/database/mysql')
const ServerAPI = require("./http");

//CONSTANTES VARIABLES 
const PORT = process.env.PORT;

//===================== FLOW =====================//
const flowWelcome = require("./flows/welcome_flow");

const main = async () => {

    const adapterDB = new MySQLAdapter({
        host: process.env.MYSQL_DB_HOST,
        user: process.env.MYSQL_DB_USER,
        database: process.env.MYSQL_DB_NAME,
        password: process.env.MYSQL_DB_PASSWORD,
        port: process.env.MYSQL_DB_PORT,
    })
    //const adapterDB = new MockAdapter()
    //const adapterFlow = createFlow([flowPrincipal])
    const adapterFlow = createFlow([flowWelcome])
    const adapterProvider = createProvider(BaileysProvider)
    const httpServer = new ServerAPI(adapterProvider, adapterDB);
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    
    //QRPortalWeb()
    httpServer.start();
}

main()