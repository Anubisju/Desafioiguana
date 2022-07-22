import http from "./Http-comman";

class FarmService {

    getAll(){
        return http.get("https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos");
    }
}
export default new FarmService();