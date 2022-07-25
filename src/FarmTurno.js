import http from "./Http-Farmaciasdeturno";

class FarmTurno {
    getAll() {
        return http.get("https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos");
    }
}
export default new FarmTurno();