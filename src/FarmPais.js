import http from "./Http-Farmaciasdelpais";

class FarmPais {
    getAll() {
        return http.get("https://farmanet.minsal.cl/index.php/ws/getLocales");
    }

}
export default new FarmPais(); 