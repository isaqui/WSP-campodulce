const { addKeyword } = require('@bot-whatsapp/bot')

const flowContactoNuevoSelect_1 = addKeyword('1')
    .addAnswer('📍 1) Estás interesados en nuestros *terrenos de Campo Grande 1*, estos terrenos están ubicados en el decimo anillo, cuentan con todos los servicios básicos, papeles al día, más de 4 líneas de transporte, además de contar con una parada de trufi dentro de la urbanización, si bien es una urbanización que se encuentra casi totalmente comercializada, aún contamos con terrenos disponibles. \n*¿Te gustaría agendar una visita?*')


const flowContactoNuevoSelect_2 = addKeyword('2')
    .addAnswer('📍 2) Estás interesados en nuestros *terrenos de Campo Grande 2*, estos cuentan con todos los servicios básicos, papeles al día, áreas verdes desarrolladas, alumbrado público y muchas familias ya viviendo en la zona, si bien es una urbanización que se encuentra casi totalmente comercializada, aún contamos con terrenos disponibles. \n*¿Te gustaría agendar una visita?*')

const flowContactoNuevoSelect_3 = addKeyword('3')
    .addAnswer('📍 3) Veo que esta interesado en nuestros *terrenos de Campo Grande 3*, está se encuentra en pleno proceso de crecimiento, contamos con líneas de transporte que pasan por la puerta de urbanización, además de contar con todos los papeles al día, guardia de seguridad en la entrada, convenios con las cooperativas de servicios básicos y planes de pago cómodos para tu bolsillo. \n*¿Te gustaría agendar una visita?*')

const flowContactoNuevoSelect_4 = addKeyword('4')
    .addAnswer('🏠🌲 4) Casas Prospehogar \n*¿Te gustaría agendar una visita?*')

module.exports = addKeyword('##CONTACTO_NUEVO##')
    .addAnswer('Elige una opcion:', null, null, [flowContactoNuevoSelect_1, flowContactoNuevoSelect_2, flowContactoNuevoSelect_3, flowContactoNuevoSelect_4])
