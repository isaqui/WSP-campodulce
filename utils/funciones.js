class Funciones {

     isValidJsonString(text) {
        if (typeof text !== 'string') {
            return false;
        } 
        try {
            const parsed = JSON.parse(text);
            return (typeof parsed === 'object' && parsed !== null);
        } catch (e) {
            return false;
        }
    }

     isObjeto(obj) {
        return obj !== null && typeof obj === 'object'; 
     }
    
    obtenerNumero(text) {
        const num = text.split(":");
        return num[0];
    }
}

module.exports = new Funciones();
